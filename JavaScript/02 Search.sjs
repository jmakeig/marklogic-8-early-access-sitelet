/*
 * Find the active users who mention "sell out" in their profile. Of the three most recent registrants, order by most number of tags.
 */

var query = cts.andQuery([
  cts.orQuery([
    cts.jsonPropertyValueQuery("isActive", true),
    cts.jsonPropertyWordQuery("about", "sell out") // The text "sell out" or its stems
  ]),
  cts.collectionQuery("fake data")
]);

// Order by registration date, newest to oldest. Note that the jsonPropertyReference requires a range index on the
// "registered" property (see "Import XQuery"). If that index doesn't exist, disregard the ordering. Checking for
// indexes at runtime is not a best practice for production code, but is illustrative here.
var order = null;
try {
  order = cts.indexOrder(cts.jsonPropertyReference("registered"), ["descending"]);
} catch(err) {
  if("XDMP-ELEMRIDXNOTFOUND" !== err.name) { throw err; }
}

// Create an empty Array to accumulate the results.
var results = [];
for(
  var item of fn.subsequence( // Use subsequence for efficient pagination (limit/skip)
    cts.search(query, ["unfiltered", order]), // Run the search out of the indexes, using the order specification above
    1, 3 // Just get the top 3.
  )
) {
  // Synthetic wrapper to hold projected fields and metadata from the search results.
  var obj = { 
    relevanceScore: item.score // The Node instance reports the relevance score of each search result.
  };
  item = item.toObject(); // Search retruns a document node. Turn this into a JavaScript object.
  ["guid", "name", "isActive", "about"].forEach(function(prop) {
    obj[prop] = item[prop];
  });
  // Get the count of the tags rather than the list.
  obj.tagCount = item.tags.length; // Count the tags in the Array.
  results.push(obj);
}
results;