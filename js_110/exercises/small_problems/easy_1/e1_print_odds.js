// es1. 2: Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number
//  on a separate line.
const p = console.log;

function printOddNums(limit = 100) {
  let num = 1;

  do {
    p(num);
    num += 2;
  }
  while (limit > num);
}

// Using for loop
for (let i = 1; i < 100; i += 2) {
  p(i);
}

// create a range from 0 to 99 and filter out the even numbers
let odds = [...new Array(100).keys()].filter(num => num % 2 !== 0);

// log every number in the array
odds.forEach(num => {
  console.log(num);
});

printOddNums(44);
