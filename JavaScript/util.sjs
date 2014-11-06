module.exports = {
  // Export the "private" function with a public name
  parseCurrency: dollarToObject
}

// "Private" function local to the module
function dollarToObject(str) {
  if(str && str.match(/^\s*\$/)) {
    return {
      "value": parseFloat(str.replace(/[$,]/g, "")),
      "unit": "USD"
    }
  } else {
    throw new Error("Can't parse '" + str + "'");
  }
}