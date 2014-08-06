package com.marklogic.examples;

import com.acme.Tag;
import com.acme.User;
import com.marklogic.client.DatabaseClient;
import com.marklogic.client.pojo.PojoRepository;

public class Ex01_POJO {

    public static void main(String[] args) {
        // A little phony here. A real app probably wouldn't
        // generate these inline.

        // Create com.acme.User instances.
        User shauna = new User();
        shauna.setName("Shauna Weber");
        shauna.setAddress("760 Forest Place, Glenshaw, Michigan, 1175");
        shauna
            .setAbout("Kitsch fingerstache XOXO, Carles chambray 90's meh cray disrupt Tumblr. Biodiesel craft beer sartorial meh put a bird on it, literally keytar blog vegan paleo. Chambray messenger bag +1 hoodie, try-hard actually banjo bespoke distillery pour-over Godard Thundercats organic. Kitsch wayfarers Pinterest American Apparel. Hella Shoreditch blog, shabby chic iPhone tousled paleo before they sold out keffiyeh Portland Marfa twee dreamcatcher. 8-bit Vice post-ironic plaid. Cornhole Schlitz blog direct trade lomo Pinterest.");
        shauna.setActive(true);
        shauna.setBalance(2774.31);
        shauna.setGender("female");
        shauna.setAge(29);
        shauna.setGUID("6e1c7304-09a1-4436-ba77-ae1e3b8856f7");

        User peters = new User();
        peters.setName("Peters Barnett");
        peters.setAddress("749 Green Street, Tyro, Illinois, 2856");
        peters
            .setAbout("Letterpress Echo Park fashion axe occupy whatever before they sold out, Pinterest pickled cliché. Ethnic stumptown food truck wolf, ethical Helvetica Marfa hashtag. Echo Park photo booth banh mi ennui, organic VHS 8-bit fixie. Skateboard irony dreamcatcher mlkshk iPhone cliche. Flannel ennui YOLO artisan tofu. Hashtag irony Shoreditch letterpress, selvage scenester YOLO. Locavore fap bicycle rights, drinking vinegar Tonx bespoke paleo 3 wolf moon readymade direct trade ugh wolf asymmetrical beard plaid.");
        peters.setActive(false);
        peters.setBalance(1787.45);
        peters.setGender("male");
        peters.setAge(38);
        peters.getTags().add(new Tag("ex"));
        peters.getTags().add(new Tag("ex"));
        peters.getTags().add(new Tag("ut"));
        peters.getTags().add(new Tag("exercitation"));
        peters.getTags().add(new Tag("Lorem"));
        peters.getTags().add(new Tag("magna"));
        peters.getTags().add(new Tag("non"));
        peters.getTags().add(new Tag("aute"));
        peters.getTags().add(new Tag("nisi"));
        peters.setGUID("34a23649-ec61-478f-90ab-5f01a55120ce");

        DatabaseClient client = Configuration.exampleClient();
        // Create a repository specific to User classes.
        // The repository takes care of all of the serialization/deserialization
        // between POJOs and documents in the database.
        PojoRepository<User, String> userRepo = client.newPojoRepository(User.class, String.class);
        userRepo.write(shauna, "fake data");
        userRepo.write(peters, "fake data");

    }
}
