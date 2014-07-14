/*
 * Evaluate standard XPath against JSON (or XML or both). JSON properties operate similar to 
 * XML elements. 
 */
var total = 0, count = 0
xdmp.xqueryEval('/node()[friends/name = "Tate Hopper" or eyeColor = "blue"]') // XPath is a subset of XQuery. Evaluate it. 
  .toArray() // Turn the iterator into an Array. Don't do this for very large result sets.
  .forEach(function(item) { // Standard JavaScript forEach
    total += item.age
    count++
  })
"Average age of people who are friends with Tate Hopper or have blue eyes: " + (total/count)
