(ns acme.core.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.util.response :refer [resource-response response]]
            [ring.middleware.json :as middleware]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/widgets" [] (response [{:name "Widget 1"} {:name "Widget 2"}]))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> 
    (handler/api app-routes)
    (middleware/wrap-json-body)
    (middleware/wrap-json-response)))
