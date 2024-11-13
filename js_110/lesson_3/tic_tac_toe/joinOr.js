// Write a function named joinOr that produces the following results:
// Use this function in the game when prompting the user to mark a square.

/*
Write a function that takes an array of numbers and returns the numbers separated
by a dilemiter.The last number should be separated by a joiner word. 
The defualt delimiter should be a comma and the delimeter word should be "or".

Rules:
 - Default delimiter is (,) and word is "or"
 - Assume if array has one element, return the element itself
 - Assume if array has two numbers as elements, return the two separated by a
   word delimiter
 - Assume if the array is empty, return an empty string
 - Assume if a character delimiter or word is provided, use those instead


Data:
The input array of numbers
An array that holds numbers
The string list of numbers separated by the delimiter

Algorithm:
- Create a function `joinOr` with three param: arr, delim = ', ', wDelim = ' or '
  - Create a `list` var: assign it to ""

  - if `arr` is empty, return `list`
  - if `arr`.length is 1, convert the number to string, assign it to `list`
  - if `arr`.legnth is 2, convert the numbers to str seprated by `wDelim`, assign it to `list`
  
  - Else, Iterate through `arr`
    - Create `currNum` var: assign it to current number in `arr`
    - If the index in of the current number is !== arr.length - 1
     - Assign `list` to `currNum` + `delim`
    - else, assign `list` to  `wDelim` + `currNum`
  - End the iteration

  - return `list`
*/

function joinOr(arr, delim = ', ', wDelim = 'or') {
  let list = "";

  if (arr.length === 1) {
    list = arr.join();
  } else if (arr.length === 2) {
    list = arr.join(` ${wDelim} `);
  } else {
    for (let idx = 0; idx < arr.length; idx++) {
      let currNum = arr[idx];
      
      if (idx !== arr.length - 1) {
        list += currNum + delim;
      } else {
        list += `${wDelim} ${currNum}`;
      }
    }
  } 

  console.log(list); 
}


joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3, 8, 5, 9]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"