// Time: [9:22 - 9:34]
// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array.  


// Func: findIntegers
// In: array
// Out: array of integers

function findIntegers(arr) {
  let integers = [];
  for (const val of arr) {
    if (Number.isInteger(val)) {
      integers.push(val);
    }
  }
  return integers;
}

let values = [1, 2, 4, 5, true, false, undefined];
let integers = values.filter((val) => Number.isInteger(val));
console.log(integers); // [1, 2, 4, 5]
console.log(findIntegers(values)); // [1, 2, 4, 5]