// Perfect Number
// The Greek mathematician Nicomachus devised a classification scheme for natural numbers (1, 2, 3, ...),
//  identifying each as belonging uniquely to the categories of abundant, 
// perfect, or deficient based on a comparison between the number and the 
// sum of its positive divisors (the numbers that can be evenly divided into 
// the target number with no remainder, excluding the number itself). 
// For instance, the positive divisors of 15 are 1, 3, and 5. 
// This sum is known as the Aliquot sum.

// Perfect numbers have an Aliquot sum that is equal to the original number.
// Abundant numbers have an Aliquot sum that is greater than the original number.
// Deficient numbers have an Aliquot sum that is less than the original number.
// Examples:

// 6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// 28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
// 15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
// 24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
// Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
// Write a program that can tell whether a number is perfect, abundant, or deficient.

/*
Understand the Problem:

- Input is a number either - or +
- Important terms:
 - Original number: the # to be used as input
 - Divisor: numbers that are evenly divisible by the original num exlusively (must be + in this prob)
 - Aliquot sum: the sum all possitive divisors of a number
 - Perfect num: Aliquot sum = original num (6)
 - Deficient num: Aliquot sum < original num (15)
 - Abundant #: Aliquot sum > orginal # (24)
 - Prime num always deficient having only divisor (1)

 Rules:
  - Only positive numbers are valid
  - what about 0? 
  - Return the classified names as a string appropriately
  - prime num is deficient by default
  - don't include the input number iteself
  
Data Structure:
From the test cases, I need to define a class PerfectNumber with a static method: classify
I only need to use string. I might also need helper functions.

Algorithm
Define a class called `PerfectNumber`:

  Constructor:
  - Take a targetNum as argument, and save it 

  Method: classify(static)
  - If `targetNum` is less than 0:
   - Throw an error
  
  - If `targetNum` is a prime number:
   - Return "deficient"
  - Initialize `aliquotSum` to the aliquot sum of targetNum

  - If `targetNum` is equal to `aliquotSum`:
   - Return "perfect"
  - If `targetNum` is greater than `aliquotSum`:
   - Return "abundant"
  - If `targetNum` is less than `aliquotSum`:
   - Return "deficient"
 

  Method: getPositiveDivisors(private)
   - Initialize an empty `divisors` array
   - Iterate over numbers from 1 - targetNum
    - If the current number is a evenly divisible by targetNum:
     - Append it to `divisors` array
   - Return `divisors`

  Method: isPrime(private)
   - Get the divisors of `targetNum` from `getPositiveDivisors`
   - If it is only 1, return true. Otherwise, return false.
  
  Method: getAliquotSum(private)
   - Get the divisors of `targetNum` from `getPoitiveDiviors`
   - Get the sum of all divisors, and return it
*/

class PerfectNumber {

  static classify(targetNum) {
    if (targetNum < 1) {
      throw new Error("Number must be greater than or equal to 1.");
    }

    let aliquotSum = this.getAliquotSum(targetNum);

    if (targetNum === aliquotSum) {
      return "perfect";
    } else if (aliquotSum > targetNum) {
      return "abundant";
    } else {
      return "deficient";
    }
 }

 static getAliquotSum(targetNum) {
  let sum = 0;
  for (let i = 1; i < targetNum; i += 1) {
    if (targetNum % i === 0) {
      sum += i;
    }
  }
  return sum;

 }
}

module.exports = PerfectNumber;