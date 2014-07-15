/*
 * Find the active users who mention "sell out" in their profile. Of the three most recenent registrants, order by most number of tags.
 */

var query = cts.andQuery([
  cts.orQuery([
    cts.jsonPropertyValueQuery("isActive", true),
    cts.jsonPropertyWordQuery("about", "sell out") // The text "sell out" or its stems
  ]),
  cts.collectionQuery("fake data")
])
// Retrun 
var order = cts.indexOrder(cts.jsonPropertyReference("registered"), ["descending"])
var itr = fn.subsequence(cts.search(query, ["unfiltered", order]), 1, 3) // Use subsequence for efficient pagination (limit/skip)

// Create an empty Array to accumulate the results.
var results = []
map(itr, function(item) { // Project out of the returned documents
  var obj = {};
  ["guid", "name", "isActive", "about"].forEach(function(field) {
    obj[field] = item[field]
  })
  // Get the count of the tags rather than the list.
  obj.tagCount = item.tags.valueOf().length; // .valueOf() converts a JSON node to a JavaScript object so we can get its length
  results.push(obj)
})

// Standard JavaScript Array.prototype.sort call to order the result set descending by number of tags. 
results.sort(function(a, b) {
  if(a.tagCount < b.tagCount) return 1
  if(a.tagCount > b.tagCount) return -1
  return 0
})
  
// Utility function to loop through an iterator.
function map(itr, f) {   
  while(true) {
   var item = itr.next()
   if(item.done) break;
   f(item.value.root) // Returns the root node. 
  }
}
