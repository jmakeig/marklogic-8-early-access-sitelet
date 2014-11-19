package com.marklogic.examples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.eval.EvalResult;
import com.marklogic.client.eval.EvalResultIterator;

public class Ex06_Eval {

	public static void main(String[] args) {
		DatabaseClient client = Configuration.exampleClient();
		final String javascript = "declareUpdate(); " // Tell the server we're writing to the database
				+ "var total = 0; "
				+ "for(var d of fn.collection('fake data')) {" // Loop through the JSON documents in the collection
				+ "  total += d.toObject().balance * percent;" // Update the total based on a percentage of the balance property
				+ "}"
				+ "xdmp.documentInsert('/total.json', {total: total}); " // Write a document with the updated total
				+ "total;"; // Return the total
		EvalResultIterator eval = client.newServerEval().javascript(javascript)
				.addVariable("percent", 0.08).eval();
		for (EvalResult result : eval) {
			System.out.println(result.getString());
		}
	}
}
