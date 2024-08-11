// Time: [8:32 - 8: 50]
// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

/*
P:
- remove dublicate characters
- If, emtpy, return ''

D:
Input: string with dublicate characters
Output: string with unique characters
Inter: an array of characters

A:
- Initialize an empty array `uniques` 
- Initialize `chars` array to the array version of string
- Loop through characters in `chars`
 - if the current character is not equal to the next character
 - Push the current character to `uniques`
- End the loop

return `uniques`
*/

function crunch(str) {
  let unique = [];
  let chars = str.split('');

  for (let idx = 0; idx < chars.length; idx++) {
    if (chars[idx] !== chars[idx + 1]) {
      unique.push(chars[idx]);
    }
  }
  return unique.join('');
}

// Using reduce to built a new string it it does not include character before
function removeDuplicates(str) {
  return str.split('').reduce((acc, char) => {
      if (!acc.includes(char)) {
          acc += char;
      }
      return acc;
  }, '');
}

// Example usage
console.log(removeDuplicates('aabbcc')); // Output: 'abc'
// ===========================================================
// Using indexOf 
function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) === -1) {
          result += str[i];
      }
  }
  return result;
}

// Example usage
console.log(removeDuplicates('aabbcc')); // Output: 'abc'

// ========================
const crunch = (str) => {
  return str.split('').filter((char, idx) => str.indexOf(char) !== idx);
}
// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));     