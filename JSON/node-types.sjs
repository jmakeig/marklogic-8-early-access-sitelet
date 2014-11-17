var json = xdmp.unquote('{ "name": "Oliver", "scores": [88, 67, 73], "isActive": true, "affiliation": null }').next().value; // Returns a ValueIterator
json.root.name;                                                                // "Oliver" [text() in XQuery, CharData in JavaScript]
json.root.name == "Oliver";                                                    // true
json.root.name === "Oliver";                                                   // false
json.root.name instanceof CharData;                                            // true
json.xpath("/self::document-node()/child::object-node()/child::text('name')"); // "Oliver" [text()/CharData]
json.root.xpath("/name");                                                      // "Oliver" [text()/CharData]
json.root.xpath("/name/data(.)");                                              // "Oliver" [String]
json.root.name.valueOf();                                                      // "Oliver" [String]
json.root.scores[1] instanceof Node;                                           // true
json.root.scores[1].valueOf();                                                 // 67 [Number]
json.toObject() instanceof Node;                                               // false
xdmp.toJSON(json.toObject());                                                  // Round-trip in JavaScript with full fidelity