/* 
 * Update the string balance amount to refelect the 
 */

// Tell the transaction manager that we're about to make an update
declareUpdate();    

// For each item in the collection, update the balance field from a string
//   balance: "$1,234.56" 
// to a Number representing the value and a unit of measure 
//   balance: { value: 1234.56, unit: "USD" }    
for(var item of fn.collection("fake data")) {
  // Turn the JSON node from the database into a JavaScript object so we can update it.
  // JSON nodes are immutable.
  var obj = item.toObject();
  if(obj.balance && !obj.balance.value) {
    obj.balance = { 
      value: parseFloat(obj.balance.replace(/[$,]/g, "")),
      unit: "USD"
    };
    
    // Get the existing metadata on the document 
    var uri = xdmp.nodeUri(item);
    var collections = xdmp.documentGetCollections(uri);
    // Re-insert with the same URI
    xdmp.documentInsert(uri, obj, xdmp.defaultPermissions(), collections);
  }
}