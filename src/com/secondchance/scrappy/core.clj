(ns com.secondchance.scrappy.core
  (:require [clojure.tools.cli :as cli]
            [clojure.pprint :as pprint]
            [com.secondchance.scrappy.scraper :as scraper]))

(System/setProperty "http.agent" "")

(def user-agent-string
  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")

(defn slurp-moz [url]
  (let  [con (-> url
                 (java.net.URL.)
                 (.openConnection)
                 (doto
                     (.setRequestProperty "User-Agent" user-agent-string)))]
    (try
      (slurp (.getInputStream con))
      (finally
        (.disconnect con)))))

(defn parse-args [args]
  (cli/cli args
           ["-t" "--test" "The name of the test to create."]
           ["-u" "--url" "A URL to scrape."]))

(defn scrape-and-print
  [url]
  (let [html (slurp-moz url)
        scrape (scraper/scrape url html)]
    (if (:retailer scrape)
      (pprint/pprint scrape)
      (println "URL did not match any retailer."))))

(defn add-test
  [name url]
  (let [html (slurp-moz url)
        scrape (scraper/scrape url html)]
    (if (:retailer scrape)
      (let [scrape (select-keys scrape [:retailer :title :price :pnp :identifier :mpn :brand])]
       (do
         (spit (str "test/resources/scraping/" name ".url") url)
         (spit (str "test/resources/scraping/" name ".html") html)
         (spit (str "test/resources/scraping/" name ".exp") (with-out-str
                                                              (pprint/pprint scrape)))))
      (println "URL did not match any retailer."))))

(defn -main [& args]
  (let [[options extra-args docs] (parse-args args)]
    (cond
     (and (:test options) (:url options))
     (add-test (:test options) (:url options))
     (:url options)
     (scrape-and-print (:url options))
     :else
     (println docs)))
  (shutdown-agents))
