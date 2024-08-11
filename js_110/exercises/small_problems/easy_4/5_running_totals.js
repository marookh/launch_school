// t: [2: 55 - 3: 3]
// Running Totals
// Write a function that takes an array of numbers and returns an array with the
// same number of elements, but with each element's value being the running total
// from the original array.

/*
P:
In: array of numbers
Out: an array with the running total of the elements in the original array
Int: n/a

A:
- Define a function runningTotal with one parameter `nums`
- Initialize an empty array `totals`
- Initialize a `runningTotal` to the first number in `nums`

- If `nums` is empty, return `totals`
- Loop through remaining numbers in `nums` up to the length of `nums`
 - Push `runningTotal` to `totals` array
 - Increment `runningTotals` by the current number
- AFter looping through all numbers

- Return `totals`
*/
const p = console.log;
// function runningTotal(nums) {
//   let copiedNums = nums.slice()
//   let totals = [];
//   let runningTotal = copiedNums.shift();
//   let idx = 0;

//   if (nums.length === 0) return totals;

//   while (idx <= copiedNums.length) {
//     totals.push(runningTotal);
//     runningTotal += copiedNums[idx];
//     idx++;
//   }
//   return totals;
// }
// =============
function runningTotal(arr) {
  let sum = 0;
  return arr.map(num => sum += num);
}
// ==============
function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};

// Examples:
p(runningTotal([2, 5, 13]));             // [2, 7, 20]
p(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
p(runningTotal([3]));                    // [3]
p(runningTotal([]));                     // []