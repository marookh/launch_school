// Write a program that, given a natural number and a set of one or more other 
// numbers, can find the sum of all the multiples of the numbers in the set that 
// are less than the first number. If the set of numbers is not given, use a 
// default set of 3 and 5.

// For instance, if we list all the natural numbers up to, but not including, 
// 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. 
// The sum of these multiples is 78.

/*
P:
Input: a natural number and a list of numbers
Output: sum of multiples of numbers in the list that are less the the natural num

RUles:
 - if set is not given, use set of 3 and 5
 - Ex: multiples of 3, or 5 => 3, 5, 6, 9, 10, 15, 18
 - count multiples of each number up to but not including the given number
 - separate each group of 3 numbers by underscore

 ex: given num: 10, set [3, 5]
   - multiples: [3, 6, 9, 5] = 23

Question/hints
From the test cases, I need to define a SumOfMultiples class
- The class will have 3 methods:
 - constructor
 - to (static)
 - to (instance)

- How to write a number delimited by underscore? 
Data sturucture:
 - I might need to use an array of multiples, and an array to store the 
 - set of natural numbers

Algorithm:
constructor:
 - take a list, and save it for later
 - the default is [3, 5]

Method: to(intance)
 - Take a number and save it
 - Initialize `sum` to 0
 - Iterate over numbers from 1 up to (number - 1)
  - If the multiple of current number is set is less the input number
    - Add its multiple to `sum`

 - Return sum

 Method: to(static)
 - get the sum of input number from to(static)
 - return the sum
*/

class SumOfMultiples {
  constructor(...list) {
    this.multiple = (list.length !== 0) ? list : [3, 5];
  }

  static to(int) {
    let obj = new SumOfMultiples();
    return obj.to(int);
  }

  anyMultiple(num) {
    return this.multiple.some(multiple => {
      return num % multiple === 0;
    })
  }

  to(int) {
    return Array.from({length: int}, (_, idx) => idx += 1)
                .slice(0, -1)
                .filter(num => this.anyMultiple(num))
                .reduce((sum, acc) => sum + acc, 0);
  }
}

module.exports = SumOfMultiples;