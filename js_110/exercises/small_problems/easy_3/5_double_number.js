// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// P:
// if number is not doulbe, multiply it by two, return it
// if is doulbe, return it as as
// doulbe (even-length number, whose left and right side are the same)

// D:
// Input: number
// Ouptu: double or multiplied by 2

// A:
//Helper func: Write a mulitply function that multiplies a given number by 2 and returns it.

// Helper func: Write isDoulbe function with one param number
// If the lengh is even
// - Get the right and left side of the number, assign them to two vars
// - If `left` is equal to `right`, return true, else, return false


// Write function called `p(twice` with one parameter a `number`
// If the number is doulbe
// - return the number
// Else, Multiply the number by 2 and return it
const p = console.log;
const multiply = (num) => num * 2;

const isDouble = (number) => {
  let strDigit = String(number);
  let length = strDigit.length;
  let left = strDigit.slice(0, length / 2);
  let right = strDigit.slice(length / 2);
  return right === left;
}

function twice(n) {
    if (isDouble(n)) {
      return n;
    } else {
      return multiply(n);
    }
  }

  // LS solution
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

// Discussion
// The challenging part of this problem is determining how to compare the left-side numbers with the right-side numbers. The trick is to compare them as strings instead of as numbers.

// Given this, the solution does the following via the isDoubleNumber function:

// Gets the left-side and right-side substrings by calculating the middle index of stringNumber.
// Returns the result of comparing the left and right substrings.
// If the length of stringNumber is odd, it is not a double number.
// If the length of stringNumber is even, there is a chance that it is a double number.

// Examples:

p(twice(37));          // 74
p(twice(44));          // 44
p(twice(334433));      // 668866
p(twice(444));         // 888
p(twice(107));         // 214
p(twice(103103));      // 103103
p(twice(3333));        // 3333
p(twice(7676));        // 7676