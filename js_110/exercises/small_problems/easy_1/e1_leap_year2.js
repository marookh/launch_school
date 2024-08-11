let p = console.log;
// Leap Years (Part 2)

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

// Examples:



function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
// Examples:
p(isLeapYear(2016));      // true
p(isLeapYear(2015));      // false
p(isLeapYear(2100));      // false
p(isLeapYear(2400));      // true
p(isLeapYear(240000));    // true
p(isLeapYear(240001));    // false
p(isLeapYear(2000));      // true
p(isLeapYear(1900));      // false
p(isLeapYear(1752));      // true
p(isLeapYear(1700));      // true
p(isLeapYear(1));         // false
p(isLeapYear(100));       // true
p(isLeapYear(400));       // true