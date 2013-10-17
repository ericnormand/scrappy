(defproject com.secondchance/scrappy "0.1.0"
  :description "Let me at em!"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.jsoup/jsoup "1.7.2"]]

  :plugins [[s3-wagon-private "1.1.2"]]

  :repositories {"secondchance" {:url "s3p://maven.secondchance/releases/"
                                 :username ~(System/getenv "AWS_ACCESS_KEY")
                                 :passphrase ~(System/getenv "AWS_SECRET_KEY")
                                 :sign-releases false}})
