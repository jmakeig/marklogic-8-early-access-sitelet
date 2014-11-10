// utilities.sjs

// Library modules can require other library modules.
var o = require("../other.sjs");

module.exports {
  // Maps the internal implementation to a public name.
  doSomething: internalSomething
}

// "Protected" function not accessible outside of the current module.
function internalSomething() {
  // Do something…
}