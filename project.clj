(defproject acme "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.13"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-http "0.1.24"]
                 [om "0.8.0-rc1"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-json "0.3.1"]]
  :plugins [[lein-ring "0.9.1"]
            [lein-cljsbuild "1.0.4"]
            [lein-pdo "0.1.1"]]
  :ring {:handler acme.core.handler/app}
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :cljsbuild {:builds [{:id "dev"
                      :source-paths ["src/cljs"]
                      :compiler {:output-to "resources/public/js/app.js"
                                 :output-dir "resources/public/js/out"
                                 :optimizations :none
                                 :source-map true}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
