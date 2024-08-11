// T: [2:02: 2:13]
// Right Triangles
// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.


/*
P;
function takes a positive n integer
logs right triangle whose sides each have n stars
Each of the 3 sides should have same number of stars as `n`
hypotenuse should have one end at the lower-left
and other end at the upper-right of traingle


D:
input: num
ouput: a right triangle made up of stars

A:
Start a for loop using idx = 1; idx < num; idx++
- In each iteration, print ' ' repeated using the times (nam - idx)
concatenated with '*' repeated using the times (idx);
*/

function triangle(num) {
  for (let idx = 1; idx <= num; idx++) {
    console.log(' '.repeat(num - idx) + '*'.repeat(idx));
  }
}

// Another way
function triangle(size) {
  for (let i = 1; i <= size; i++) {
    console.log('*'.repeat(i).padStart(size));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********