// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

/*
Rules
- compute sum of all #s 1-input number
- the input # is inclusive that are multiples of 3 or 5
- if 20, result: 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)
- Assume the # is integer greater than 1
- Number could be n amount

Data:
in: integer greater than 1
Out: sum of all multiples of 3 and 5 inclusive
inter: an array of multiples of 3 or 5

A:
- Initialize an empty `multiplesOf3Or5` array
- Loop through numbers from `num` = 1 up to  `targetNum`
 - If `num` is evenly divisible by 3 OR 5
  - Push `num` to `multiplesOf3Or5`
 - Increment `num` by 1

- Iterate through `multiplesOf3Or5` array, sum up all numbers
- return the sum
*/

const multisum = (targetNum) => {
  const mulitplesOf3Or5 = [];

  for (let num = 1; num <= targetNum; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      mulitplesOf3Or5.push(num);
    }
  }
  
  return mulitplesOf3Or5.reduce((sum, num) => sum + num);
}

// LS solution
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
// Examples:

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
