// Find Missing Numbers
// Write a function that takes a sorted Array of integers as an argument, and returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.


/*
In: a sorted array of both negative and postive integers
Out: a sorted array of missing numbers from the input array

- find the missing numbers between the first and last numbers

A:
- Initialize an empty missingNums array
- Get the first number and last number
- Iterate over the input array; first number + 1
 - If the current number doesn't exist in the input array:
   - Append it to the missingNums array
- Return the missingNums array
*/
// Examples:

let p = console.log;

function missing(numbers) {
  let missingNums = [];
  let first = numbers[0];
  let end = numbers[numbers.length - 1];

  for (let start = first + 1; start < end; start += 1) {
    if (!(numbers.includes(start))) {
      missingNums.push(start);
    }
  }

  return missingNums;
}


p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6])); 