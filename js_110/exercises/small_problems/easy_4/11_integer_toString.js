// T: [8:53 - 9: 30]
// Convert a Number to a String
// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next,
// you're going to reverse those functions.

// Write a function that converts a non-negative integer value
// (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way and
// construct the string by analyzing and manipulating the number.

// Rules:
// - convert a number to string using old-fasioned way
// - Don't use any built-in method or operator
// - Assume that the input is a non-negative integer
// - Analyze and manipulate the number
// - 0 is also converted to its string representation

// Data:
// Input: a number
// OUtput: string repersentaion of that number
// Int: Object to store the numbers as keys and values 0-9

// A:
// - Define a function `integerToString` with one `num` parameter
//  If `num` is `0`, return '0'

//  - Initialize a `digits` variable to string digits  0-9
//  - Initialize a `result` to an empty string
//  - Start a while loop until `num` is greater than 0
//   - Get the last digit by `num` % 10 modulus
//   - Prepand the corresponding charactar in `digits` to the `result`
//   - Remove the last digit from `num` by dividing `num` by 10. Assign the
// floored down returned number to `num`
// - After looping through num

// Return `result`

// Examples:

function integerToString(num) {
  if (num === 0) return '0';

  let result = '';
  let digits = '0123456789';

  while (num > 0) {
    let lastDigit = num % 10;
    result = digits[lastDigit] + result;
    num = Math.floor(num / 10);
  }

  return result;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

// ===========================================================
// LS solution
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }