// Time: [4:45 - 5:4]
// From this "!@#Hello123*()" string, remove all the special characters and return Hello ↓


// Rules:
// - should be case insensitive
// - Remove numbers as well

// Date:
// In: string with special chars
// OUt: a new string witout special chars
// Int: An array of characters, string of special chars


// A:
// Define a function `cleanUp` with on param:str
// Initialize a `stringArr` to  array version of string
// Initialize a `speciallChars` variable to special characters

// Create an empty  `pureChars` array
// Travers `stringArr` up to stringArr.length
// - If current `char` is not included in `speciallChars`
//  - Append it to `pureChars`
// End the iteration

// Return `pureChars` joined back to a single string

// Fist approach
function cleanUpString(str) {
  let onlyLetters = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of str) {
    if (alphabet.includes(char.toLowerCase())) onlyLetters += char;
  }

  return onlyLetters;
}

// second approach
const cleanUp = str => {
  return str.replace(/[^a-zA-Z]/g, '');
}

// third approach
function cleanUp(str) {
  return str.split('').filter(char => {
    const speciallChars = '!@#$%^&*()123456789';

    return !speciallChars.includes(char);
  }).join('');
}


console.log(cleanUp("!@#Hello123*()")); // 'Hello'
console.log(cleanUp("#bar")); // bar
console.log(cleanUp("##foo**")); // foo


