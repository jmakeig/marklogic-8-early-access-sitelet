package com.marklogic.examples;

import com.acme.User;
import com.marklogic.client.DatabaseClient;
import com.marklogic.client.pojo.PojoPage;
import com.marklogic.client.pojo.PojoQueryBuilder;
import com.marklogic.client.pojo.PojoRepository;
import com.marklogic.client.query.PojoQueryDefinition;

public class Ex02_POJOQuery {

  public static void main(String[] args) {

    DatabaseClient client = Configuration.exampleClient();

    // Create a repository specific to User classes.
    // The repository takes care of all of the serialization/deserialization
    // between POJOs and documents in the database.
    PojoRepository<User, String> userRepo = client.newPojoRepository(
        User.class, String.class);
    PojoQueryBuilder<User> qb = userRepo.getQueryBuilder();
    PojoQueryDefinition query = qb.or(qb.word("about", "pickled cliche"),
        qb.value("gender", "female"));

    PojoPage<User> page = userRepo.search(query, 1);
    for (User user : page) {
      System.out.println(user.toString());
    }
  }
}
