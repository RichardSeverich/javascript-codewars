function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const reversedStr = lowercaseStr.split('').reverse().join('');
  return lowercaseStr === reversedStr;
}


console.log(isPalindrome("Ana")); // true
console.log(isPalindrome("")); // true
console.log(isPalindrome("Hola")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false