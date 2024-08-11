// Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).


const multiply = (n1, n2) => n1 * n2;
const square = (num) => {
  return multiply(num, num);
}

// power
let power = function(num, exp) {
  return Array(exp).fill(num).reduce(multiply);
};
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true