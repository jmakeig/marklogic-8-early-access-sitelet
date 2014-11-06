var json = xdmp.toJSON({ name: "A string" }); // Creates an in-memory JSON node, the same as you'd get from the database
var json = cts.doc("/some.json");             // Retrieves a JSON document node (or null if there is no document at the URI). 
json.root.name;                               // Returns a text node containing "A string". 
typeof (json.root.name + "!");                // Automatically casts the text node to a string. Returns "string".
json.root.name = "Stuff";                     // Throws a JS-NOUPDATEALLOWED error: JSON nodes are immutable
var obj = json.toObject();                    // Returns a JavaScript object copy of the JSON node
obj.name = "New stuff";                       // Updates the name property
xdmp.toJSON(obj);                             // Converts the object back to a JSON node. Conversion is implicit in functions like xdmp.documentInsert().

