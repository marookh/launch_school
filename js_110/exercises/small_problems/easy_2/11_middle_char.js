// Time: [6: 4 - ]
// Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

/*
P: 
given non-emtpy string
return middle character
if length of string is odd, return one character
if length of string is even, return two characters
if string is only on character, return as is
if the middle character is space, return it

Data:
input: string of words
Output: middle character(s)
*/

function centerOf(str) {
  let length = str.length;
  if (length === 1) return str;

  if (length % 2 === 1) {
    let centerIndex = (length -1) / 2;
    return str.substring(centerIndex, centerIndex + 1);
  } else {
    let leftIndex = (length / 2) - 1;
    return str.substring(leftIndex, leftIndex + 2);
  }
}

// LS solution
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = (string.length - 1) / 2;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

// Examples:

console.log(
centerOf('I Love JavaScript'), // "a"
centerOf('Launch School'),     // " "
centerOf('Launch'),            // "un"
centerOf('Launchschool'),      // "hs"
centerOf('x'),                 // "x"
)