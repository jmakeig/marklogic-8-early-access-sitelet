/*
 * Loops through all of the URIs in a database and deletes them individually in a single transaction.
 * This is an illustration of how to loop through iterators. Use xdmp.directorDelete or 
 * xdmp.collectionDelete for removing documents from a large database more efficiently.
 */

// Tell the transaction manager that we're about to make an update
declareUpdate()
// Get an iterator for all of the URIs in the database.
var uris = cts.uris()
while(uris.count > 0) {
  // Delete each URI and move to the next one. 
  xdmp.documentDelete(uris.next().value)    
}
