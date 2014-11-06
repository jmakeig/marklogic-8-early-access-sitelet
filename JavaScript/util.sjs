module.exports = {
  parseCurrency: dollarToObject
}

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