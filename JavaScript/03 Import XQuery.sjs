/*
 * Import an XQuery library module into JavaScript and call its functions. 
 * This particular example uses the Admin API to create a dateTime range index on the "registered" property.
 * Any XQuery library will work, though.
 */

// Using CommonJS syntax, import an XQuery library module. Imported functions are available in 
// their lowerCamelCase form. For example, my:do-something(…) in XQuery would be called as 
//   var my = require("path/to/my.xqy")
//   my.doSomething(…) 
// in JavaScript.
var admin = require("/MarkLogic/admin.xqy")

// Use the (XQuery) Admin APIs to create some indexes.
var config = admin.getConfiguration()
try {
  // Create a dateTime index on the registered property. For the purposes of creating range indexes a JSON property is
  // the same as an XML element (i.e. this will also add XML elements named "registered" in no namespace to this index.)
  // Since JSON lacks a native Date type (though JavaScript has one), the indexer automatically parses strings that are formatted
  // as ISO8601 dates, e.g. {"registered": "2014-01-31T19:57:33+08:00"}
  config = admin.databaseAddRangeElementIndex(config, xdmp.database(), 
    admin.databaseRangeElementIndex("dateTime", null, "registered", null, true, "ignore")
  )
} catch(err) { 
  if(err.name != "ADMIN-DUPLICATECONFIGITEM") throw err // Ignore the error if we've already got this index
}
try {
  // JSON nodes support full XPath evaluation. Similarly, you can use XPath to specify path indexes on JSON documents.
  config = admin.databaseAddRangePathIndex(config, xdmp.database(), 
    admin.databaseRangePathIndex(xdmp.database(), "double", "balance/value", null, false, "ignore")
  )
} catch(err) { 
  if(err.name != "ADMIN-DUPLICATECONFIGITEM") throw err 
}

admin.saveConfiguration(config)
