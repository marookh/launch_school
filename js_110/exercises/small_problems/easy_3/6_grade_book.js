const p = console.log;
// Write a function that determines the mean (average) of the three averages passed to it, and returns the letter associated with that grade.

// Numerical average letter grade list:

// 90 <= average <= 100: 'A'
// 80 <= average < 90: 'B'
// 70 <= average < 80: 'C'
// 60 <= average < 70: 'D'
// 0 <= average < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// given 3 numbers, add all three numbers and get the `sum`
// - Divide the sum by the number of numbers (3) and get the `average`
// - If average >= 90 && average <= 100
//  - return 'A'
// - If average >= 80  && average < 90
//  - Return 'B'
// - If average >= 70 && average < 80
//  - Return 'C'
// - If average >= 60 && average < 70
// - Return 'D'
// - Else, return 'F'

function getGrade(num1, num2, num3) {
  let average = Math.floor((num1 + num2 + num3) / 3);
  p(average);
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80  && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Using object


const GRADE_MAP = {
  A: (grade) => grade >= 90 && grade <= 100,
  B: (grade) => grade >= 80 && grade < 90,
  C: (grade) => grade >= 70 && grade < 80,
  D: (grade) => grade >= 60 && grade < 70,
  F: (grade) => grade >= 0 && grade < 60,
};

function getGrade(grade1, grade2, grade3) {
  let mean = (grade1 + grade2 + grade3) / 3;
  for (let key in GRADE_MAP) {
    if (GRADE_MAP[key](mean)) return key;
  }
}

// Examples:

p(getGrade(95, 90, 93));    // "A"
p(getGrade(50, 50, 95));    // "D"