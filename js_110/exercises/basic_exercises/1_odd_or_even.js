// Time: [8:50 - 9:00]
// Write a function that returns a  array contain 'even' and 'odd' for each corresponding 

let arr = [1, 2, 3, 4, 5];

// Define a function with one parameter: arr of numbers
// - Initialize an empty `result` array that will contain the result
// - Iterate over numbers in arr using index and arr.length
//   - If current number is evenly divisible by 2
//    - Push the stirng 'even' to `result` array
//   - If it is not even/or is odd
//    - Push the string 'odd' to `result` array 
// - After iteration
// - Return `result`

function evenOrOdd(numsArr) {
  let result = [];

  for (let idx = 0; idx < numsArr.length; idx++) {
    let currNum = numsArr[idx];

    if (currNum % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }

  return result;
}

// Another solution
const evensOrOdds = (nums) => {
  return nums.map(num => num % 2 === 0 ? 'even' : 'odd');
}
console.log(evensOrOdds(arr)); // ['odd', 'even', 'odd', 'even', 'odd']
console.log(evenOrOdd(arr)); // ['odd', 'even', 'odd', 'even', 'odd']
