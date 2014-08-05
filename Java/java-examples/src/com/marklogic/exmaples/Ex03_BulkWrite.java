package com.marklogic.exmaples;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.marklogic.client.DatabaseClient;
import com.marklogic.client.document.DocumentWriteSet;
import com.marklogic.client.document.GenericDocumentManager;
import com.marklogic.client.io.DocumentMetadataHandle;
import com.marklogic.client.io.JacksonHandle;
import com.marklogic.client.io.marker.DocumentMetadataWriteHandle;

public class Ex03_BulkWrite {

    private static final int BATCH_SIZE = 500;

    public static void main(String[] args) throws IOException {
        DatabaseClient client = Configuration.exampleClient();
        GenericDocumentManager docMgr = client.newDocumentManager();

        // Create an I/O adapter for inputting JSON data.
        JacksonHandle handle = new JacksonHandle();
        ObjectMapper mapper = new ObjectMapper();
        JsonFactory factory = mapper.getFactory();

        // Create a new collection to manage bulk writes.
        DocumentWriteSet writeSet = docMgr.newWriteSet();

        // Set thte default metadata (e.g. collections, permissions, quality)
        // that will apply to the entire set.
        DocumentMetadataHandle meta = new DocumentMetadataHandle();
        meta.withCollections("dummy batched data");
        writeSet.addDefault(meta);
        for (int i = 0; i < 1031; i++) {
            // Construct a JSON document inline. This isn't very realistic.
            // Typically you'd read from the file system or another service. The
            // I/O handle adapters make it easy to switch input sources, though.
            JsonParser jp = factory.createParser("{\"k\":\"v1-" + i + "\"}");
            JsonNode content = mapper.readTree(jp);
            handle.set(content);
            writeSet.add("/" + i + ".json", meta, handle);
            // Periodically write a batch. Each batch is written in its own
            // transaction. The ideal batch size will depend on
            // the characteristics of your data and your infrastructure.
            if (i % BATCH_SIZE == 0) {
                docMgr.write(writeSet);
                System.out.println("Wrote batch");
                writeSet.clear();
            }
        }
        // Cleanup if there's anything that hasn't been flushed from the
        // WriteSet.
        if (!writeSet.isEmpty()) {
            docMgr.write(writeSet);
            System.out.println("Wrote remainder");
        }
    }
}
