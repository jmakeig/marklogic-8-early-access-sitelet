package com.marklogic.exmaples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {
    private static DatabaseClient client = DatabaseClientFactory.newClient(
        "localhost",
        8000,         // A REST instance that backs the Java API is available by default on port 8000
        "app-writer", // An application user that has at least the rest-writer role
        "********",   // Probably not your password
        DatabaseClientFactory.Authentication.DIGEST);

    public static DatabaseClient exampleClient() {
        return client;
    }
}

