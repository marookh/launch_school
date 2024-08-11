
// e.1.5: How big is the room?
// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt
//  method to collect user input.


// Instructions:
// - ask user to enter length and width of room in meters
// - log room area in both sqr meters and sqr feet
// - 1 square meter == 10.7639 square feet

const rlSync = require('readline-sync');
const prompt = rlSync.prompt;
const log = (msg) => console.log(msg);

log('Enter the length of the room in meters: ');
let length = Number(prompt());

log('Enter the width of the room in meters: ');
let width = Number(prompt());

let oneFeet = 10.7639;
let areaInMeter = length * width;
let ftSqr = areaInMeter * oneFeet;
let fixed = areaInMeter.toFixed(2);
let fixedFeet = ftSqr.toFixed(2);
log(
  `The area of room is ${fixed} square meters, and (${fixedFeet} square feet).`
);


// similar approach
const readLine = require('readline-sync');
const SQMT_TO_SQFT = 10.7639;

console.log('Enter the length of the room in meters:');
let length2 = readLine.questionFloat();

console.log('Enter the width of the room in meters:');
let width2 = readLine.questionFloat();

let squareMeters = (width2 * length2).toFixed(2);
let squareFeet = (squareMeters * SQMT_TO_SQFT).toFixed(2);

console.log(
  `The area of room: ${squareMeters} square meters (${squareFeet} square feet)`
);

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).
