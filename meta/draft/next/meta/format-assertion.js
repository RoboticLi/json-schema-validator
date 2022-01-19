module.exports = `{
    "$id": "https://json-schema.org/draft/next/meta/format-assertion",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/format-assertion": true
    },
    "$dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for assertion results",
    "type": ["object", "boolean", "string"],
    "properties": {
        "format": { "type": "string" }
    }
}`;
