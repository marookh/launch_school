// Your objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.

// P:
// Rules:
// - Assuming that there are no dublicate numbers
// - pairs of numbers should have difference of 2
// - Assuming that if no pair is found, return an empty array
// - Sort the array in ascending order

// D:
// In: An array of numbers
// Out: A nested array of pairs with a difference of 2
// Int: n/a

// A:
// Given an array, find paris that have a difference of 2 by looping through the input
// array twice. Create the pairs array in a nested array and return it. 

// Instructions:
// Func: differenceOfTwo with a param: nums
// Create an empty `pairs` array
// Create a `sorted` array to  soritng `num` in ascending order

// Loop through `nums` starting from 0 up to the nums.length 
//  - Create `currNum1` to the current number
//  - Loop through `nums` starting from 1 up to nums.length 
//    - Create `currNum2` to the curent number in this loop
//    - If `currNum2` - `currNum1` === 2
//    - Append `currNum1` and `currNum2` to `pairs` wrapped in brakets
//  - When the nested loop ended
// When the outer loop ended
// Return `pairs`


function differenceOfTwo(nums) {
  let pairs = [];
  let sorted = nums.sort((a, b) => a - b); 

  for (let idx = 0; idx < sorted.length; idx++) {
    let currNum1 = sorted[idx];
    for (let idx = 1; idx < sorted.length; idx++) {
      let currNum2 = sorted[idx];
      
      if (currNum2 - currNum1 === 2) {
        pairs.push([currNum1, currNum2]);
      }
    }
  }

  return pairs;
}

console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []