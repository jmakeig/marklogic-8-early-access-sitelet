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
    q.parsedFrom('sex:male', //'sex:male about:"banjo bespoke distillery"',
      q.parseBindings(
        q.value('sex', q.bind('gender')) //,
//        q.word('bio', q.bind('about'))
      )
    )
  )
)
  .result(function(documents) {
    documents.forEach(function(document) {
      console.log(document.content.name + " at " + document.uri)
    })
    }, function(error) {
      console.dir(error);
  })
