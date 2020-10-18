var assert = require("chai").assert;
var capitalize = require("./../src/Capitalize");

describe("Capitalize tests", function () {
  it("Test number 1", function () {
    assert.deepEqual(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
    assert.deepEqual(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
    assert.deepEqual(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
    assert.deepEqual(capitalize("codewarriors"), [
      "CoDeWaRrIoRs",
      "cOdEwArRiOrS",
    ]);
  });
});
