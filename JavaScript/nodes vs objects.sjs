// cts.doc() returns a Document node or null, given a unique id (URI)
var user = cts.doc("/34a23649-ec61-478f-90ab-5f01a55120ce.json") 
  .root        // The root Node instance of the Document container. For a JSON document, likely an ObjectNode
  .toObject(); // Turn any Node intance into JavaScript object. 

// Update the "name" property to upper-case.  Again, you don't need the preceding .toObject() 
// if you just want to read the value. However, to update it you need to first convert it 
// to a plain old JavaScript object with .toObject().
user.name = user.name.toUpperCase(); 

// Convert the plain old Object instance back into a Document node.
var node = xdmp.toJSON(user);

// You can read properties on Node instances, but you must convert to an object to update any aspect.
// Remember, xdmp.toJSON() creates a Document node, so you have to use .root to get the root ObjectNode.
node.root.name;

// …but you don't have to convert an object to a Node to persist it.
// Functions like xdmp.documentInsert() will automatically do the equivalent of xdmp.toJSON(user), above.

xdmp.documentInsert("/" + user.guid + ".json", user, xdmp.defaultPermissions(), ["fake data"]);

// (If you run the above update, don't forget to add a declareUpdate() call at the top.)




