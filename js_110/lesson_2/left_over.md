Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

* The building blocks are cubes
* The structure is built in layers
* The top layer is a single block
* A block in an upper layer must be supported by four blocks in a lower layer
* A block in a lower layer can support more than one block in an upper layer
* You cannot leave gaps between blocks
* Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

Tasks

You are provided with the problem description above. Your tasks for this step are:

1. To make notes of your mental model for the problem, including explicit and implicit rules
2. Write a list of questions for things that aren't clear about the problem from the description provided

Problem:
Given a number of building cubes, build the tallest possible building, and calculate
the number of left-over blocks, return that number. 

Input: number (amount of cubes)
Output: number (amount of remaining blocks after building the structure)

Rules:
   Explicit:
    - The bocks for building a valid structure are cubes
      - A cube is a three-dimensional geometric shape with six square faces, 
      all of which are the same size.

    - The structure is bulit in layers
    - The top layer is a single block
    - A block in an upper layer must be supported by four blocks in a lower layer
    - A block in a lower layer can support more than one block in an upper layer
    - You cannot leave gaps between blocks
    - build a valid structure from the given blocks
    - Calculate the number of blocks left over
    - return the number 
  
  Implicit:
    - Layer number correlates with blocks in a layer
      - Layer number x Layer number = number of blocks in layer



Questions:
1. What does support mean in this context?
1. Support means that one block would have four blocks below it. Those four blocks
will share a quarter of them to support the one block in the upper layer. 

2. How will the specific amount of cubes be determined?
2. In the input.
3. What is a layer in this context?
4. Is a lower layer still valid if it has more blocks than it needs?
4. No. 


5. Will there always be left-over blocks?
6. No. If there are enough cubes to build the structure, there won't be any left-over block.


Examples/Test cases
```js
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```

Data Structure:
* Perhaps use a nested array to represent the structure?
   - Each subarray could represent a layer

[
  ['x'],
  ['x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ...
]

Algorithm:
1. Create a empty array called 'structure' that would be comprized of all necessary blocks
2. Create a 'numberOfBlocks' variable initialize it to 1
3. Creat a 'remainingBlocks' variable initialize it to 0

2. Start a loop 
4. Add the square of 'numberOfBlocks' to 'structure'
5. Increment 'numberOfBlocks' by 1
5. Repeat steps 4 and 5 until 'numberOfBlocks'