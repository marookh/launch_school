// t: [3: 11 - 3: 36]
// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated
//  words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Write function taking string words as input
// returns an object, key is the length of word while value is the number that
// the string occured in the input string
// Words are sequence of non-space characters in this context
// Assume that the sizes of words are in ascending order
// Assuming that non-alphanumeric characters are also counted
// Assuming that only size matter, not the equality of string occurances
// If no string is found, return empty object

// D:
// Input: words (strings)
// Output: object with the size as keys and the number of string as values
// Int: An array of sorted words

// A:
// - Sort the array version of string in ascending order
// - Create an object of words sizes and their numbers
// - Return the object

// Algo:
// Helper func: sortAscend
// In: string
// Out: sorted Array of words
// Initialize `sortedWords` to coverting string into an array of words separated
// by space and sorting them in ascending order based on their length
// Return the sorted array
// ----------

// Main func: wordSizes
// Initialize an empty `counter` object
// Initialize `sortedWords` to the sorted wrods 
// if `str` is an empty array, return `counter`

// Loop through each word `sortedWords` 
// - Initialize `length` to the length of current words
// - If the `length`  exist in `counter` object
//  - Increment its value by `1`
// - If `length` does not exsits, 
//  - //  - Initialize `length` as key and `1` as value

// Examples:

let p = console.log;
function sortAscend(str) {
  return str.split(' ').sort((a, b) => a.length - b.length);
}

function wordSizes(str) {
  let count = {}
  let sortedWords = sortAscend(str);

  if (str.length === 0) return count;

  for (let idx = 0; idx < sortedWords.length; idx++) {
    let length = sortedWords[idx].length;
    if (count.hasOwnProperty(length)) {
      count[length] += 1;
    } else {
      count[length] = 1;
    }
  }
  p(count);
}

// -------------------
function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');        