/*
 * Evaluate standard XPath against JSON (or XML or both). JSON properties operate similar to unnamespaced
 * XML elements.
 */
var total = 0, count = 0
xdmp.xqueryEval('/node()[some $name in friends/name satisfies starts-with(upper-case($name), "N") or eyeColor = "bluxe"]') // XPath is a subset of XQuery. Evaluate it.
  .toArray() // Turn the iterator into an Array. Don't do this for very large result sets.
  .forEach(function(item) { // Standard JavaScript Array.prototype.forEach
    total += item.age
    count++
  })
"Average age of people who have blue eyes or are friends with others whose names start with \"N\": " + (total/count)
