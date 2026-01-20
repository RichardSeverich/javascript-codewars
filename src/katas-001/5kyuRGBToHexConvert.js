/*
The rgb function is incomplete. Complete it so that passing in RGB 
decimal values will result in a hexadecimal representation being 
returned. Valid decimal values for RGB are 0 - 255. Any values that 
fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3" 
*/
function rgb(r, g, b) {
  if (r > 255) { r = 255 }
  if (g > 255) { g = 255 }
  if (b > 255) { b = 255 }
  if (r < 0) { r = 0 }
  if (g < 0) { g = 0 }
  if (b < 0) { b = 0 }
  const rBinary = Number(r).toString(2);
  const gBinary = Number(g).toString(2);
  const bBinary = Number(b).toString(2);
  const r8Bits = complete8Bits(rBinary);
  const g8Bits = complete8Bits(gBinary);
  const b8Bits = complete8Bits(bBinary);
  const rPartA = r8Bits.substring(0, 4);
  const rPartB = r8Bits.substring(4, 8);
  const gPartA = g8Bits.substring(0, 4);
  const gPartB = g8Bits.substring(4, 8);
  const bPartA = b8Bits.substring(0, 4);
  const bPartB = b8Bits.substring(4, 8);
  result = binaryToHex(rPartA)
    + binaryToHex(rPartB)
    + binaryToHex(gPartA)
    + binaryToHex(gPartB)
    + binaryToHex(bPartA)
    + binaryToHex(bPartB);
  return result;
}

function binaryToHex(binaryNum) {
  switch (binaryNum) {
    case '0000':
      return "0";
    case '0001':
      return "1";
    case '0010':
      return "2";
    case '0011':
      return "3";
    case '0100':
      return "4";
    case '0101':
      return "5";
    case '0110':
      return "6";
    case '0111':
      return "7";
    case '1000':
      return "8";
    case '1001':
      return "9";
    case '1010':
      return "A";
    case '1011':
      return "B";
    case '1100':
      return "C";
    case '1101':
      return "D";
    case '1110':
      return "E";
    case '1111':
      return "F";
    default:
      return "0"
  }

}

function complete8Bits(binaryNum) {
  if (binaryNum.length < 8) {
    return complete8Bits("0" + binaryNum);
  }
  return binaryNum;
}

console.log(rgb(255, 255, 255));
console.log(rgb(0, 10, 20));
console.log(rgb(300, 255, 255));
