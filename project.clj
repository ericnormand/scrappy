(defproject com.secondchance/scrappy "0.1.0-SNAPSHOT"
  :description "Let me at 'em!"

  :dependencies [[cheshire "5.2.0"]
                 [clj-http "0.7.2"]
                 [com.cemerick/bandalore "0.0.3"]
                 [enlive "1.1.1"]
                 [environ "0.4.0"]
                 [evaljs "0.1.2"]
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.cli "0.2.2"]]

  :main ^{:skip-aot true} com.secondchance.scrappy.worker

  :min-lein-version "2.0.0"

  :plugins [[org.timmc/lein-otf "2.0.1"]
            [s3-wagon-private "1.1.2"]]

  :profiles {:prod {}}

  :repositories [["s3" {:url "s3p://secondchance.maven/releases/"
                        :username :env
                        :passphrase :env}]]

  :main com.secondchance.scrappy.core

  :uberjar-name "scrappy.jar")
