package com.acme;

import java.util.HashSet;
import java.util.Set;

import com.marklogic.client.pojo.annotation.Id;

public final class User {

    public String guid;
    private String name;
    private String about;
    private String address;
    private Boolean active;
    private Double balance;
    private Integer age;
    private Set<User> friends;
    private Set<Tag> tags;

    public User() {
        super();
        // this.friends = new HashSet<User>();
        this.tags = new HashSet<Tag>();
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean isActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Id
    public String getGUID() {
        return guid;
    }

    public void setGUID(String guid) {
        this.guid = guid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public Set<User> getFriends() {
        return friends;
    }

    public void setFriends(Set<User> friends) {
        this.friends = friends;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

}