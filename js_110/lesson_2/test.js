//  Algorithm

// 1. Create an empty `rows` array to store all the rows 
// 2. Create a `row` array and add it to the overall `rows` array 
// 3. Repeat the step 2 until all the necessary rows have been created 
//     1. All the rows have been created when the length of `rows` array is equal to the input
// 4. Sum the final row
// 5. Return the sum


function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startingInteger = 2;

  for (let rowLength = 1; rowLength <= rowNumber; rowLength += 1) {

    let row = createRow(startingInteger, rowLength);
    rows.push(row);

    let lastInteger = row[row.length - 1];
    startingInteger = lastInteger + 2;
    
  }
  
  let finalRow = rows[rows.length - 1];
  return finalRow.reduce((a, b) => a + b, 0); 
}



function createRow(startingInteger, rowLength) {
  const row = [];
  let currentInteger = startingInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;
}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68















// Algorithm:
//     1. Create an empty `row` to contain integers
//     2. Add the starting integer 
//     3. Increment the starting integer by two to get the next even integer
//     4. Repeat steps 2 and 3 until the array has reached the desired length
//     5. Return the `row`

// start the loop
//  - add `startingInteger` to `row`
//  - increment `startingInteger` by 2
//  - break out of the loop if length of row is equal to `rowLength`



// console.log(row(2, 1)); // [2]
// console.log(row(4, 2)); // [4, 6]
// console.log(row(8, 3)); // [8, 19, 12]

