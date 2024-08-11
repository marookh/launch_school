// Letter Swap
// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string
// will always contain at least one word. You may also assume that each string
// contains nothing but words and spaces, and that there are no leading, trailing,
// or repeated spaces.

/*
Swap the first letter with the last letter of every word in a give string
Return the modified string
Assume that every word contains one letter at least
String will contain at least one word
Assume that there are no leading, trainling, or repeated spaces

D:
In: string of words or letter
Out: the orginal string with every word with the firt letter swpaed
Inter An array of words

A:
- Initialize an empty array `swaped`
- Initialize words array to array version of string
- Loop through words array 
 - Cut off the last letter of the word, assign it to `lastChar`
 - Cut off the first letter of the word, assign it to `firstChar`
 - Push the concatenation of `lastChar` + word starting at index 1, ending at 
   word.length - 1, + `firstChar`
- After ending the loop

return `swaped` joined back together separated by space
*/

function swap(str) {
  if (str.length === 1) return str;

  return str.split(' ').map(word => {
    let lastChar = word[word.length -1];
    let firstChar = word[0];
    return lastChar.concat(word.slice(1, -1), firstChar);
  }).join(' ');
}

// LS solution
function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// Examples:

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"