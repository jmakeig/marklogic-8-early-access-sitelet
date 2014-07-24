var marklogic = require("marklogic")
var conn =  {
  host: "jmakeig-centos6-virtualbox.localdomain",
  port: 8000,
  user: "admin",
  password: "********",
  authType: "DIGEST"
}
var db = marklogic.createDatabaseClient(conn
db.read('/countries/ml.json', '/countries/uv.json')
  // or use stream() to process results as they arrive
  .result(function(documents) {
    console.log('read:\n'+
      documents.
      map(function(document){
        return '    '+document.content.name+' at '+document.uri;
        }).
      join('\n')
      );
      exutil.succeeded();
    }, function(error) {
      exutil.failed(error);
    });
