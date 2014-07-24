var marklogic = require("marklogic")
var conn =  {
  host: "jmakeig-centos6-virtualbox.localdomain",
  port: 8000,
  user: "admin",
  password: "********",
  authType: "DIGEST"
}
var db = marklogic.createDatabaseClient(conn)
var q = marklogic.queryBuilder

db.query(
  q.where(
    q.byExample(
      {
        gender: "male",
        age: { $gt: 25 },
        tags: ["ex"],
        $filtered: true
      }   
    )
  )
)
.stream().
  on("data", function(document) {
    console.log(document);
  }).
  on("error", function(error) {
    console.log(error)
  })

