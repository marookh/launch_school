// Triangles
// Write a program to determine whether a triangle is equilateral, 
// isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// Note: For a shape to be a triangle at all, 
// all sides must be of length > 0, 
// and the sum of the lengths of any two sides must be greater 
// than the length of the third side.

/*
P:
In: three sides/numbers
Out: a string; type of a triangle or a error msg

- equilateral: all 3 sides of the same length
- isosceles: 2 sides of the same length
- scalene: all 3 sides of different lengths
- valid: all sides > 0, and sum of 2 sides > 3rd side

D:
an array of sides
Different functions
-----------

A:
- Create a function isValidTri to determine if a triangle is valid
- Create a function to determine if a tri is equilateral
- Create a function to determine if a tri is isosceles
- Create a function to determine if a tri is scalen
-------------
isValidTri
1. Iterate over the input 3 sides (as array)
 - If all sides greater than 0 AND sum of 2 sides > 3rd:
   - Return true;
2. Return false
--------------
equilateral
0. Initialize a counter to 0
1. Iterate over the input sides
 - If current side equals next:
   - increment counter
2. Return true if counter === 3
--------------
isosceles
0. Initialize a counter to 0
1. Iterate over the input sides
 - If current side equals next:
   - increment counter
2. Return true if counter === 2
--------------
scalene
0. Initialize a counter to 0
1. Iterate over the input sides
 - If current side equals next:
   - increment counter
2. Return true if counter === 0
*/

class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }


  isValid(sides) {
    let isGreaterThanZero = sides.every(side => side > 0);
    if (isGreaterThanZero) {
      return ((sides[0] + sides[1]) > sides[2] || 
             (sides[1] + sides[2] > sides[0]  || 
              sides[2] + sides[0] > sides[1]));
    }
   
    return false;
  }

  kind() {
    if (this.isValid([this.s1, this.s2, this.s3])) {
      if ((this.s1 === this.s2) && (this.s2 === this.s3) && (this.s1 === this.s3)) {
        return "equilateral";
      } else if ((this.s1 === this.s2) || (this.s2 === this.s3) || (this.s1 === this.s3)) {
        return "isosceles";
      } else {
        return "scalene";
      }
  
    } else {
      return "Invalid triangle"
    }
}
}

module.exports = Triangle;