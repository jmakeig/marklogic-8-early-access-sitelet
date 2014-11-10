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
    .endDocument()
    .toNode();