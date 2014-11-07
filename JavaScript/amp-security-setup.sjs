// Script to set up amp
var sec = require("/MarkLogic/security");
function setUpAmps() {
  sec.createRole("noeval", "Cannot eval (or anything else)", null, null, null);
  sec.createUser("noeval-user", "", "********", ["noeval"], null, null);
  sec.createRole("caneval", "Cannot eval (or anything else)", null, null, null);
  sec.privilegeAddRoles("http://marklogic.com/xdmp/privileges/xdmp-eval", "execute", ["caneval"]);
  sec.createAmp(null, "version", "/amp.sjs", "Modules", "caneval");
}

updateInDatabase(setUpAmps, "Security");

//updateInDatabase(function() { xdmp.documentInsert("/asdfasdf.json", {"a": 1}); }, "Documents");

function updateInDatabase(f, database) {
  return xdmp.invokeFunction(f, { "database": xdmp.database(database), "transactionMode": "update-auto-commit" });
}