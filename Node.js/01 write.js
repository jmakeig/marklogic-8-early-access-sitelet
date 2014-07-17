var marklogic = require("marklogic")
var conn =  {
  host:     'jmakeig-centos6-virtualbox.localdomain',
  port:     8000,
  user:     'admin',
  password: '********',
  authType: 'DIGEST'
}
var db = marklogic.createDatabaseClient(conn)

db.write([
  {
    uri: '/tmp/eldorado.json',
    contentType: 'application/json',
    collections: ['/imaginary/countries', '/vacation/destinations'],
    content: {name:'El Dorado', description:'City of gold'}
  },
  {
    uri: '/tmp/shangrila.json',
    contentType: 'application/json',
    collections: ['/imaginary/countries', '/vacation/destinations'],
    content: {name:'Shangri-La', description:'Valley of harmony'}
  }
]).
  result(function(response){
    console.log(response.documents.length)
  })
