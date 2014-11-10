var nb = new NodeBuilder();
nb.startDocument()
  .startElement("ex:article", "http://example.com")
    .addAttribute("is-draft","true");
    for(var i = 0; i < 17; i++) {
      nb.startElement("ex:p", "http://example.com")
        .addText("This is paragraph ") + 
          nb.startElement("em", "") // No namespace
            .addText((i + 1).toString())
            .endElement()
        .addText(".")
      .endElement();
    }
  nb.endElement()
    .endDocument();
var xml = nb.toNode();

// An XMLNode is how XML is represented in Server-Side JavaScript. Like JSON ObjectNodes, 
// XMLNodes are immutable. Use NodeBuilder to construct XML or literal JavaScript
// objects to build JSON nodes in JavaScript. 
xml instanceof XMLNode && xml instanceof Node && xml instanceof Value; // true

for(var element of xml.xpath("//ex:p", {"ex": "http://example.com"})) {
  // All XMLNode instances support a read-only w3c DOM interface
  var text = element.textContent; // typeof text === "string"
  var children = element.childNodes; // children instanceof NodeList && children.length === 3
  // …as well as any node function, i.e. any XDM function that takes a node as the first argument
  // For example, to validate against a schema:
  //   element.validate();
}

