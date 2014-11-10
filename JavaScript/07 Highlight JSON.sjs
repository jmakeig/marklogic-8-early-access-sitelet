var query = "flannel"; // This could be any query. Here we've simplified thins with a single word query.

var results = []; // Accumulator for result snippets
for(var doc of cts.search(query)) {
  var builder = new NodeBuilder();
  // The callback is the function that's executed when highlight finds a match to the query
  function callback(builder, text, node, queries, start){
    builder.addNode({"match": text});
  };
  cts.highlight(
    // Project some of the fields of the matched documents into new JavaScript object
    // and continue highlighting.
    { 
      "guid": doc.root.guid, 
      "about": doc.root.about,
    }, query, callback, builder
  );
  results.push(builder.toNode());
}
results;