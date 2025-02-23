// Implement octal to decimal conversion. 
// Given an octal input string, your program should produce a 
// decimal output. Treat invalid input as octal 0. 
// The only valid digits in an octal number are 0, 1, 2, 3, 4, 5, 6, and 7.

/*
p:
- Input is an octal string digit. 
- Output decimal number?
- Invalid input = 0
- Valid octal numbers = 0, 1, 2, 3, 4, 5, 6, 7
- don't use built-in feature for conversion
- Decimal = base-10
 - 422 # decimal
 - 4*10^2 + 2*10^1 + 2*10^0
 - 4*100 + 2*10 + 2*1
 - 400 + 20 + 2
 - 422
 ---------------
 - Octal = base-8
  - 422 # octal
  - 4*8^2 + 2*8^1 + 2*8^0
  - 4*64 + 2*8 + 2*1
  - 256 + 16 + 2
  - 274
 ---------------
 17 # octal
 1*8^1 + 7*8^0 
 1 *8 + 7* 1
 8 + 7
 15

Rules/Requirements
- From the tests, it looks like we need to define a class called Octal
- The conversion must be done manually, no use of methods
- Anything that is not a digit must be treated as 0
- octal 1 is decimal 1
- as the input is string, I also need to convert it to a number during conversion
- To get the rightmost number, I will need to use % operator

Data strucutrues
- String -> input
- An array of valid octal numbers
- Maybe an array of input digits
- To convert an octal number, calculate the number in octal system
= The result is a decimal number

Algorithm:
Define a class: Octal
 - Property: validOctalNumbers(static)
   - [0, 1, 2, 3, 4, 5 ,6, 7]

 - Constructor
   - Take a string, safe it for later as `octal`

 - Method: toDecimal(instance)
  - If any digit in `octal` doesn't exist in validOctalNumbers:
   - Return 0

  - Initialize decimal to 0
  - Initialize num to the number digit

  - Iterate over `octal` (string)
   - Initialize lastNum to the the rightmost digit - use n
   - Multiple lastNum by 8^exponent
   - Add the result to `decimal`
  
  - Return decimal

*/

class Octal {
  constructor(octal) {
    this.number = octal;
  }

  toDecimal() {
    if (!this.isValidOctal()) {
      return 0;
    }

    let arrDigits = this.reversedDigits();
    let decimal = 0;

    arrDigits.forEach((digit, exponent) => {
      decimal += (digit * (8 ** exponent));
    });

    return decimal;
  }

  reversedDigits() {
    return this.number.split('')
                      .map(digit => Number(digit))
                      .reverse();
  }

  isValidOctal() {
    return this.number.split('')
                      .every(char => char.match(/[0-7]/));
  }
}

module.exports = Octal;