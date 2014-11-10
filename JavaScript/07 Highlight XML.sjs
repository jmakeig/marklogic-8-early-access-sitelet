function highlight(node, query) {
  var match = 0;
  var threshold = 2;
  var builder = new NodeBuilder(); // Used to "inject" highliguts into the flow of the matched nodes.
  function callback(builder, text, node, queries, start) {
    match++; // Keep track of the number of matches
    builder.startElement("b") // Inject a new element in context to highlight the match
      .addText(text)
      .endElement();
    if (match >= threshold) { return "break"; } // Stop matching after the threshold is reached
    return "continue";
  }
  cts.highlight(node, query, callback, builder);
  return builder.toNode(); 
}
var node = xdmp.unquote("<root><p>This are 1, including stemming and capitalization.</p><p>this is 2</p><p>this is 3</p><p>this is 4</p><p>this is 5.</p></root>");
var query = "this is"; // Implicitly converted to a word query
highlight(node, query);