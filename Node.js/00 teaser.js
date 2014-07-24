var marklogic = require('marklogic')
var conn = require('./connection-dev.js') // Host and auth details
var db = marklogic.createDatabaseClient(conn)
var q = marklogic.queryBuilder
db.query(
  q.where(
    q.collection('countries'),
    q.value('region', 'Africa'),
    q.or(
      q.word('background',   'France'),
      q.word('Legal system', 'French')
    )
  )
)
  .result(function(documents) {
    documents.forEach(function(document) {
      console.log(JSON.stringify(document))
    })
  })
