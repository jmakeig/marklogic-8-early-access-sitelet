/*
 * Import an XQuery library module into JavaScript and call its functions. 
 * This particular example uses the Admin API to create a dateTime range index on the "registered" property.
 * Any XQuery library will work, though.
 */

// Using CommonJS syntax, import an XQuery library module. Imported functions are available in 
// their lowerCamelCase form, i.e. my:do-something(…) in XQuery would be called as 
// m.doSomething(…) in JavaScript.
var admin = require("/MarkLogic/admin.xqy")
var config = admin.getConfiguration()
try {
  admin.databaseAddRangeElementIndex(config, xdmp.database(), 
    admin.databaseRangeElementIndex("dateTime", null, "registered", null, true, "ignore")
  )
} catch(err) { 
  if(err.name != "ADMIN-DUPLICATECONFIGITEM") throw err // Ignore the error if we've already got this index
}
try {
  admin.databaseAddRangePathIndex(config, xdmp.database(), 
    admin.databaseRangePathIndex(xdmp.database(), "float", "balance/value", null, false, "ignore")
  )
} catch(err) { 
  if(err.name != "ADMIN-DUPLICATECONFIGITEM") throw err // Ignore the error if we've already got this index
}
admin.saveConfiguration(config)
