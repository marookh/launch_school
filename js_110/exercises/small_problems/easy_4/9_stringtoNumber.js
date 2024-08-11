// time: [6: 43 - 6: ]
// Easy4: 9. Convert a String to a Number

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

/*
P:
- write function taking string of digits
- returns number as integer
- you may not use any methods (String() Number())
- Do it old-fashioned way
- Calculate ther result by analyzing the chars
- don't worry about leading - or +
- assume all characters will be numeric

D:
Input: a string digit
Output: number of that version
Inter: object of number (0-9)
or array of numbers

A:
Create an object of numbers as properties.
Analyze each character using the keys in object.
Calculate the final number using the values in object
Return the resutling number

Steps:
 - Create a `nums` object initialize to numbers (0-9)
 - Create an empty `result` array

 - Iterate though chars in input string
   - Push the value of current key in `nums` to `result`
 - After iteration ends

 Initialize `value` to 0
 Iterate through `result` array
 - Reassign `value` to multiplying `value` to the power of 10 and adding the result to current number
 After ending the iteration

 Return value
*/

function stringToInteger(str) {
  let nums = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

  let result = []

  for (let char of str) {
    result.push(nums[char]);
  }
let value = 0;
result.forEach(num => {
  value = (10 * value) + num;
})

return value;
}


console.log(stringToInteger("4321"))//  === 4321); // logs true
console.log(stringToInteger("570"))//  === 570); // logs true