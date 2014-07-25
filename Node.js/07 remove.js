var marklogic = require("marklogic")
var conn = require("./env.js").connection

var db = marklogic.createDatabaseClient(conn)
db.removeAll({collections: "fake data"})
  .result()
  .then(function(response) {
    console.log("Removed collection " + response.collections)
  })
  .catch(function(error) {
    console.log(error)
  })
