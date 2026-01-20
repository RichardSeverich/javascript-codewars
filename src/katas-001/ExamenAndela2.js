const isPalindrome = number => {
    const originalNumberStr = number.toString();
    const reverseNumberStr = originalNumberStr.split('').reverse().join('');
    return originalNumberStr === reverseNumberStr;
}

const getReverseNumber = number => {
    const originalNumberStr = number.toString();
    const reverseNumberStr = originalNumberStr.split('').reverse().join('');
    return Number(reverseNumberStr);
}

const palindromeChainLength = n => {
  let palindrome = isPalindrome(n);
  if(palindrome){
     return 0;
  } else {
    const newNumber = getReverseNumber(n) + n;
    return palindromeChainLength(newNumber) + 1;
  }
};

console.log(palindromeChainLength(87)); // 4
console.log(palindromeChainLength(121)); // 0 (ya es palíndromo)

