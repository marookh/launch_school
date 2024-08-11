// time: [1: 56 - 2: 17]
// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is
// a palindrome, or false otherwise. This time, however, your function should be
// case-insensitive, and should ignore all non-alphanumeric characters. If you wish,
// you may simplify things by calling the isPalindrome function you wrote in the
// previous exercise.

/*
if the string is palindrome, return true. Otherwise, false
function should be case-insesitive
should ignore all non-alphanumeric characters
you may call isPalindrome (the previous function you wrote)
Input can be a combination of letters/numbers

D:
In: string
Out: boolean
Int: n/a
Helper func: isPalindrome/cleanUp

A: 
- Remove non-alphanumeric chacracters from the string, convert the string to lowercase
- Comapre the reversed and the current version of string
- If equal, return true, otherwise, false

Pseudocode:
Helper function: isPalindrome
In: string
Out: boolean

- Define a function isPalindrome with one paramater str
 - Conver the string into an array of characters, reverse the array, convert 
 it back to string
 - Compare the two strings (str and reversed version of it)
 - If equal, return true. Otherwise,return false
==============================================================
Helper func: cleaUp
In: str
Out: only letters in string
- Find every occurance of characters that is not an alphabetical letter case insesitive
  - Replace it with an empty string
===============================================================

Main func: isRealPalindrome
In: str
Out: boolean

- Initialize `cleanStr`, get to only letters version of string assign it to `cleaStr`
- Covert `cleanStr` to lowercase, check whether it is a palindrome
- If so, return true, otherwise false
*/
// Examples:

const p = console.log;

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

const cleanUp = (str) => {
  return str.replace(/[^a-z]/gi, '');
}

const isRealPalindrome = (str) => {
  let cleanStr = cleanUp(str);
  return isPalindrome(cleanStr.toLowerCase());
}

// ===================================================
// LS solution
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

// Shorter one using regex
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false