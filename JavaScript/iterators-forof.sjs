// fn.collection(), and most things that interact with the database, returns a ValueIterator
// The ES6 for…of loop automatically iterates.
for(var doc of fn.collection()) {
  var user = doc.toObject();
  // Do something with the object…
}

