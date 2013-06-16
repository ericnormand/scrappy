(ns com.secondchance.scrappy.scraper
  (:require [cheshire.core :as json]
            [clj-http.client :as client]
            [clojure.walk :refer [keywordize-keys]]
            [evaljs.core :as js]
            [evaljs.rhino :as rhino]
            [clojure.string :as string]
            [net.cgrand.enlive-html :as html]))

(defn re-qr
  "A utility for quoting special characters in a string replacement."
  [replacement]
  (java.util.regex.Matcher/quoteReplacement replacement))

(def ih-file (slurp (clojure.java.io/resource "ih.js")))

(def ih-json (keywordize-keys (json/parse-string ih-file)))

(def regex-errors (atom []))

(defn- clean-regex
  "Clean up IH regex. Basically, convert legal JS escapes
   into Java equivalents."
  [regex]
  (-> regex
      (string/replace #"\\1" "\\\\u0001")
      (string/replace #"\\FFFF" "\\\\uFFFF")
      (string/replace #"\\0" "\\\\u0000")
      (string/replace #"\{index" (re-qr "\\{index"))
      (string/replace #"\\CAD" "CAD")))

(defn mkscraper-regex
  "Make a scraper function given a regex. May return nil if the regex is
invalid."
  [regex]
  (try
    (let [pattern (re-pattern (clean-regex regex))]
      (fn [s]
        (let [ms (re-find pattern s)]
          (when (>= (count ms) 2)
            (ms 1)))))
    (catch Throwable t
      (swap! regex-errors conj [regex (str t)])
      nil)))

(defn get-meta-tags
  [resource]
  (let [tags (html/select resource [:html :> :head :> :meta])]
    (-> {}
        (into (for [{{:keys [content name]} :attrs} tags
                    :when (and content name)]
                [(keyword (str "meta-" name)) content]))
        (into (for [{{:keys [content property]} :attrs} tags
                    :when (and content property)
                    :when (= "og:" (.substring property 0 3))
                    :let [name (.substring property 3)]]
                [(keyword (str "og-" name)) content])))))

(comment
  ;; This was an attempt to perform http requests from the scraper
  ;; because some JS snippets used them. Very few.
  ;; I gave up because I was getting blocked possibly on user agent
  ;; sniffing. And I did not want to go further.
 (def allow-http-in-js (atom true))

 (def fetched-urls (atom []))

 (defn gethttp [url]
   (swap! fetched-urls conj url)
   (if @allow-http-in-js
     (try
       (-> url
           (java.net.URL.)
           (.openStream)
           (slurp))
       (catch Exception e
         (.printStackTrace e)
         ""))
     ""))

 (js/evaljs "function getHttp(url, f){ var gethttp =
                       com.secondchance.dean.scraper.scrape$gethttp();
                       f(gethttp.invoke(url)); }"))

(def js-errors (atom []))

(defn mkscraper-js
  "Make a scraper function given a javascript snippet."
  [js]
  (fn [s]
   (try
     (let [context (rhino/rhino-context {:html s})]
       (js/with-context context
         ;; where we keep the final value until needed
         (js/evaljs "var final_value;")
         ;; IH calls this callback function with the final value
         (js/evaljs "function callback(x){final_value=x;}")
         ;; Do nothing with getHttp.
         (js/evaljs "function getHttp(url, f){f('');}")
         ;; Wrap the IH js in a function and call it.
         (js/evaljs (str "(function(){ " js " }());"))
         ;; evaljs returns the final evaluated statement.
         (js/evaljs "final_value;")))
     (catch Throwable t
       (swap! js-errors conj [js (str t)])
       nil))))

(defn mkscraper
  "Make a scraper function. regex and js can be nil or
empty strings."
  [regex js]
  (let [r (when (seq regex) (mkscraper-regex regex))
        j (when (seq js)    (mkscraper-js js))]
    (if (and r j)
      (fn [s]
        (or (r s) (j s)))
      (or r j))))

(defn build-scraper
  "Given a map representing a retailer from IH, build a map
representation with scraper functions."
  [retailer]
  {:name (:name retailer)
   :url-matcher (re-pattern (:regex retailer))
   :region (when (:region retailer) (keyword (:region retailer)))
   :scraper (into {} (for [[k {:keys [regex js]}] (:scraper retailer)
                           :let [scraper (mkscraper regex js)]
                           :when scraper]
                       [k scraper]))})

;; The Clojure representation of our scrapers.
;; Keys are the retailer names from IH.
(def ih (into {} (for [retailer (:all_retailers ih-json)]
                   [(:name retailer)
                    (build-scraper retailer)])))

(def regions (into {} (for [[_ region] (:regions ih-json)]
                        [(keyword (:code region))
                         region])))

;; I don't know how much we can do with this
(def generic-retailer {:name "GenericRetailer"
                       :scraper {:info (mkscraper-js (get-in ih-json [:generic :scraper :js]))}})

(defn retailer-url-matches?
  "Does this URL match a given retailer?"
  [retailer url]
  (re-find (:url-matcher retailer) url))

(defn retailer-url-matches
  "Return a lazy seq of names of retailers that match this URL."
  [url]
  (for [[name retailer] ih
        :when (retailer-url-matches? retailer url)]
    name))

(defn retailer-scrape
  "Given a retailer and an html string, scrape out all information
   we have in that retailer."
  [retailer s]
  (-> {:retailer (:name retailer)
       :region-key (:region retailer)
       :region (regions (:region retailer))}
      (into (get-meta-tags (html/html-resource (java.io.StringReader. s))))
      (into (for [[k f] (:scraper retailer)]
              [k (f s)]))))

(defn scrape
  "Given a URL and an html string, find the retailer and scrape out
   everything we can."
  [url s]
  (when-let [name (first (retailer-url-matches url))]
    (assoc (retailer-scrape (get ih name) s)
      :url url)))

(defn supported?
  [url]
  (not (empty? (retailer-url-matches url))))

(def user-agent-string
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")

(def default-headers {"User-Agent" user-agent-string})

(defn scrape-remote
  [url]
  (when (supported? url)
    (try
      (let [resp (client/get url {:headers default-headers})
            raw-html (:body resp)]
        (scrape url raw-html))
      (catch Exception e nil))))

