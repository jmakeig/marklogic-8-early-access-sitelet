# JavaScript
## Big Ticket
* require() (and differences with the Node.js implementation)
* ES6 iterators and generators
* Amps
* Type hierarchies and introspection (instanceof, enumerable properties, functions as functions, etc.)
* Special forms
* XCC -> arrays and objects (JSON data types) from JS or XQ
* Large bucket of JSOBJ and friends
* Improvements to NodeBuilder
* DOM xpath
* Node functions

## Jane
* 28476: New special-form built-ins 
* 28497: ES6 iterator and generator support 
Xpath eval on Node
* 28496: valueOf and toObject changes 
* 28496: Precision preserved on Date and DateTime 
* 28498: Module.amp function for JavaScript library modules 
* 28480: JavaScript library import 
* 28539: Allow xdmp:invoke and xdmp:spawn to execute JavaScript files. 
* 27632: Allow xdmp.function and xdmp.apply to execute JavaScript functions 
Handle JavaScript request cancellation and retries (26925 and 28706)
* 28973: Cts.doc 
* 28477: External variables support from XCC for JavaScript requests 
* 28477: JavaScript and JSON data type support from XCC for JavaScript requests 
JavaScript function signature changes and type marshaling changes (28160, 28338, 28496 etc)
* 26114: Solaris support 



## BugTrack
* 27632: xdmp:function and xdmp:apply should handle functions in .sjs modules
* 28480: Import JavaScript Modules.
* 28497: Enable harmony in v8.
* 28292: RETURN JSOBJ: xdmp.http* built-ins should return JavaScript objects instead of XML nodes when called from JavaScript
* 28477: XCC API changes for JavaScript.
* 28496: 3rd iteration of type marshalling and serialization.
* 28498: Implement amp.
* 28499: Add instanceof support for JavaScript built-in types.
* 28539: Allow xdmp:invoke and xdmp:spawn to execute JavaScript files.
* 29750: xdmp:ldap-lookup and xdmp:ldap-search should also take maps (JS Object) as options
* 29763: NodeBuilder - how to build binary node using NodeBuilder
* 29817: xdmp:filesystem-directory-create should also take maps (JS Object) as options
* 30053: xdmp.documentGetCollections should return an array instead of a ValueIterator
* 30057: xdmp.getRequestField should return a single value (or an array) instead of a ValueIterator
* 30061: xdmp.getRequestBody should return a single value or in rare occasions, an array instead of a ValueIterator
* 30141: NodeBuilder does not return its context (this)
* 27983: xdmp.toJson should be deprecated in favor of xdmp.toJSON
* 28372: RETURN JSOBJ: return JavaScript objects instead of XML nodes from *status functions (like host-status) when calling from JavaScript
* 28460: RETURN JSOBJ: ldap built-in should return JS object instead of XML when called from JavaScript
* 28461: RETURN JSOBJ: backup/restore related built-ins should return JS objects instead of XMLs when called from JavaScript
* 29774: RETURN JSOBJ: xdmp:query-meters returns JS object instead of XML when called from JavaScript
* 29793: RETURN JSOBJ: xdmp:encoding-language-detect returns JS object instead of XMLs when called from JavaScript
* 29809: RETURN JSOBJ: spell:suggest-detailed returns JS object instead of XMLs when called from JavaScript
* 28868: Special form: cts.estimate
* 28869: Special form: cts.exists
* 28870: Special form: cts.highlight
* 28871: Special form: cts.walk
* 28872: Special form: cts.plan
* 28873: node xpath() function to evaluate xpaths
* 28973: Simplified fn.doc for single input, single output
* 28984: special form: cts:element-walk
* 28985: special form: cts:entity-highlight
* 29136: JS node binding functions
* 29197: Eval a function reference