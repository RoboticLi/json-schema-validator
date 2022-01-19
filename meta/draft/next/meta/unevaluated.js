module.exports = `{
    "$id": "https://json-schema.org/draft/next/meta/unevaluated",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/unevaluated": true
    },
    "$dynamicAnchor": "meta",

    "title": "Unevaluated applicator vocabulary meta-schema",
    "type": ["object", "boolean", "string"],
    "properties": {
        "unevaluatedItems": { "$dynamicRef": "#meta" },
        "unevaluatedProperties": { "$dynamicRef": "#meta" }
    }
}`;
