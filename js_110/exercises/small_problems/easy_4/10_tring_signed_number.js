// Convert a String to a Signed Number
// In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

/*
- string may have leading +/- sign
- return a postive number if the firt character is +
- return a negative number if the first character is -
- if there is no sign, return positive number
- assume the string contain a valid number

D:
- in: str
- out: signed number

A:
define a function stringToSignedNum with str
- initialize num to 0, this is to keep numbers
- initialize sign to 1, this is to multiply it with number
- if the first character in str is equal to '-'
 - Update sign to -1
 - Update str to characters without the first one
- If the first character is '+'
 - Update str to characters without the first one

- Loop through str
 - Get the character code of '0', subtract it from  the character code of the digit at the current index.
 - Add this value to the number obtained from multiplying 10 by `num`, assign it to `num`
- Repeat this until idx is less than str.length

Return the result of multiplying `num` * `sign`
*/
const p = console.log;
function stringToSignedInteger(str) {
  let num = 0;
  let sign = 1;

  if (str[0] === '-') {
    sign = -1;
    str = str.slice(1); // remove sign
  } if (str[0] === '+') {
    str = str.slice(1) // remove sign
  }

  for (let idx = 0; idx < str.length; idx++) {
    num = num * 10 + (str[idx].charCodeAt() - '0'.charCodeAt());
  }

  return num * sign;
}

// LS way
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length)); 
    default:
      return stringToInteger(string); // invoking the previous function
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true