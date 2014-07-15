/*
 * Access the values from a range index.
 * (Note: This assumes you've created the path range index on the balance.value field in "Import XQuery")
 */
cts.values(
  // Any reference to a range index
  cts.pathReference("balance/value")
)
