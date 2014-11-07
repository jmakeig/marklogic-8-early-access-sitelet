

updateInDatabase(function() {
  var perms = [xdmp.permission("noeval", "execute"), xdmp.permission("caneval", "execute")];
  var localPath = "/Users/jmakeig/Workspaces/8 EA Sitelet/JavaScript";
  
  ["/06 Amp.sjs", "/amp.sjs"].forEach(function(path) {
    var module = xdmp.documentGet(localPath + path);
    xdmp.documentInsert(path, xdmp.toJSON(module), perms);
  });
  
}, "Modules");

function updateInDatabase(f, database) {
  return xdmp.invokeFunction(f, { "database": xdmp.database(database), "transactionMode": "update-auto-commit" });
}