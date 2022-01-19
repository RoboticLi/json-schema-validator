module.exports = `{
    "$id": "https://json-schema.org/draft/next/meta/content",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/content": true
    },
    "$dynamicAnchor": "meta",

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean", "string"],
    "properties": {
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "contentSchema": { "$dynamicRef": "#meta" }
    }
}`;
