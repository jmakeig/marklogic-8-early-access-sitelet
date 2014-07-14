/*
 * Use node() to match any XML or JSON node, inlcuding unnamed object nodes at the "root" of a JSON document. 
 * The new object-node() and array-node() match only their JSON namesakes.
 * (Note: Don't run this code on a large database. It brings back every document and its properties multiple times.)
 */
[
  "All nodes ===============================================================================================",
  xdmp.xqueryEval("//node()"),
  "All \"root\" nodes. These are unnamed for JSON documents ================================================",
  xdmp.xqueryEval("/node()"),
  "All nodes types =========================================================================================",
  xdmp.xqueryEval("//node()/xdmp:node-kind(.)"),
  "All object nodes ========================================================================================",
  xdmp.xqueryEval("//object-node()"),
  "All array nodes =========================================================================================",
  xdmp.xqueryEval("//array-node()"),
]
