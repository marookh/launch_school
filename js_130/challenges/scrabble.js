// Scrabble Score
// Write a program that, given a word, computes the Scrabble score for that word.

// Letter Values
// You'll need the following tile scores:

// Letter	Value
// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10
// How to Score

// Sum the values of all the tiles used in each word. 
// For instance, lets consider the word CABBAGE which has the following letters and point values:

// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E
// Thus, to compute the final total (14 points), we count:

// 3 + 2*1 + 2*3 + 2 + 1
// => 3 + 2 + 6 + 3
// => 5 + 9
// => 14

/*
Understand the Problem:
 Input: I need to create a class with two methods: constructor, and score
 Output: score doesn't take any arguments, 
  but uses the value of the property stored in the constructor to compute the scrabble score. 

Mental Model:
Given letters values and their corresponding score, 
write a program that computes the total points 
of titles(uppercase characters) in a word and returns it.

Rules:
 - scores are case-insensitive => OXYPHENBUTAZONE => 42
 - empty string and space characters score 0
 - null or any value other than string score 0
 - any letter counts as a distinct point despite the duplication

Examples/test cases
 - provided in the test file


Data Structure:
I might need to use array of letters, and words.

Algorithm;
Initialize a TITLE_SCORES object to titles as key and scores as values

constructor
 - take a word/value If is truthy, safe it as is or save it as an empty string.

Method score (instance)
 - Initialize sum to 0
 - Convert value from constructor to uppercase, then to array of chars
 - Iterate over the array of characters
   - The only keys from TITLE_SCORES object
   - Iterate over those keys
    - If the current key includes the current letter in the input string:
      - Get the score of the current key on TITLE_SCORES
      - Add it to sum
 - Return sum

 Method score (static)
  - Get a word as an argument
  - Invoke the Scrabble class with `word` as an argument
  - Return the return value of the instance score on that value
*/

class Scrabble {
  constructor(value) {
    this.value = value ? value : '';
  }

  static TITLE_SCORES = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
  }

  score() {
    return this.value.toUpperCase().split('').reduce((sum, letter) => {
      Object.keys(Scrabble.TITLE_SCORES).forEach(letters => {
        if (letters.includes(letter)) {
          sum += Scrabble.TITLE_SCORES[letters];
        }
      })

      return sum;
    }, 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;