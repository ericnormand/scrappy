(ns com.secondchance.scrappy.scraper-test
  (:require [clojure.test :refer [deftest is]]
            [clojure.java.io :as io]
            [clojure.set :as set]
            [com.secondchance.scrappy.scraper :as scraper]))

(defn and* [& fns]
  (fn [x]
    (every? #(% x) fns)))

(defn augment-file [f]
  (let [m (re-matches #"^(.*)\.(.*)$" (.getName f))]
    {:file f
     :name (when m (m 1))
     :extension (when m (keyword (m 2)))}))

(def files (->> "test/resources/scraping"
               io/file
               (.listFiles)
               (map augment-file)))

(def tests (->> files
                (filter (and* :name :extension))
                (reduce (fn [mp {:keys [name extension file]}]
                          (assoc-in mp [name extension] file)) {})
                (filter #(set/superset? (set (keys (% 1))) #{:url :exp :html}))
                (into {})))

(deftest test-all
  (doseq [[name {:keys [url exp html]}] tests
          :let [url (slurp url)
                exp (clojure.tools.reader.edn/read-string (slurp exp))
                html (slurp html)
                exp-keys (set (keys exp))
                scrape (scraper/scrape url html)
                scrape2 (select-keys scrape exp-keys)]]
    (is (= exp scrape2))))

(comment
 (deftest amazon-camera-url
   (is (= ["Amazon.com"]
          (retailer-url-matches "http://www.amazon.com/gp/product/B0075SUK14/ref=s9_ri_gw_g421_ir03/180-7734757-9683255?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-4&pf_rd_r=0QHBEW7R145KAPZNK6GF&pf_rd_t=101&pf_rd_p=490157971&pf_rd_i=507846"))))

 (deftest amazon-camera-scrape
   (let [html (slurp "test/resources/scraping/amazon_camera.html")
         s (retailer-scrape (ih "Amazon.com") html)
         s (select-keys s [:title :price :pnp])
         expected {:title "Canon PowerShot SX260 HS 12.1 MP CMOS Digital Camera with 20x Image Stabilized Zoom 25mm Wide-Angle Lens and 1080p Full-HD Video (Black)"
                   :price "250.49"
                   :pnp "0.0"}]
     (is (= expected s))))

 (deftest amazon-camera
   (let [html (slurp "test/resources/scraping/amazon_camera.html")
         url "http://www.amazon.com/gp/product/B0075SUK14/ref=s9_ri_gw_g421_ir03/180-7734757-9683255?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-4&pf_rd_r=0QHBEW7R145KAPZNK6GF&pf_rd_t=101&pf_rd_p=490157971&pf_rd_i=507846"
         s (scrape url html)
         s (select-keys s [:title :price :pnp])
         expected {:title "Canon PowerShot SX260 HS 12.1 MP CMOS Digital Camera with 20x Image Stabilized Zoom 25mm Wide-Angle Lens and 1080p Full-HD Video (Black)"
                   :price "250.49"
                   :pnp "0.0"}]
     (is (= expected s))))

 (deftest amazon-notebook-url
   (is (= ["Amazon.com"]
          (retailer-url-matches "http://www.amazon.com/Computation-Book-Quadrille-Green-Sheets/dp/B007WI45KE/ref=sr_1_23?s=electronics&ie=UTF8&qid=1371006733&sr=1-23&keywords=quadrille+notebooks"))))

 (deftest amazon-notebook-scrape
   (let [html (slurp "test/resources/scraping/amazon_notebook.html")
         s (retailer-scrape (ih "Amazon.com") html)
         s (select-keys s [:title :price :pnp])
         expected {:title "Computation Book, Quadrille Rule, 9-1/4 x 11-3/4, Green, 75 Sheets/Pad",
                   :price "38.09",
                   :pnp "0.0"}]
     (is (= expected s))))

 (deftest amazon-non-free-shipping
   (let [html (slurp "test/resources/scraping/amazon_gluten.html")
         url "http://www.amazon.com/Brand-New-CLOUD-STAR-CORPORATION/dp/B00CJ22NNO/ref=sr_1_5?s=electronics&ie=UTF8&qid=1371008438&sr=1-5&keywords=wheat+gluten"
         s (scrape url html)
         s (select-keys s [:title :price :pnp])
         expected {:title "Brand New CLOUD STAR CORPORATION - GRAIN FREE OVEN BAKED BUDDY BISCUITS (14 OZ - CHICKEN) \"DOG PRODUCTS - DOG TREATS - BISCUITS & COOKIE\"",
                   :price "9.62",
                   :pnp "8.29"}]
     (is (= expected s))))

 (deftest bdiab-tissue-balls
   (let [html (slurp "test/resources/scraping/birthdayinabox_balls.html")
         url "http://www.birthdayinabox.com/party-themes/graduation-party/decorations/solid-color-honeycomb-tissue-balls-BB018762.html"
         s (scrape url html)
         s (select-keys s [:title :price :pnp])
         expected {:title "Solid Tissue Balls - Honeycomb Tissue Paper Balls"
                   :price "2.29"}]
     (is (= expected s))))

 (deftest no-regex-errors
   (is (empty? @regex-errors)))

 (deftest no-js-errors
   (doseq [[_ retailer] ih
           [_ scr] (:scraper ih)]
     (scr ""))
   (is (empty? @js-errors)))

 (deftest amazon_de_test
   (let [html (slurp "test/resources/scraping/amazon_de_playstation.html")
         url "http://www.amazon.de/gp/product/B00BJ3UWN2/ref=s9_pop_gw_g63_ir05/277-5780385-0941517?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=center-3&pf_rd_r=1HG3E4QED7TF0NQKXGPJ&pf_rd_t=101&pf_rd_p=171793527&pf_rd_i=301128"
         s (scrape url html)
         s (select-keys s [:title :price])
         expected {:title "PlayStation 4 - DualShock 4 Wireless Controller"
                   :price "59,00"}]
     (is (= expected s))))

 (deftest homedepot-meta
   (let [html (slurp "test/resources/scraping/homedepot.html")
         url "http://www.homedepot.com/p/Raco-3-8-in-Nonmetallic-Clamp-Connector-5-Pack-2711B5/203671626#.UbjIvfaG1Xc"
         s (scrape url html)
         s (select-keys s (filter #(or (zero? (.indexOf (name %) "meta-"))
                                       (zero? (.indexOf (name %) "og-")))
                                  (keys s)))
         expected {:meta-keywords "Appliances, Bath, Kitchen, Carpet & Flooring, Lighting & Fans, Paint, Building Materials, Outdoor Furniture, Accessories, Home Improvement, Remodeling, Power Tools, Home Depot ,Raco,3/8 in. Nonmetallic Clamp Connector (5-Pack),203671626,2711B5",
                   :og-url "http://www.homedepot.com/p/Raco-3-8-in-Nonmetallic-Clamp-Connector-5-Pack-2711B5/203671626",
                   :meta-description "RACO Squeeze type Connectors are 1/2 in. Trade size. The connectors are for use in dry locations to connect Nonmetallic Sheathed Cable (NMSC) to a box or enclosure. The connectors are un insulated.at The Home Depot",
                   :og-type "product",
                   :og-title "Raco 3/8 in. Nonmetallic Clamp Connector (5-Pack)-2711B5 at The Home Depot",
                   :og-site_name "www.homedepot.com",
                   :og-image "http://www.homedepot.com/catalog/productImages/300/9c/9c6af950-1d34-4640-91f5-e847e25f9f25_300.jpg",}]
     (is (= expected s))))
)
