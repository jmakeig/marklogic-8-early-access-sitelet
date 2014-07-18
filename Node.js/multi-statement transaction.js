// Doesn't work: error: rollback transaction: cannot process response with 303 status

var marklogic = require("marklogic")
var conn =  {
  host: "jmakeig-centos6-virtualbox.localdomain",
  port: 8000,
  user: "admin",
  password: "********",
  authType: "DIGEST"
}
var db = marklogic.createDatabaseClient(conn)

transactionalMove("/34a23649-ec61-478f-90ab-5f01a55120ce.json", "/moved.json")

function transactionalMove(oldUri, newUri) {
  var transactionId
  db.transactions.open().result().
    then(function(txid) {
      transactionId = txid
      return db.read({uri: oldUri, txid: transactionId}).result()
    }).
    then(function(document) {
      document.uri = newUri
      return db.write({documents: document, txid: transactionId}).result()
    }).
    then(function(response) {
      return db.remove({uri: oldUri, txid: transactionId}).result()
    }).
    then(function(response) {
      return db.transactions.commit(transactionId).result()
    }).
    catch(function(error) {
      db.transactions.rollback(transactionId)
      console.log(JSON.stringify(error))
    })
}
