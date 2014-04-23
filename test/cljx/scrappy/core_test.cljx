(ns scrappy.core-test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)]
                  [scrappy.core :refer [scrape] :as s])
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require [cemerick.cljs.test :as t]
                   [scrappy.core :refer [scrape] :as s]))

(deftest url-works-regardless
  (is (= {:url "http://www.amazon.com/some-product"}
         (scrape "http://www.amazon.com/some-product"
                 "some < bad html"
                 {:url [{:url true}]}))))

(deftest test-regex
  (is (= {:wow "8.00"}
         (scrape "some url"
                 "<script> hyh =

  8.00; </script>"
                 {:wow [{:regex "hyh =\\s+([0-9.,]+)"}]}))))

(deftest test-string
  (is (= {:yo "dude"}
         (scrape "url should be ignored"
                 "some bad < html <"
                 {:yo [{:string "dude"}]})))
  (is (= {:yo "dudette"}
         (scrape "url should be ignored"
                 "some bad < html <"
                 {:yo [{:select "poop"}
                       {:string "dudette"}]}))))

(deftest test-select
  (is (= {:fred "flintstone"}
         (scrape "ignored"
                 "<p>ignored</p> <span class=\"last-name\">flintstone </span>  "
                 {:fred [{:select ".last-name"}]}))))

(deftest test-select-clean
  (is (= {:barney "rubble"}
         (scrape "ignored"
                 "<p>ignored</p> <span class=\"last-name\">last name: rubble </span>  "
                 {:barney [{:select ".last-name"
                          :clean "last name:(.*)"}]}))))

(deftest test-select-value
  (is (= {:pet "dino"}
         (scrape "ignored"
                 "<p>ignored</p> <div class=\"pet\"><div class=\"dino\"></div></div>"
                 {:pet [{:select ".pet .dino"
                         :value "dino"}]}))))

(deftest test-select-extract
  (is (= {:wilma "/flintstone"}
         (scrape "whatever"
                 "<a class=\"wilma\" href=\"/flintstone\">fdsfs</a> "
                 {:wilma [{:select ".wilma"
                           :extract ["href"]}]}))))

(deftest test-select-extract-clean
  (is (= {:wilma "flintstone"}
         (scrape "whatever"
                 "<a class=\"wilma\" href=\"/flintstone\">fdsfs</a> "
                 {:wilma [{:select ".wilma"
                           :extract ["href"]
                           :clean "^/(.*)$"}]}))))

#+cljs (deftest test-regex-fun
         (is (= {:wow "$8.00"}
                (scrape "some url"
                        "<script> hyh =

  8.00; </script>"
                        {:wow [{:regex "hyh =\\s+([0-9.,]+)"
                                :fun "function (x) { return '$' + x; }"}]}))))



