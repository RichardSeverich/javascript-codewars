/**
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a 
string containing the Roman Numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any 
digit with a value of zero. There cannot be more than 3 identical symbols in a row.
In Roman numerals:
1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.
*/

// number 1 and 3999
function solution(number) {
  let stringNumber = number.toString();
  let arrayNumbers = stringNumber.split("");
  let size = arrayNumbers.length;
  let result = "";
  switch(size) {
      case 1:
        result = getRoman(arrayNumbers[0]);
        return result;
      case 2:
        result = getRomanTens(arrayNumbers[0] + "0") + getRoman(arrayNumbers[1]);
        return result;
      case 3:
        result = getRomanHundreds(arrayNumbers[0] + "00") + getRomanTens(arrayNumbers[1] + "0") + getRoman(arrayNumbers[2]);
        return result;
      case 4:
        result = getRomanThousands(arrayNumbers[0] + "000") + getRomanHundreds(arrayNumbers[1] + "00") + getRomanTens(arrayNumbers[2] + "0") + getRoman(arrayNumbers[3]);
        return result;
      default:
        return "None" 
  }

}


function getRoman(num) {
    switch(num) {
      case "0":
        return "";
      case "1":
        return "I";
      case "2":
        return "II";
      case "3":
        return "III";
      case "4":
        return "IV";
      case "5":
        return "V";
      case "6":
        return "VI";
      case "7":
        return "VII";
      case "8":
        return "VIII";
      case "9":
        return "IX";
      default:
        return "None"
  }
}


function getRomanTens(num) {
    switch(num) {
      case "00":
        return "";
      case "10":
        return "X";
      case "20":
        return "XX";
      case "30":
        return "XXX";
      case "40":
        return "XL";
      case "50":
        return "L";
      case "60":
        return "LX";
      case "70":
        return "LXX";
      case "80":
        return "LXXX";
      case "90":
        return "XC";
      default:
        return "None"
  }
}


function getRomanHundreds(num) {
   switch(num) {
      case "000":
        return "";
      case "100":
        return "C";
      case "200":
        return "CC";
      case "300":
        return "CCC";
      case "400":
        return "CD";
      case "500":
        return "D";
      case "600":
        return "DC";
      case "700":
        return "DCC";
      case "800":
        return "DCCC";
      case "900":
        return "CM";
      default:
        return "None"
   }
  }
  

  function getRomanThousands(num) {
   switch(num) {
      case "0000":
        return "";
      case "1000":
        return "M";
      case "2000":
        return "MM";
      case "3000":
        return "MMM";
      default:
        return "None"
  }
}


console.log(solution(1))
console.log(solution(2))
console.log(solution(3))
console.log(solution(4))
console.log(solution(5))
console.log(solution(6))
console.log(solution(7))
console.log(solution(8))
console.log(solution(9))
console.log(solution(10))
console.log(solution(100))
console.log(solution(200))
console.log(solution(300))
console.log(solution(400))
console.log(solution(500))
console.log(solution(600))
console.log(solution(700))
console.log(solution(800))
console.log(solution(900))
console.log(solution(1000))
console.log(solution(2000))
console.log(solution(3000))
console.log(solution(2007)) // 2007 should, "MMVII

