// 6.
// A double number is an even-length number whose left-side digits are exactly the same as
// its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
// whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, 
// unless the argument is a double number; otherwise, return the double number as-is.

/*
P:
Given a number, write a function to return the multiplied version of the number.
If it's a double number, return it as-is

Explicit:
- return a number mulitplied by 2
- if the number is double, return it without multiplying

Implicit:
- number must be non-zero, positive integer
- number can be odd

D: 
Input:
- number
Output:
- number

A:
Given an `integer`, write a function called  `twice`
- Convert the number to string, assing it to a variable called 'numToString'
- Set a varaible 'length' to the length of `numToString`
- Set a variable `two` to 2

- if the `length` is add
  - return `integer` * `two`

- if the `length` is even
 - Set a variable `leftSide` to the left of `numToString`
 - Set a varaible `rightSide` to the right of `numToString`

   - if length of `leftSide` is not equal to the length of `rightSide` 
     - return `integer` * `two`


return `integer1
*/




// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676
