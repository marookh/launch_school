// Time: [8:4 - 8: 10]
// Odd Lists
// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// p:
// - return a list of values  that are in the 1st, 3rth, 5th, and so on positon in the given array
// - Array can have string, or number elements. 
// - It can alos be emtpy, return empty array

// Data:
// In: array of values
// Ouput: array of odd indexed values

// A:
// Declare an empty array called `oddities`
// Loop through values in `list` 
// - If the index of current element is even
//  - Push that element to `oddities`
// End the looping process

// return `oddities`

// function oddities(list) {
//   return list.filter((val, idx) => idx % 2 === 0);
// }

const oddities = (list) => {
  let oddities = [];
  for (let idx = 0; idx < list.length; idx += 2) {
    oddities.push(list[idx]);
  }
  return oddities;
}

// Examples:



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []