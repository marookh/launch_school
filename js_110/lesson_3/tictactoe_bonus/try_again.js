// Time: [11: 5 - 11: 40 ]
// Handling incorrect input
// TODO: work on this condition for "play again".

// Write a function that returns true if the argument is 'y', 'yes', or 'Y'. It should return false if the input string is the 'no', 'n' or 'N'. It should return false if the string argument is other than these letters.

// Func: playAgain
// Inp: a string (alphabet letters) or words
// Out: A boolean or an error message

// D:
// In: a string
// Out: boolean
// Int: An array ['y', 'yes', 'yep']
// Int: An array ['n', 'no', 'nope']

// A:
// List possible synonyms for the word 'yes'
// List possible synonyms for the word 'no'
// If the lowercase form of input string is included in the list of 'yes'
//  return true
// Else if the lowercase for of input string is included in the list of 'no'
//  return false
// Otherwise, return an error message, indecating the invalidity of the input

// C

function playAgain(answer) {
  answer = answer.toLowerCase();
  let yes = ['y', 'yes', 'yep'];
  let no = ['n', 'no', 'nope'];

  if (yes.includes(answer)) {
    return true;
  } else if (no.includes(answer)) {
    return false;
  } else {
    return 'Invalid input. Please type (y) or (n).';
  }
}

console.log(playAgain('y'));  // true
console.log(playAgain('Y')); // true
console.log(playAgain('Yes')); // true
console.log(playAgain('yes')); // true
console.log(playAgain('yellow')); // 'Invalid input. Please type y or n. 
console.log(playAgain('NO')); // false
console.log(playAgain('No')); // false
console.log(playAgain('n')); // false
console.log(playAgain('N')); // false
console.log(playAgain('3')); // 'Invalid input. Please type y or n.'
console.log(playAgain('Noooo')); // 'Invalid input. Please type y or n.'