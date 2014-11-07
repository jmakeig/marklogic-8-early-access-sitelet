var sec = require("/MarkLogic/security");

// Create roles
tx(function() { 
  // Notice that the sec variable comes from a closure. See tx() below.
  sec.createRole("noeval", "Cannot eval (or anything else)", null, null, null); 
  sec.createRole("caneval-internal", "Able to eval", null, null, null);
}, "Security");

// Create users, privileges, and amps
tx(function() {
  sec.createUser("noeval-user", "", "********", ["noeval"], null, null);
  sec.privilegeAddRoles("http://marklogic.com/xdmp/privileges/xdmp-eval", "execute", ["caneval-internal"]);
  sec.createAmp("", "version", "/amp.sjs", xdmp.database("Modules"), ["caneval-internal"]); 
}, "Security");


// Inserts .sjs modules into a modules database, making them
// executable by the noeval role created above.
tx(function() {
  var perms = [xdmp.permission("noeval", "execute")];  
  var modules = {
    "/06 Amp.sjs": 'var amp = require("amp"); amp.evalVersion();',
    "/amp.sjs"   : 'module.exports.evalVersion = module.amp(version); function version() { return xdmp.eval("xdmp.version()"); }'
  }
  for(var module in modules) {
    xdmp.documentInsert(module, xdmp.toJSON(modules[module]), perms);
  }
}, "Modules");

// Run a function in a different transaction against a specific database.
function tx(f, database) {
  return xdmp.invokeFunction(
    f, 
    { 
      "database": xdmp.database(database), 
      "transactionMode": "update-auto-commit", 
      "isolation": "different-transaction" 
    }
  );
}