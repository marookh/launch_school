// Time: [10:26 - 10: 40]
// Combining Arrays
// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
/*
P:
- function takes two arrays
- returns one array comprised of the unique values in both arrays
- there should be no dubplication in the returned array
- even if there are dublication in the input  arrays
- arguments will always be arrays

D:
Input: two arrasy, perhaps with number elements
OUtput: combined array of unique values
Inter: n/a

A: High level
- Merge both input arrays in one array
- Iterate through one array, and filter out elements into unique values
- Return the unique values array

A: Steps
- Initialize `mergedArr` array, Concatenate both arrays into `mergedArr`

- Initialize an empty `unions` array

- Loop through `mergedArr` until `idx` is less than `mergedArr.length`
 - If `unions` does not include the current element 
  - Push current element to `unions`

Return `unions`
*/

function union(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  let unions = [];

  mergedArr.forEach((val) => {
    if (!unions.includes(val)) {
      unions.push(val);
    }
  });
  return unions;
}

// Example:

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
