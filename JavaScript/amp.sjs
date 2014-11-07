// module.amp takes a function as input and returns a function
// that has the same signature as the original function.
module.exports.evalVersion = module.amp(version);

// The local function that is wrapped by the amp.
// This is the function that is set in the amp's 
// "localname" configuration.
function version() {
  // This is a very contrived example to illustrate amps. 
  // xdmp.version() does not require special privilege. 
  // Calling it (or anything) via xdmp.eval does.
  return xdmp.eval("xdmp.version()");
}
