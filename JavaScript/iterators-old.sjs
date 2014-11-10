var itr = fn.collection();
while(true) {           // Loop until break
 var item = itr.next(); // Advance the iterator
 if(item.done) break;   // If we're at the end, exit the loop
 var user = item.value.toObject();
 // Do something with the object…
}
