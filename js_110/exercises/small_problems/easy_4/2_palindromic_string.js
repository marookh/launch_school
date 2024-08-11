// Time: [1: 46 - 1: 50]
// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

/* 
P: 
- if the string is palindrome, return true or false otherwise
- A palindrome reads the same back and forwards
- Case and all characters matter
- input can be string digit, apply the same rules

D:
- In: string
- Out: boolean
- Inter: an array of splitted, and reversed string

A:
- Define a function isPalindrome with one paramater str
 - Conver the string into an array of characters, reverse the array, convert 
 it back to string
 - Compare the two strings (str and reversed version of it)
 - If equal, return true. Otherwise,return false
*/

const p = console.log;
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

// Examples:

p(isPalindrome('madam'));               // true
p(isPalindrome('Madam'));               // false (case matters)
p(isPalindrome("madam i'm adam"));    // false (all characters matter)
p(isPalindrome('356653'));              // true
