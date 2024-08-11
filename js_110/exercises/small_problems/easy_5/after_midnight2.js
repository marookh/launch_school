// After Midnight (Part 2)
// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is positive,
// the time is after midnight. If the number of minutes is negative, the time
// is before midnight.

// Write two functions that each take a time of day in 24 hour format,
// and return the number of minutes before and after midnight, respectively.
// Both functions should return a value in the range 0..1439.
// You may not use javascript's Date class methods.

/*
P: 
write two function that each take a time of day in 24 hour format
- return the number of minutes before and after midnight
- both function should return a value in 0...1439
- you may not use javascrpt's Date class methods
- the tests bellow should all log true
- disregard PST, and DST

D:
in :number of hours and minutes in string
Out: number of minutes both after and before midnight

A: 
Initialize constants `MIN_HOUR`, `MIN_DAY`, and `HOUR_DAY`
----------------
Write a function afterMidnight with one parameter `timeStr`
- Initilize an array of minutes and hours
- Split `timeStr` into a two-element array, convert each element to number
- assign the result to [hours, minutes]

- Multiply `hours` by `MIN_HOUR`, add the result to `minutes`
- To get 0 for 00:00 and 24:00, get the remainder of the result % MIN_DAY
- Return the computed result
---------------
Write a function `beforeMidnight` with one parameter `timeStr`
- Initialize `deltaMinutes`, Get the return value of `afterMidnight` subtract it
from `MIN_DAY`, assign it to `deltaMinutes`
- If `deltaMinutes` is equal to `MIN_DAY`
 - Reassign `deltaMinutes` to 0

Return `deltaMinutes`
*/
const MIN_HOUR = 60;
const HOUR_DAY = 24;
const MIN_DAY = MIN_HOUR * HOUR_DAY;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(num => Number(num));
  return ((hours * MIN_HOUR) + minutes) % MIN_DAY;

}

function beforeMidnight(timeStr) {
  let deltaMinutes = MIN_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MIN_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}
// Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.

