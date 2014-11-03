## Big Ticket
* New query serializations (geo, similar, triple range, current 
* Embedded triples
* XCC and mlcp
* API changes to allow builtins to take JavaScript objects as inputs

## Rough cut
* 26982: SQL feature works on JSON documents
* 26983: geospatial queries work on JSON documents
* 26984: support embedded triples in JSON documents
* 26985: reverse queries work with JSON documents
* 26992: RETURN JSOBJ: lexicon functions return JS objects
* 27738: json serialization/deserilization of cts:similar-query
* 28485: allow JSON documents to match wildcard namespaces in XPath
* 28492: xdmp:zip-get and xdmp:gunzip should also take maps (JS Object) as options
* 28546: SPARQL update built-ins should be able to take/return options/permissions as JavaScript objects
* 28602: xdmp:merge, xdmp:document-filter, spell:suggest and spell:suggest-detailed should also take maps (JS Object) as options
* 28684: xdmp:save and xdmp:quote should also take maps (JS Object) as options
* 28707: cts:train, cts:classify, cts:cluster and cts:hash-terms(hidden) should also take maps (JS Object) as options
* 28772: xdmp:tidy and xdmp:*-convert should also take maps (JS Object) as options
* 28773: cts:distinctive-terms and cts:similar-query should also take maps (JS Object) as options
* 28774: xdmp:rsa-generate and xdmp:x509-* should also take maps (JS Object) as options
* 28833: json serialization/deserialization of cts:triple-range-query
* 28974: JSON serialization for cts:current-query
* 29057: json serialization/deserialization of geospatial queries
* 29224: geospatial lexion functions work on JSON documents
* 26994: XCC suport for native JSON
* 26995: direct access for native JSON documents (minor work in EA3, full access after 8.0-1)
* 26996: mlcp works with native JSON documents