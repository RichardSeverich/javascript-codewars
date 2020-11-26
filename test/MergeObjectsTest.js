var assert = require("chai").assert;
var mergeObjects = require("./../src/MergeObjects");

describe("MergeObjects tests", function () {
  it("Test number 1", function () {
    assert.deepEqual(mergeObjects(
      { name: "alex"}, 
      { name: "giomara"}, 
      { name: "richard"}, 
      {city: "cbba"}), 
      {name: "alex, giomara, richard", city: "cbba"});
    assert.deepEqual(mergeObjects(
      { name: "alex"}, 
      { name: "giomara", dni: "5478784"}, 
      { name: "richard"}, 
      {name: "alex", city: "cbba"}), 
      {name: "alex, giomara, richard, alex", dni: "5478784", city: "cbba"});
  });
});
