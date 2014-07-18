var marklogic = require("marklogic")
var conn =  {
  host:     'jmakeig-centos6-virtualbox.localdomain',
  port:     8000,
  user:     'admin',
  password: '********',
  authType: 'DIGEST'
}
var q = marklogic.queryBuilder
var db = marklogic.createDatabaseClient(conn)
db.query(
  q.where(
    q.collection('countries'),
    q.value('region', 'Africa'),
    q.or(
      q.word('background',   'France'),
      q.word('Legal system', 'French')
      )
    )
  ).stream().
    on('data', function(document) {
      console.log(document);
    }).
    on('error', function(error) {
      console.log(error)
    })
