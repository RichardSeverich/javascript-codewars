/* For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with
the same l return the first in order of appearance.
For empty string return:
["", 0] */

/*
describe("Longest repetition", ()=>{
  it("Example tests", function(){
    Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
    Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
    Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
    Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
    Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
    Test.assertDeepEquals( longestRepetition(""),            ["",0] );
    Test.assertDeepEquals( longestRepetition("ba"),          ["b",1] );
  });
});
 */

function longestRepetition(s) {
  const array = s.split('');
  const myMap = new Map();
  array.forEach((item) => {
    myMap.set(item, 0);
  });
  let bigNum = 0;
  let bigKey = "";
  let oldKey = "";
  array.forEach((key) => {
    let counter = myMap.get(key) + 1;
    if (oldKey !== key) {
      counter = 1;
    }
    myMap.set(key, counter);
    if (bigNum < counter) {
      bigNum = counter;
      bigKey = key;
    }
    oldKey = key;
  });
  return [bigKey, bigNum];
}

/*
Write a function named first_non_repeating_letter† that takes a string input, and returns the 
first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function 
should handle any Unicode character.

*/


/*
const Test = require('@codewars/test-compat');

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});

*/


function firstNonRepeatingLetter(s) {
  const myMap = new Map();
  const array = s.split('');
  array.forEach((item) => {
    myMap.set(item, 0);
  })
  array.forEach((key) => {
    let counter = myMap.get(key) + 1;
    myMap.set(key, counter);
  })
  let result = "";
  let band = true;
  myMap.forEach((value, key, map) => {
    if (value === 1 && band) {
      result = key;
      band = false;
    }
  })
  return result
}
