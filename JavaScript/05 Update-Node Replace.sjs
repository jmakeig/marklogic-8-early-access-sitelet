/*
 * For each document in the "fake data" collection, update the string balance property
 * separate the numeric value and its unit of measure.
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

  // Get the JavaScript string primitive representing the current balance
  var currentBalance = item.balance.valueOf()

  // Create a new JavaScript object to hold the number value and string unit properties
  var obj = {
    value: parseFloat(currentBalance.replace(/[$,]/g, "")),
    unit: "USD"
  }
  // Replace the existing balance property with the synthesized object.
  // The JavaScript object is implicitly converted to a JSON node. This is
  // the equivalent of calling xdmp.toJson(obj).root
  xdmp.nodeReplace(item.balance, obj)
})

// Utility function to loop through an interator
function map(itr, f) {
  while(true) {
   var item = itr.next()
   if(item.done) break;
   f(item.value.root)
  }
}
