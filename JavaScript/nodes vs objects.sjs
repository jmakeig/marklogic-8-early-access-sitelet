var json = xdmp.toJson({ name: "A string" }) // Creates an in-memory JSON node, the same as you'd get from the database
json.root.name                               // Returns a text node containing "A string". 
typeof (json.root.name + "!")                // Automatically casts the text node to a string. Returns "string".
json.root.name = "Stuff"                     // Throws a JS-NOUPDATEALLOWED error: JSON nodes are immutable
var obj = json.valueOf()                     // Returns a JavaScript object copy of the JSON node
obj.name = "New stuff"                       // Updates the name property
xdmp.toJson(obj)                             // Converts the object back to a JSON node. Conversion is implicit in functions like xdmp.documentInsert().
