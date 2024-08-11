// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

/*
Write a function called xor with two parameters
return true, if exactly one operand is truthy, false otherwise
The result should be a boolean, not a truthy/falsy value
Assuming that the values are numbers, booleans or a combination of the two

Data:
Input: two values (numbers, booleans)
Output: boolean

Algorithm:
- If the boolean version `val1` is `true` AND the boolean version of `val2` is `false`, return true
- If `val2` is true, but `val1` is false, return true
- Else, return false
*/

function xor(val1, val2) {
  if (!!val1 === true && !!val2 === false) {
    return true;
  } else if (!!val1 === false && !!val2 === true) {
    return true;
  } else {
    return false;
  }
}

// LS solutions
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

function xor(value1, value2) {
  return Boolean((value1 && !value2) || (value2 && !value1));
}

// mind blowing solution
let xor = (a, b) => !!a !== !!b;
// Examples:

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true