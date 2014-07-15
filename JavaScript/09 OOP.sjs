/*
 * Demonstrate an object-oriented style of programming. Declare a Person type and instantiate an instance.
 * Convert that instance into a JSON node, for example to persist it to the database, and convert it back.
 */

// The Person constructor, e.g. var p = new Person(…)
Person = function(fname, lname) {
  if(fname) this.fname = fname
  if(lname) this.lname = lname
}
Person.prototype = {
  greet: function() { return "Hi, I'm " + this.fname + " " + this.lname + "." },
  toJSON: function() {
    return { fname: this.fname, lname: this.lname }
  }
}
// A static method that instantiates a new Person from JSON
Person.fromJSON = function(json) {
  var obj = json.valueOf ? json.valueOf() : json
  var p = new Person(obj.fname, obj.lname)
  return p
}

// Instatntiate a new Person object
var sam = new Person("Sam", "Simon")
// Convert that object into a JSON node
var samNode = xdmp.toJson(sam.toJSON())

// This is where you'd likely persist the sam document to the database
// xmdp.documentInsert("/sam.json", samNode, xdmp.defaultPermissions())
// (Don't forget to put a declareUpdate() at the top if you're doing this.)

// Re-hydrate a new Person person instance from the JSON node. Note
// the use of root to get the root node from the document node.
var s = Person.fromJSON(samNode.root)
// Verify that we indeed have a person and the fields have beeen properly instantiated.
s instanceof Person
// Note that the === only evaluates to true on nodes that have been converted to
// JavaScript objects (i.e. with node.valueOf()). == will do the expected casting to a
// JavaScript object.
  && s.fname == "Sam"
// Make sure we've got our methods as well.
  && s.greet() === "Hi, I'm Sam Simon."
