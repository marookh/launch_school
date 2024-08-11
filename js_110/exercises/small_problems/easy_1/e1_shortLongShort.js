// Short Long Short
// Write a function that takes two strings as arguments, determines the length of
// the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Rules:
// - Input: two strings
// - Output: result of concatenating short+long+short string
// - if one string is empty, do the same operation

// Algorithm:
// Define a function shortLongShort with two parameters: str1, str2
// Initialize an empty string called `result`
// If str1.length < str2.length
//  Reassign `result` to concatenating `str1` to `str1` and `str1`
// If str1.length > str2.length
//  Reassign `result` to concatenating `str2` to `str1` and `str2`
// Return `result`

function shortLongShort(str1, str2) {
  let result = '';

  if (str1.length < str2.length) {
    result += str1.concat(str2, str1);
  } else {
    result += str2.concat(str1, str2);
  }
  console.log(result);

}

// Using destructuring assignment to get the strings in short/long order:

function shortLongShort(str1, str2) {
  [str1, str2] = [str1, str2].sort((a, b) => a.length - b.length);
  return `${str1}${str2}${str1}`;
}

// another solution
function shortLongShort(str1, str2) {
  let arr = [str1, str2].sort((a,b) => a.length - b.length);
  arr.push(arr[0]);

  return arr.join('');
}


// Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"