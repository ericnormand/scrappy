(ns scrappy.core
  #+cljs (:require-macros [scrappy.macros :refer [catch-errors]])
  (:require
   #+cljs [jayq.core :refer [$]]
   [clojure.string :as string])
  #+clj (:import [org.jsoup Jsoup]))

#+clj (defmacro catch-errors [& body]
        `(try
           ~@body
           (catch Throwable t#
             nil)))

#+cljs (defn load-jquery []
         (-> (js/window.document.getElementsByTagName "body")
             (aget 0)
             (.appendChild (doto (js/window.document.createElement "script")
                             (.setAttribute "src" "jquery.js")))))

(defn parse-double
  [s]
  (try
    (#+clj Double/parseDouble #+cljs js/parseFloat
           (string/join "" (string/split s #",")))
    (catch #+clj Throwable #+cljs js/Object e
           (#+clj println #+cljs js/console.log
                  (str "Could not parse '" s "' as a float, but thought I should be able to."))
           nil)))

(defn worthwhile? [s]
  (boolean (and (string? s)
                (pos? (count s)))))

(defn clean [s]
  (string/replace s #"[ \s]+" " "))

(defn clean-trim [s]
  (string/trim (clean s)))

(defn get-attr [e n]
  (#+clj .attr #+cljs .prop e n))

(defn select-children [dom sel]
  (#+clj .select #+cljs .find dom sel))

(defn wrap [dom]
  (#+clj identity #+cljs $ dom))

(defn find-regex [re st]
  (second (map clean-trim (re-find re st))))

(defn replace-newlines [st]
  (string/join " " (string/split st #"\n")))

(defmulti scrape-field* (fn [u h d s] (set (keys s))) :default nil)

(defmethod scrape-field* #{:url}
  [u _ _ _]
  u)

(defmethod scrape-field* #{:string}
  [_ _ _ {s :string}]
  s)

(defmethod scrape-field* #{:select}
  [_ _ dom {select :select}]
  (first (for [el (select-children dom select)
               :let [v (clean-trim (.text (wrap el)))]
               :when (worthwhile? v)]
           v)))

(defmethod scrape-field* #{:select :clean}
  [_ _ dom {select :select clean :clean}]
  (first (for [el (select-children dom select)
               :let [text (replace-newlines (.text (wrap el)))
                     v (catch-errors (find-regex (re-pattern clean) text))]
               :when (worthwhile? v)]
           v)))

(defmethod scrape-field* #{:select :value}
  [_ _ dom {select :select value :value}]
  (when (seq (select-children dom select))
    value))

(defmethod scrape-field* #{:select :extract}
  [_ _ dom {select :select extract :extract}]
  (first (for [el (select-children dom select)
               :let [v (catch-errors
                        (clean-trim (get-attr (wrap el) extract)))]
               :when (worthwhile? v)]
           v)))

(defmethod scrape-field* #{:select :extract :clean}
  [_ _ dom {select :select extract :extract clean :clean}]
  (first (for [el (select-children dom select)
               :let [text (get-attr (wrap el) extract)
                     v (catch-errors (find-regex (re-pattern clean) text))]
               :when (worthwhile? v)]
           v)))

(defmethod scrape-field* #{:select :clean :value}
  [_ _ dom {select :select clean :clean value :value}]
  (when (seq (for [el (select-children dom select)
                   :let [text (replace-newlines (.text (wrap el)))
                         v (catch-errors (find-regex (re-pattern clean) text))]
                   :when (worthwhile? v)]
               v))
    value))

#+cljs (defmethod scrape-field* #{:regex :fun}
         [_ html _ {regex :regex fun :fun}]
         (let [f (js/eval (str "(" fun ")"))
               text (replace-newlines html)
               s (find-regex (re-pattern regex) text)]
           (f s)))

(defmethod scrape-field* #{:regex}
  [_ html _ {regex :regex}]
  (find-regex (re-pattern regex) html))

(defn scrape-field
  [url html dom {div :div :as sel}]
  (catch-errors
   (let [v (scrape-field* url html dom sel)]
     (if div
       (when-let [d (scrape-field url html dom div)]
         (when-let [vn (parse-double v)]
           (when-let [dn (parse-double d)]
             (when-not (zero? dn)
               (str (double (/ vn dn)))))))
       v))))

(defn ->dom [html]
  (#+clj Jsoup/parse #+cljs $ (str "<div>" html "</div>")))

(defn scrape
  [url html scraper]
  (let [dom (->dom html)]
    (into {} (for [[k sels] scraper]
               (first (for [sel sels
                            :let [v (scrape-field url html dom sel)]
                            :when (worthwhile? v)]
                        [k v]))))))

(defn extractor
  [html selector]
  (let [dom (->dom html)]
    (map str (select-children dom selector))))
