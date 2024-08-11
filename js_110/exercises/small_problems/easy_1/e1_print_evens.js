// es1. 3: Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.
const p = console.log;

function printOddNums(limit = 100) {
  let num = 0;

  do {
    p(num);
    num += 2;
  }
  while (limit >= num);
}

// Effecient solution
let evenNums = [...new Array(100).keys()].filter(num => num % 2 === 0);
evenNums.forEach(num => p(num));

printOddNums(44);