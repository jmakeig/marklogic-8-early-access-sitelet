/*
 * List the active users by most tags.
 */

var query = cts.andQuery([
  cts.orQuery([
    cts.jsonPropertyValueQuery("isActive", true),
    cts.jsonPropertyWordQuery("about", "ironic")
  ]),
  cts.collectionQuery("fake data")
])
var itr = fn.subsequence(cts.search(query), 1, 10) // Use subsequence for efficient pagination (limit/skip)

// Array to accumulate results
var results = []
map(itr, function(item) { // Project out of the returned documents
  var obj = {};
  ["guid", "name", "isActive", "about"].forEach(function(field) {
    obj[field] = item[field]
  })
  // Get the count of the tags rather than the list.
  xdmp.log(item.tags)
  obj.tagCount = item.tags.valueOf().length; // .valueOf returns 
  results.push(obj)
})

// Order descending by number of tags
results.sort(function(a, b) {
  if(a.tagCount < b.tagCount) return 1
  if(a.tagCount > b.tagCount) return -1
  return 0
})
  
// Utility function to loop through an interator
function map(itr, f) {   
  while(true) {
   var item = itr.next()
   if(item.done) break;
   f(item.value.root) // .valueOf converts a JSON node to a JavaScript object
  }
}
