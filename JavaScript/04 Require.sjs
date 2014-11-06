// Import the declared exports from the util module under the util "namespace".
// Because the path does not start with a / (or C:\ on Windows), resovlve 
// the module path relative to the current module.
// Because there is no file extension, first try .sjs then .xqy.
// In this case, it resolves to ./util.sjs.
var util = require("util");

// Call the imported function
util.parseCurrency("$44,3829.01");