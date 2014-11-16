function* asObjects(itr) {
  for(var doc of itr) {
    yield doc.toObject(); 
  }
}

var a = [];
for(var obj of asObjects(fn.collection())) {
  // Assumes you have JSON documents in the database with .name properties, as in the examples below.
  a.push(obj.name = "Generated: " + obj.name);
}
a;