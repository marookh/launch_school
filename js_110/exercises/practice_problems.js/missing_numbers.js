// We have a list having unique values from 1 to n, but unordered with an unknown amount of missing values.
// We have to output the missing numbers sorted by value.
// The number 1 should be in the input array, if it's not present in the input array,
// it should be included in the results. See the example below.

// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]

// MM: Given an array of unique values from 1 up n number. 
// Return an array of missing numbers in ascending order. 

// R:
// - We should have 1 in the output array
// - If 1 is included in the intput array, don't include it in the output array


// D:
// Input: an array of unique number starting from 1 up the n, but some #s are missing
// Output: A new array of missing numbers
// Inter: An array of numbers from 1 - n

// High level:
// Given an array of unique numbers, 
// find missing numbers from it and return it in the form of an array.

// A:
// Helper Func: getFullArr
// In: array of numbers
// Out: array with missing numbers
// Find the largest number in the in:array
// Create an array `numbers` starting from 1 up to largest number in the in:array

// Iterate through 1 - the lasgest number
// - Append each number to `numbers` 
// When the looping is done

// Return `numbers`

// Main Func: missNumsFinder
// Create an array `numbers` to the returned array from `getFullArr`
// Create an empty `missingNums` array
// Iterate through `numbers`
// - if the current number is not included in the `numbers` array
//   - Append the current number to `missingNum` array
// Once the iteration is done
// return `missingNum`


function getFullArr(arr) {
  let numbers = [];
  let maxNum = Math.max(...arr);

  for (let num = 1; num <= maxNum; num++) {
    numbers.push(num);
  }

  return numbers;
}

function missNumsFinder(uniqueNums) {
  let missingNums = [];
  let allNumbers = getFullArr(uniqueNums);

  allNumbers.forEach(num => {
    if (!(uniqueNums.includes(num))) {
      missingNums.push(num);
    }
  });

  return missingNums;
}

console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 14, 5, 12])); // [1, 2, 4, 9, 13]
console.log(missNumsFinder([2, 3, 1, 9, 4, 5, 6, 10, 7])); // [8]
console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7])); //[1]
console.log(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5])); // [2, 3, 4, 8]
console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12])); // [2, 4, 9, 13]
console.log(missNumsFinder([9, 10, 7, 2, 11, 8, 1, 17, 6, 16, 18, 19, 15, 3, 13])); //[4, 5, 12, 14]
