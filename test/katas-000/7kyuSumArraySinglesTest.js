var assert = require("chai").assert;
var sumArraySingles = require("../../src/katas-000/7kyuSumArraySingles");

describe("Sum array no repeat tests", function () {
  it("Test number 1", function () {
    assert.equal(sumArraySingles([4,5,7,5,4,8]),15);
    assert.equal(sumArraySingles([9, 10, 19, 13, 19, 13]),19);
    assert.equal(sumArraySingles([16, 0, 11, 4, 8, 16, 0, 11]),12);
    assert.equal(sumArraySingles([5, 17, 18, 11, 13, 18, 11, 13]),22);
    assert.equal(sumArraySingles([5, 10, 19, 13, 10, 13]),24);
  }); 
});
