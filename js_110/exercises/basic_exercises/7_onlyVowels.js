// Time: [5:13 - 5:17]
// Given a string, return only the vowel (US alphabet) from the string: 

// Create an empty `onlyVowels` string
// Iterate through array version of str
//  - If current character is included in vowels string
//   - Update `onlyVowels` by adding current character to it
//  - Else, ignore it
// End the iteration when reaching str.length
// Return `onlyVowels`

function onlyVowels(str) {
  return str.split('')
            .filter(char => 'aeiou'
            .includes(char.toLowerCase()))
            .join('');
}

console.log(onlyVowels('hooll')); // oo
console.log(onlyVowels('here wE go')); // eeEo


// Using regex

const text = "Hello World";
const vowelRegex = /[aeiouAEIOU]/g;
const vowels = text.match(vowelRegex).join('');

console.log(vowels); // Output: ["e", "o", "o"]

// In this example, the regex pattern [aeiouAEIOU] 
// checks for any vowels (a, e, i, o, u, A, E, I, O, U) in the text string. 
// The g flag is used to perform a global search, which finds all occurrences of 
// vowels in the text.
