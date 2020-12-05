const { Core, Schema } = require("@hyperjump/json-schema-core");
const { splitUrl } = require("../common");


// URI. initial resolution. No bookending
const compile = async (dynamicRef, ast) => {
  const [, fragment] = splitUrl(Schema.value(dynamicRef));
  const referencedSchema = await Schema.get(Schema.value(dynamicRef), dynamicRef);
  await Core.compileSchema(referencedSchema, ast);
  return fragment;
};

const interpret = (fragment, instance, ast, dynamicAnchors) => {
  if (!(fragment in dynamicAnchors)) {
    throw Error(`No dynamic anchor found for "${fragment}"`);
  }
  return Core.interpretSchema(dynamicAnchors[fragment], instance, ast, dynamicAnchors);
};

const collectEvaluatedProperties = Core.collectEvaluatedProperties;
const collectEvaluatedItems = Core.collectEvaluatedItems;

module.exports = { compile, interpret, collectEvaluatedProperties, collectEvaluatedItems };
