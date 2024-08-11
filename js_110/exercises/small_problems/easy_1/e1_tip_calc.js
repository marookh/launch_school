// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip and
// the total amount of the bill to the console. You can ignore input validation
// and assume that the user will enter numbers.

// Get the bill amount from the user
// Get the tip rate
// Compute the tip
// Print both the tip and total bill amount
// Ignore input validation, assuming the user will enter numbers
// Formula: Tip Amount=(Tip Rate×Total Bill Amount)÷100
// Total bill:Total Amount=Total Bill Amount+Tip Amount

const rlSync = require('readline-sync');
const prompt = (msg) => console.log(msg);

prompt('What is the bill amount:');
const bill = rlSync.questionFloat();

prompt('What is the tip percentage:');
const tipPercentage = rlSync.questionFloat();

const tip = (tipPercentage * bill) / 100;
const totalBill = tip + bill;

prompt(`The tip is $${tip.toFixed(2)}`);
prompt(`The total is $${totalBill.toFixed(2)}`);

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00