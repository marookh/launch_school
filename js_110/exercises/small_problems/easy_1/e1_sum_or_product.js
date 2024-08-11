// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

// rules:
// Ask the user to enter an integer greater than 0
// Ask to determine the sum or product of all #s (1 - entered num) inclusive

// Data:
// Input: a non-zero, non-negative int
// Ouput: sum or product starting at 1-entered inclusive
// Inter: n/a

// Algorithm:
// Helper func1: getSum
// In: targetNum
// Out: sum of consequetive #s - targetNum

// Instructions:
//  Initialize `sum` to 0
//  Loop through numbers starting at `iterator = 1` up the `targetNum`
//   - Unless `iterator` is less than or equal to `targetNum`
//    - Increment `sum` by `iterator`
// End the loop
// Return `sum`

// Helper Func2: getProduct
// In: targNum
// Out: product of consequetive #s - targNum

//  Initialize `product` to 1
//  Loop through numbers starting at `iterator = 1` up the `targetNum`
//   - Unless `iterator` is less than or equal to `targetNum`
//    - Multiply `product` by `iterator`
// End the loop
// Return `product`

// Initialize `rlSync` to the `readline-sync` module
// Initialize `targetNum` to the input first converted to number
// Initialize `choice` to either `s` for sum or `p` for product

// If `choice` is 's', 
   // get the sum of nums, initialize `sum` to it and print it
// If `choice` is 'p', 
//   get the product of num, initialize `product` to it and print it


const rlSync = require('readline-sync');

function getSum(targNum) {
  let sum = 0;
  for (let iterator = 1; iterator <= targNum; iterator++) {
    sum += iterator;
  }
  return sum;
}

function getProduct(targNum) {
  let prod = 1;
  for (let iterator = 1; iterator <= targNum; iterator++) {
    prod *= iterator;
  }

  return prod;
}

const targetNum = rlSync.questionFloat(`Enter an inter greater than 0: `);
const choice = rlSync.question(
  `Enter 's' to compute the sum, or 'p' to computer the product: `
);

if (choice === 's') {
  const sum = getSum(targetNum);
  console.log(`The sum of the integers between 1 and ${targetNum} is ${sum}.`);
} else if (choice === 'p') {
  const product = getProduct(targetNum);
  console.log(
    `The product of the integers betweeen 1 and ${targetNum} is ${product}.`
  );
} else {
    console.log(`Oops, unknown operation.`);
}
// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.
