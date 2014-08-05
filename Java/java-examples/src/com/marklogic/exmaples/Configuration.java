package com.marklogic.exmaples;

import com.marklogic.client.DatabaseClient;
import com.marklogic.client.DatabaseClientFactory;

public class Configuration {

    public static DatabaseClient exampleClient() {
        return DatabaseClientFactory.newClient(
                "jmakeig-centos6-virtualbox.localdomain",
                8000,
                "admin",
                "********",
                DatabaseClientFactory.Authentication.DIGEST);
    }
}
