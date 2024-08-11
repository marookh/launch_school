// After Midnight (Part 1)
// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your function should work with any
// integer input.
// You may not use javascript's Date class methods.

/*
P:
- time of day can be represented as number of minutes before or after midnight
- if positive, the time is after midnight
- if negative the time is before midnight
- return time of the day in 24h format, based on the given minute-based format 
- disregard daylight savings and standard time 

D:
- input: delta minutes
- Output: time of the day in 24h format as a string
- Inter n/a

A:
Helper: padZero
In: number
Output: string digit with zero
- Given a number, return num >= 0 && <= 9? `0${num}` : num
-----------------------------------
Helper: formatTime:
In: hour, minutes
Out: return `${padZero(hour)}:${padZero(minutes)}`
-----------------------------------
Main func: timeOfDay
- Write a function `timeOfDay` with one parameter `deltaMinutes`
  - Initialize `MUNUTES_PER_HOUR` to 60
  - Initialize `HOURS_PER_HOUR` to 24
  - Initialize `MINUTES_PER_DAY` TO `MINUTES_PER_HOUR` * `HOURS_PER_DAY`

  - if `deltaMinutes` is negative
   - reassign it to `deltaMinutes` % `MINUTES_PER_DAY` + `MINUTES_PER_DAY`
  - else, reassign `deltaMinuts` to `deltaMinutes` % `MINUTES_PER_DAY`

  Initialize `hour` to `deltaMinutes` / `HOURS_PER_DAY` rounded down
  Initialize `minutes` to `deltaMinutes` % `MINUTES_PER-HOUR`

  Return `hour` formatted as (hh:mm) in string 
*/

function padZero(num) {
  return num >= 0 && num <= 9? `0${num}` : String(num);
}

function formatTime(hour, minutes) {
  return `${padZero(hour)}:${padZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hour = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hour, minutes);
}
// Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.

