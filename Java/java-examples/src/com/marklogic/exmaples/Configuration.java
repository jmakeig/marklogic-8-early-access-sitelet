package com.marklogic.exmaples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {
    private static DatabaseClient client = DatabaseClientFactory.newClient(
        "jmakeig-centos6-virtualbox.localdomain",
        8000,
        "admin",
        "********",
        DatabaseClientFactory.Authentication.DIGEST);

    public static DatabaseClient exampleClient() {
        return client;
    }
}
