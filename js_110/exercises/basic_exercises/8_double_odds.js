// Time: [5:41 - 5:]
// Question 12: Try coding a solution that doubles the numbers that have odd indices:   

// Initialize an empty doubles array
// Iterate through numbers
// - If the index of the current number is odd
//  - Multiply it by 2 and append it to `doubles` arr
// End iteration
// return doubles


let arr = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

let doubles = arr.map((num, idx) => idx % 2 === 1 ? num * 2 : num);

console.log(doubles); // [1,8, 3,14,6, 10,2, 2]