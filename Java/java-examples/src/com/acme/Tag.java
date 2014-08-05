package com.acme;

import com.marklogic.client.pojo.annotation.Id;

public class Tag {
    private String label;
    private String description;

    public Tag() {
        super();
    }

    public Tag(String label) {
        super();
        this.label = label;
    }

    @Id
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Tag [label=" + label + ", description=" + description + "]";
    }

}
