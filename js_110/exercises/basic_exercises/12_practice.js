// 9. Given the following data structure, return a new array with the same
// // structure, but with the values in each subarray ordered -- alphabetically
// or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(arr2 => {
  if (typeof arr2[0] === 'string') {
    arr.sort();
  } else {
    arr.sort((a, b) => a - b);
  }
});

console.log(arr);