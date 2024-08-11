// Time: [3: 22 - 3: 37]
// Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints
//  the results of the following operations on those two numbers: addition,
//  subtraction, product, quotient, remainder, and power. Do not worry about
//  validating the input.

// P
/*
get two positive integers from the user
Perfome these operations (+, -, *, /, %, **)
Print their results as show below

A:
Import rlSync module
Define the promp function
Initialize `num1` to the first number user inputs
Initialize `num2` to the second number user inputs

Print the following:

// ==> `${num1} + ${num2} = ${num1 + num2}`
// ==> `${num1} - ${num2} = ${num1 - num2}`
// ==> `${num1} * ${num2} = ${num1 * num2}`
// ==> `${num1} / ${num2} = ${num1 / num2}`
// ==> `${num1} % ${num2} = ${num1 % num2}`
// ==> `${num1} ** ${num2} = ${num1n ** num2n}`
*/

const rlSync = require('readline-sync');
const prompt = (msg) => console.log(`==> ${msg}`);
prompt(`Enter the first number:`);
let num1 = rlSync.questionFloat();

prompt(`Enter the second number:`);
let num2 = rlSync.questionFloat();

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);

// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23