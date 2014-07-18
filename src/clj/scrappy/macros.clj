(ns scrappy.macros)

(defmacro catch-errors [& body]
  `(try
     ~@body
     (catch js/Error t#
       nil)))
