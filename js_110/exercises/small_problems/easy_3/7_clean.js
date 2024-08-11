// Time: [9: 12  - 9: ]
// Clean up the words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// P
// - replace all non-alphabetic chacracters with spaces
// - if one/more non-alpha characters occur in a row,
//   - replace them by one space

// D:
// Input: string
// Output: string with special characters replaced by space
// Inter: an array of only alphabetic characters

// A:
// Helper func: lasChar
// In: str
// Out: last character
// Return str[str.length -1]


// Initialize an empty string `result`
// Loop through characters in string
// - If character is lowercase OR uppercase letter
//  - Append it to `result`
// - Else if index is 0 OR the last character in `result` is not ' '
//  - Append a space(' ') to `result`
// - Return `result`



function cleanUp(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];

    if (char >= 'a' && char <= 'z') { // is character a lowecase letter?
      result += char; // concatenate it with result
    } else if (idx === 0 || lastChar(result) !== ' ') { // result is not updated 
      // Or the last character is not a space, meaning there was not punctuation
      // before this iteration?
      result += ' '; // Concatenate result with a space
    }
  }
  return result;
}

function lastChar(str) {
  return str[str.length - 1];
}

// ============================= LS solutoin
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// A shorter solution:

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

// Discussion
// This solution uses a for loop to create a cleanText string by checking each
// character. If it's not a letter, a space is added; if it is, the letter is appended. 

// To avoid consecutive spaces from non-letter characters, it checks if the last
// character in cleanText is a space before adding another. The idx === 0 condition
//  ensures a space is added if the first character isn't alphabetic.

// Shorter solution explanation:

// Regular expressions are powerful for text manipulation, even if they can reduce
//  code clarity. Here, they efficiently handle the task. The method replaces
//   non-alphabetic characters with spaces and then removes duplicate spaces.

// The regex /[^a-z]/gi matches any non-letter character, with /i making it case
//  insensitive and /g applying it globally. The replace() method substitutes all
//   matching characters in the text.

// Example:
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
