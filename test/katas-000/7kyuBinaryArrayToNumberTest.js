var assert = require("chai").assert;
var binaryArrayToNumber = require("../../src/katas-000/7kyuBinaryArrayToNumber");

describe("Binary array to number test", function () {
  it("Test number 1", function () {
    assert.equal(binaryArrayToNumber([0,0,0,1]), 1);
    assert.equal(binaryArrayToNumber([0,0,1,0]), 2);
    assert.equal(binaryArrayToNumber([1,1,1,1]), 15);
    assert.equal(binaryArrayToNumber([0,1,1,0]), 6);
  }); 
});
