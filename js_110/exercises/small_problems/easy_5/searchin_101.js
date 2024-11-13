// Easy 4. 1.Searching 101
// Write a program that solicits six numbers from the user and logs a message
//  that describes whether the sixth number appears among the first five numbers.

// P:
// Ask six numbers from the use
// Check whether the last number appears in the first five numbers
// if does
//  - log a message describing that the last number appears
// if does not
// - log a message describing that the last number doesn't appear

/**
Explicit:
 - ask for 6 numbers each after another
 - log a message confirming the existence or non-existence of the number

Implicit:
- only determine the last number
- numbers should be positive integers

D:
Input:
- number
- string (message)

A:
- Import readline module
- Declare an empty array called `userNumbers`
- Declare a counter to 1;

- loop through counter uless counter is less than or equal to 6;
 - if counter % 10 is 1
   - Set 'userNum' to the user input + 'st'
 - else if it's 2
   - Set 'userNum' to the user input + 'nd'
 - else if it's 3
   - Set 'userNum' to the user input + 'rd'
 - else 
   - Set 'userNum' to the user input + 'st'



- Push each `userNum` to `userNumbers`
   
- if `includes` is true
  - Join the numbers in `userNumbers` together and update `userNumbers` to it
  - print `The number ${userNum} appears in ${userNumbers}`
- else
  - Join the numbers in `userNumbers` together and update `userNumbers` to it
  - print `The number ${userNum} appears in ${userNumbers}`
  

=========
Given a number and an array, write a function called `includes`
Input: number, array
output: boolean

- If `array`  includes the `number` 
   - return true
- else 
   - return false
 */

const readline = require('readline-sync');

function suffix(num) {
  switch(num % 10) {
    case 1: return 'st';
    case 2: return  'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function includes(arr, num) {
  return arr.includes(num);
}

let userNumbers = [];
let num;
for (let count = 1; count <= 6; count++) {
  num = readline.question(`Enter the ${count + (suffix(count))} number: `);
  userNumbers.push(num);
}

if (includes(userNumbers, num)) {
  userNumbers.pop();
  console.log(`The number ${num} appears in ${userNumbers.join()}`);
} else {
  userNumbers.pop();
  console.log(`The number ${num} appears in ${userNumbers.join()}`);
}




// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.