package com.marklogic.examples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.document.DocumentPage;
import com.marklogic.client.document.DocumentRecord;
import com.marklogic.client.io.JacksonParserHandle;
import com.marklogic.client.query.QueryDefinition;
import com.marklogic.client.query.StructuredQueryBuilder;

public class Ex04_BulkRead {

  public static void main(String[] args) {
    DatabaseClient client = Configuration.exampleClient();

    // Build a structured query. Here we're doing a pretty broad collection
    // query on all of the data loaded in Example 1.
    StructuredQueryBuilder builder = client.newQueryManager()
        .newStructuredQueryBuilder();
    QueryDefinition query = builder.and(builder.collection("fake data"));

    DocumentPage page = client.newDocumentManager().search(query, 1);

    // Iterate through the results, which include the raw documents,
    // available with a ReadHandle.
    for (DocumentRecord doc : page) {
      // System.out.println(doc.getContent(new JacksonParserHandle()));
    }
  }
}
