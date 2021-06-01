var assert = require("chai").assert;
var listDigits = require("./../src/ListDigits");

describe("List Digits Tests", function () {

  it("Test number 1: Get only numbers", function () {
    assert.deepEqual(
      listDigits.getOnlyNumbers([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]),
      [4, 8, 9, 2, 5, 3, 3]);
  });

  it("Test number 2: Get only Zeros", function () {
    assert.deepEqual(
      listDigits.getOnlyZeros([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]),
      [0, 0, 0]);
  });

  it("Test number 3: Move all Zeros to the right", function () {
    assert.deepEqual(
      listDigits.moveAllZeros([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]),
      [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]);
  });

  it("Test number 4: Get sum array", function () {
    assert.deepEqual(
      listDigits.getSumArray([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]),
      [4, 8, 9, 2, 5, 3, 4]);
  });

  it("Test number 5: Multiply by negative", function () {
    assert.deepEqual(
      listDigits.getArrayNegative([4, 8, 9, 2, 5, 8, 4, 9]),
      [-4, 8, -9, 2, -5, 8, -4, 9]
      );
  });

  it("Test number 6: Maximum sum", function () {
    assert.deepEqual(
      listDigits.getMaximumSum([4, 8, 9, 2, 5, 8, 4, 9]), 5);
  });

});
