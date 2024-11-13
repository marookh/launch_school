// break.js
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger; // after executing inspect, run 'c' command
  counter++;
}

