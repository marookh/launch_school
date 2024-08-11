// Greeting a user
// Write a program that will ask for user's name. The program will then greet
//  user. If the user writes "name!" then the computer yells back to the user.

let rlSync = require('readline-sync');
let name = rlSync.question(`What is your name? `);
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// Examples

// What is your name? Bob
// Hello Bob.
// Copy Code
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?