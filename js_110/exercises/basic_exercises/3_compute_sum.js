// Time: [9: 13 - 9: 20]
// Use reduce to compute the sum of the squares of all of the numbers in an array: 


// Initialize an empty `squares` array
// Iterate through numbers in arr using map
// - Push the square of each number to `squares`
// End iteration

// Initialize `sum` variable to 0
// Iterate through numbers in `squares`
// - Update `sum` by adding the current number to its value
// End iteration
// Return `sum`

function sumAllSquares(numbers) {
  return numbers.reduce((sum, num) => sum + num * num);
}

// Clear way
function sumAllSquares(numbers) {
  return numbers.map(num => num * num)
                .reduce((sum, num) => sum + num);
}


// Using two functions
const getSquare = (numbers) => numbers.map(num => num ** 2);

const computeSumOfSquares = (nums) => {
  return getSquare(nums).reduce((acc, num) => acc += num);
}

console.log(computeSumOfSquares([1, 2, 4, 5])); // 46
console.log(computeSumOfSquares([4, 2, 9])); // 101
let arr = [1, 2, 3, 4, 5, 6, 7, 9, 8];
console.log(sumAllSquares(arr)); // 285