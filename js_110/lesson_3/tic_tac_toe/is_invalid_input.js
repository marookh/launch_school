// Write a function that determines the invalidity of the input when asking to 
// play the game again or not. If user enters something other than some variation of
// 'yes' or 'no', the function should return true, false otherwise.

function isInvalid(ans) {
  ans = ans.toLowerCase();
  const yeses = ['yes', 'y', 'yep'];
  const no = ['no', 'nope', 'n'];

  if (yeses.includes(ans) || no.includes(ans)) {
    return false;
  }
  return true;
}

console.log(isInvalid('yes')); // false
console.log(isInvalid('y0s')); // true
console.log(isInvalid('yellow')); // true
console.log(isInvalid('Y')); // false
console.log(isInvalid('hello')); // true