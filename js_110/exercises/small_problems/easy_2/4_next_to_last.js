// The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.
// You may assume that the input String will always contain at least two words.

// convert the string into an array of words
// Remove the next to last element, return it as a string

const penultimate = (str) => {
  return str.split(' ').splice(-2, 1).join();
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true