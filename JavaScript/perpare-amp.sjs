declareUpdate();
var perms = [xdmp.permission("noeval", "execute"), xdmp.permission("caneval", "execute")];

var module = xdmp.documentGet("/Users/jmakeig/Workspaces/8 EA Sitelet/JavaScript/06 Amp.sjs");
xdmp.documentInsert("/06 Amp.sjs", xdmp.toJSON(module), perms);

module = xdmp.documentGet("/Users/jmakeig/Workspaces/8 EA Sitelet/JavaScript/amp.sjs");
xdmp.documentInsert("/amp.sjs", xdmp.toJSON(module), perms);