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

// Order by registration date, newest to oldest. Note that the jsonPropertyReference requires a range index on the
// "registered" property (see "Import XQuery"). If that index doesn't exist, disregard the ordering. Checking for
// indexes at runtime is not a best practice for production code, but is illustrative here.
var order
try {
  order = cts.indexOrder(cts.jsonPropertyReference("registered"), ["descending"])
} catch(err) {
  if("XDMP-ELEMRIDXNOTFOUND" !== err.name) throw err
  else order = null
}

var itr = fn.subsequence( // Use subsequence for efficient pagination (limit/skip)
  cts.search(query, ["unfiltered", order]) // Run the search out of the indexes, using the order specification above
  , 1, 3 // Just get the top 3.
)

// Create an empty Array to accumulate the results.
var results = []
map(itr, function(item) { // Project out of the returned documents.
  var obj = {};
  ["guid", "name", "isActive", "about"].forEach(function(field) {
    obj[field] = item[field]
  })
  // Get the count of the tags rather than the list.
  obj.tagCount = item.tags.valueOf().length; // .valueOf() converts a JSON node to a JavaScript object so we can get its length
  results.push(obj)
})

// Standard JavaScript Array.prototype.sort call to order the result set descending by number of tags calculated above.
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
