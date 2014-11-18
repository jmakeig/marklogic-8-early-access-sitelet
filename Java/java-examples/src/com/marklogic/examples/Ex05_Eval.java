package com.marklogic.examples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.eval.ServerEvaluationCall;
import com.marklogic.client.io.StringHandle;

public class Ex05_Eval {

	public static void main(String[] args) {
		DatabaseClient client = Configuration.exampleClient();
		ServerEvaluationCall sec = client.newServerEval().javascript(
				"xdmp.version();");
		;
		StringHandle str = sec.eval(new StringHandle());
		System.out.println(str.get());
	}

}
