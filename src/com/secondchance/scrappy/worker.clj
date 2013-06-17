(ns com.secondchance.scrappy.worker
  (:require [cemerick.bandalore :as sqs]
            [cheshire.core :as json]
            [clj-http.client :as client]
            [com.secondchance.scrappy.scraper :as scraper]
            [environ.core :refer [env]]))

(defn set-log-level
  []
  (.setLevel (java.util.logging.Logger/getLogger "com.amazonaws")
             java.util.logging.Level/WARNING))

(def dean-endpoint (or (env :scrappy-dean-endpoint)
                       "http://localhost:7474/internal/listings"))

;; FIX: handle errors visibly, with a POST of failure to the dean API.

(defn handle
  [url]
  (try
    (let [scraped (scraper/scrape-remote url)
          product? (:price scraped)]
      (when product?
        (client/post dean-endpoint
                     {:content-type :json
                      :body (json/generate-string scraped)})))
    (catch Exception e nil)))

(defn -main
  [& args]
  (let [client (sqs/create-client (env :aws-access-key)
                                  (env :aws-secret-key))
        queue (sqs/create-queue client "listings")]
    (set-log-level)
    (loop []
      (doall
       (map (sqs/deleting-consumer client (comp handle :body))
            (sqs/polling-receive client queue :limit 10)))
      (Thread/sleep 5000)
      (recur))))
