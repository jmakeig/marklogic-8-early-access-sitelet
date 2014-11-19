package com.marklogic.examples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {
  private static DatabaseClient client = DatabaseClientFactory.newClient(
      "localhost", 8000, // Every instance comes with a REST Client API instance
                         // pre-installed on port 8000
      "Documents", // Each connection can specify its database at runtime
      "admin", "********", DatabaseClientFactory.Authentication.DIGEST);

  public static DatabaseClient exampleClient() {
    return client;
  }
}
