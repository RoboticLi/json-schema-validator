const { Schema, Instance } = require("@hyperjump/json-schema-core");
const jsonStringify = require("fastest-stable-stringify");


const compile = (schema) => Schema.value(schema);

const interpret = (uniqueItems, json) => {
  if (uniqueItems === false) {
    return true;
  }

  const normalizedItems = Instance.map((item) => jsonStringify(Instance.value(item)), json);
  return (new Set(normalizedItems)).size === normalizedItems.length;
};

module.exports = { compile, interpret };