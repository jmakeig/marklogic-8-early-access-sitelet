xdmp.setResponseContentType("application/json");
switch(xdmp.getRequestMethod()) {
  case "GET":
    var q = cts.wordQuery(xdmp.getRequestField("q")); // Get the criterion out of the URL query string 
    var results = cts.search(q).toArray(); // Unwind the iterator into an Array
    xdmp.addResponseHeader("X-Result-Count", results.length + "");
    xdmp.toJSON(results); // Serialize the JavaScript results object as JSON
    break;
  default:
    xdmp.setResponseCode(405, "Method not allowed");
    { message: "Only GET requests are allowed" }
}
