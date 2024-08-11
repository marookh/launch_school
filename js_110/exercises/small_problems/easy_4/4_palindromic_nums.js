// t: [2: 24 - 2: 31]
// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic,
//or false otherwise. A palindromic number reads the same forwards and backwards.

/*
if the given integer is palindromic, return true
Otherwise, return false
A palindromic number reads the same backwords an forwards

D:
In: a number, positive
Out: boolean
Inter: an array of strig version of numbers

A: covert numbers into string, then into array of letters, revrese the array
and finally join it back together to for a reversed string of input number.
If this reversed version of number is equal to the original form of number converted
to string, return true, false otherwise.

Algo:
- convert number to string, convert the string into array of characters
- reverse the array of characters and join it back inot a string
- Compare both string versions of number
- If equal, return true, otherwise false
*/

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));

}

// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true