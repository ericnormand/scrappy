(ns com.secondchance.scrappy
  (:require [clojure.string :as string])
  (:import [org.jsoup Jsoup]))

(defn get-attr [el attr]
  (.attr el attr))

(defmacro catch-errors [& body]
  `(try
     ~@body
     (catch Throwable t#
       nil)))

(defn worthwhile?
  [v]
  (if (string? v)
    (pos? (.length v))
    false))

(defn select
  [raw parsed {:keys [select extract regex clean string] :as sel}]
  (try
    (cond
     (and select extract clean)
     (first (for [el (.select parsed select)
                  :let [v (catch-errors
                           (second (map string/trim
                                        (re-find clean (reduce get-attr el extract)))))]
                  :when (worthwhile? v)]
              v))
     (and select extract)
     (first (for [el (.select parsed select)
                  :let [v (catch-errors (.trim (reduce get-attr el extract)))]
                  :when (worthwhile? v)]
              v))
     (and select clean)
     (first (for [el (.select parsed select)
                  :let [v (catch-errors
                           (second (map string/trim (re-find clean (.text el)))))]
                  :when (worthwhile? v)]
              v))
     select
     (first (for [el (.select parsed select)
                  :let [v (.trim (.text el))]
                  :when (worthwhile? v)]
              v))
     regex
     (.trim (second (re-find regex raw))))
    (catch Throwable e
      nil)))

(defn scrape
  [html scraper]
  (let [parsed (Jsoup/parse html)]
    (into {} (for [[k sels] scraper]
               (first (for [sel sels
                            :let [v (select html parsed sel)]
                            :when (worthwhile? v)]
                        [k v]))))))

;; (def scraper
;;   {:price [{:select "[itemprop=price]"
;;             :clean #"\$(.+?)(\s|$)"}]
;;    :manufacturer [{:regex #"Manufacturer:\s+(.+)"}]
;;    :mpn [{:select "#details_descMisc"
;;           :clean #"Model No: (?!n/a)(?!NA)(.+?)(\s+|$)"}
;;          {:regex #"Manufacturer Part Number:\s+(.+)"}]
;;    :not-active? [{:select "#solddesc h2"}]
;;    :image [{:select "meta[property=og:image]"
;;             :extract ["content"]}]
;;    :url [{:select "link[rel=canonical]"
;;           :extract ["href"]}]
;;    :name [{:select "h1"}]
;;    :isbn [{:regex #"ISBN:\s+(.+)"}
;;           {:regex #"ISBN:</dt>\s+<dd>(.+?)</dd>"}]
;;    :upc [{:regex #"UPC:</dt>\s+<dd>(.+?)</dd>"}
;;          {:regex #"UPC:</b>\s+(.+)"}]})

;; (scrape (slurp "http://www.overstock.com/Home-Garden/Farberware-15-piece-Forged-Natural-Knife-Block-Set-with-Bonus-Poly-Cutting-Board/7316338/product.html") scraper)