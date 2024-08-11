// Convert a Signed Number to a String

// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Rules
// - write a function that converts a signed number to string
// - Do not use standard conversion functions
// - You may use integerToSTring()
// - You may also check the Math.sing() function

// Data:
// Input: number, negative, integer or -0/0
// Output: number into string 

// A:
// Check whether the number is positive or negative
// - If negative zero, return '-0'
// - If positive inteter, get the string version of the number prepanded with '+' sign 
// - If negative, get the string version of the absolute value of number, prepanded with a '-' sign 
// - If negative 0, return '0'


function signedIntegerToString(num) {
  const sign = Math.sign(num);

  if (Object.is(sign, -0)) return '-0';

  switch(sign) {
    case 1:
      return '+' + integerToString(num);
    case -1:
      return '-' + integerToString(Math.abs(num));
    default:
      return '0'
  } 
}

function integerToString(num) {
  if (Math.sign(num) === 0) return '0'

  let result = '';
  let digits = '0123456789';

  while (num > 0) {
    let lastDigit = num % 10;
    result = digits[lastDigit] + result;
    num = Math.floor(num / 10);
  }

  
  return result;
}

// LS solution:
// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(number)}`;
//     default:
//       return integerToString(number);
//   }
// }

console.log(signedIntegerToString(4321) === "+4321"); // true
console.log(signedIntegerToString(-123) === "-123");// true
console.log(signedIntegerToString(0) === "0"); // true
console.log(signedIntegerToString(-0) === "-0"); // true

