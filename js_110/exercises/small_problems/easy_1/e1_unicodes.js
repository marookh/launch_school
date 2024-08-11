// UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)


/*
Rules:
 - return unis of input string
 - it's the sum of every character in str
 - You may use charCodeAt()
 - Assume that space is also counted
 - Assume the function is case-insensitive
 - Function should handle non-ASCII characters

A:
- Define a function utf16Value with one parameter `str`
- Initialize `chars` to the array version of `str`
- Initialize an empty `uniValues` array 

- If `str` is empty, return 0

- Loop through `chars` 
  - get the unicode value of each character
  - Push the unicode value to `uniValues`
- End looping through `chars`

- Loop through code points in `uniValues`, Sum up all the values

- Return the `sum`

*/
const p = console.log;

function utf16Value(str) {
  if (str.length === 0) return 0;

  return Array.from(str)
              .map(char => char.charCodeAt())
              .reduce((sum, val)  => sum + val);
}

// Another solution
function utf16Value(str) {
  let sum = 0; // takes care of empty string and starting value to be added to later on.

  for (let char of str) {
    sum += char.charCodeAt();
  }

  return sum;
}


p(utf16Value('Four score'));         // 984
p(utf16Value('Launch School'));      // 1251
p(utf16Value('a'));                  // 97
p(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
p(utf16Value(OMEGA));                  // 937
p(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811