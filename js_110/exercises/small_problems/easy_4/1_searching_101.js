// Searching 101
// Write a program that solicits six numbers from the user and logs a message that 
// describes whether the sixth number appears among the first five numbers.

// P
/*
- Get 5 numbers from the used each separately 
- Get the last (6th) number 
- If the last number exist in the first five numbers
 - Log a message, describing that the number exists in arr
- Else, log a message, describing the number does not exist in the `arr`

D:
Input: numbers
Ouput: message
Inter: an array of five numbers

A:
- Initialize an empty `fiveNums` array that will hold the five first numbers
- Get the numbers from 1-5th separately, and append each number to `fiveNums`
- Initialize `lastNum`, Get the sixth number assign `lastNum` to it
- If `lastNum` exist in `fiveNums`
 - Print `The number ${`lastNum`} exist in ${fiveNums.join()}
- If `lastNum` does not exist in `fiveNums`
 - Print `The number ${`lastNum`} exist in ${fiveNums.join()}
*/

const rlSync = require('readline-sync');
const p = (msg) => console.log(msg);
let fiveNums = []

fiveNums.push(rlSync.questionFloat(`Enter the 1th number: `));
fiveNums.push(rlSync.questionFloat(`Enter the 2nd number: `));
fiveNums.push(rlSync.questionFloat(`Enter the 3th number: `));
fiveNums.push(rlSync.questionFloat(`Enter the 4th number: `));
fiveNums.push(rlSync.questionFloat(`Enter the 5th number: `));
let lastNum = rlSync.questionFloat(`Enter the last number: `);

if (fiveNums.includes(lastNum)) {
  p(`The number ${lastNum} exist in ${fiveNums.join()}.`);
} else {
  p(`The number ${lastNum} does not exist in ${fiveNums.join()}.`);
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
