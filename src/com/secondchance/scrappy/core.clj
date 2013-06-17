(ns com.secondchance.scrappy.core
  (:require [clojure.tools.cli :as cli]
            [clojure.pprint :as pprint]
            [com.secondchance.scrappy.scraper :as scraper]))

(defn parse-args [args]
  (cli/cli args
           ["-u" "--url" "A URL to scrape."]))

(defn -main [& args]
  (let [[options extra-args docs] (parse-args args)]
    (cond
     (:url options)
     (let [url (:url options)
           html (slurp url)
           scrape (scraper/scrape url html)]
       (if (:retailer scrape)
         (pprint/pprint scrape)
         (println "URL did not match any retailer.")))
     :else
     (println docs))))
