const { Core, Schema } = require("@hyperjump/json-schema-core");


// Name. No bookending
const compile = Schema.value;

const interpret = (fragment, instance, ast, dynamicAnchors) => {
  if (!(fragment in dynamicAnchors)) {
    throw Error(`No dynamic anchor found for "${fragment}"`);
  }
  return Core.interpretSchema(dynamicAnchors[fragment], instance, ast, dynamicAnchors);
};

const collectEvaluatedProperties = Core.collectEvaluatedProperties;
const collectEvaluatedItems = Core.collectEvaluatedItems;

module.exports = { compile, interpret, collectEvaluatedProperties, collectEvaluatedItems };
