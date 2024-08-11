// What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

/*
Return a string begining with centrue number
And ends with `st', 'nd', 'rd', or 'th' as needed
New centuries begin in years starting with 01
1901 - 2000 comprise the 20th century
Number can be bigg or small

D:
Input: year positive integer
Ouput: centry number in ordinal

A:Given a number (year), write a function called `century`

- Set a variable called `century` 
  to the remainder integer of `year` / 100

- return `century` concatenated with the returned string of `ordinalSuffix`
=======================
Helper Function
Given a number, write a function `ordinalSuffix`
if the remainder of number %  100 is (11, 12, 13)
  - return 'th'

 - if the remainder of number % 10 is 1
   - return 'st'
 - else if the remainder of number % 10 is 2
   - return 'nd'
 - else if the remainder of number % 10 is 3
   - return 'rd'
 - else 
   - return 'th'
*/
function ordinalSuffix(number) {
  if ([11, 12, 13].includes(number % 100)) return 'th';
  
  switch(number % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function century(year) {
  let century = Math.ceil(year / 100);

  return `${century}${ordinalSuffix(century)}`;
}


// Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
