(ns com.secondchance.scrappy.worker
  (:require [aws.sdk.s3 :as s3]
            [cemerick.bandalore :as sqs]
            [cheshire.core :as json]
            [clj-http.client :as client]
            [com.secondchance.scrappy.scraper :as scraper]
            [environ.core :refer [env]]))

(def aws-creds {:access-key (env :aws-access-key)
                :secret-key (env :aws-secret-key)})

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
    (let [result (scraper/scrape-remote url)
          scraped (:scraped result)
          raw (:raw result)
          uuid (:uuid scraped)
          product? (and (:price scraped) (:mpn scraped))]
      (when product?
        (client/post dean-endpoint
                     {:content-type :json
                      :body (json/generate-string scraped)})
        (s3/put-object aws-creds "secondchance.listings" uuid raw)))
    (catch Exception e nil)))

(defn -main
  [& args]
  (let [client (sqs/create-client (:access-key aws-creds)
                                  (:secret-key aws-creds))
        queue (sqs/create-queue client "listings")]
    (set-log-level)
    (loop []
      (doall
       (map (sqs/deleting-consumer client (comp handle :body))
            (sqs/polling-receive client queue :limit 10)))
      (Thread/sleep 5000)
      (recur))))
