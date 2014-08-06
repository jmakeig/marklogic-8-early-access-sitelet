package com.marklogic.examples;

import com.acme.User;
import com.marklogic.client.DatabaseClient;
import com.marklogic.client.pojo.PojoPage;
import com.marklogic.client.pojo.PojoQueryBuilder;
import com.marklogic.client.pojo.PojoRepository;
import com.marklogic.client.query.QueryDefinition;

public class Ex02_POJOQuery {

    public static void main(String[] args) {

        DatabaseClient client = Configuration.exampleClient();

        // Create a repository specific to User classes.
        // The repository takes care of all of the serialization/deserialization
        // between POJOs and documents in the database.
        PojoRepository<User, String> userRepo = client.newPojoRepository(User.class, String.class);
        PojoQueryBuilder<User> q = userRepo.getQueryBuilder();
        QueryDefinition query = q.or(
            q.word("about", "pickled cliche"),
            q.value("gender", "female")
            );

        PojoPage<User> page = userRepo.search(query, 1);
        for (User user : page) {
            System.out.println(user.toString());
        }
    }
}