package com.marklogic.exmaples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {

    public static DatabaseClient exampleClient() {
        return DatabaseClientFactory.newClient(
                "localhost",
                8000,         // A REST instance that backs the Java API is automatically available on port 8000
                "app-writer", // An application user that has at least the rest-writer role
                "********",   // Probably not your password
                DatabaseClientFactory.Authentication.DIGEST);
    }
}
