/* 
 * Update the string balance amount to refelect the 
 */

// Tell the transaction manager that we're about to make an update
declareUpdate()

// Get an interator for the entire collection of documents that we'll be updating.
var itr = fn.collection("fake data")

// For each item in the collection, update the balance field from a string
//   balance: "$1,234.56" 
// to a Number representing the value and a unit of measure 
//   balance: { value: 1234.56, unit: "USD" }
map(itr, function(item) {
  if(!item.balance || item.balance.value) return
        
  // Turn the JSON node from the database into a JavaScript object so we can update it.
  // JSON nodes are immutable.
  var obj = item.valueOf()
  obj.balance = { 
    value: parseFloat(obj.balance.replace(/[$,]/g, "")),
    unit: "USD"
  }
  
  // Get the existing metadata on the document 
  var uri = xdmp.nodeUri(item)
  var collections = xdmp.documentGetCollections(uri)
  // Re-insert with the same URI
  xdmp.documentInsert(uri, obj, xdmp.defaultPermissions(), collections)
})
  
// Utility function to loop through an interator
function map(itr, f) {   
  while(true) {
   var item = itr.next()
   if(item.done) break;
   f(item.value.root)
  }
}
