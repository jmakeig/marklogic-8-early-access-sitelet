module.exports.evalVersion = module.amp(version);

function version() {
  return xdmp.eval("xdmp.version()");
}