package com.marklogic.examples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {
    private static DatabaseClient client = DatabaseClientFactory.newClient(
        "localhost",
        8000,
        "Documents",
        "admin",
        "********",
        DatabaseClientFactory.Authentication.DIGEST);

    public static DatabaseClient exampleClient() {
        return client;
    }
}
