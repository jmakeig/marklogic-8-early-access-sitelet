while(true) {          // Loop until break
 var item = itr.next() // Advance the iterator
 if(item.done) break;  // If we're at the end, exit the loop
 item.value            // Otherwise, get the value of the the iterator, likely a JSONNode instance
}
