// Time: [9: 36 - 9: ]
// Create an object that expresses the frequency with which each letter occurs in this string: ↓

let statement = "The Flintstones Rock";

// Intialize an `letters` to converting the string into array of characters with no space characters

// Create an empty `freq` that will hold the result
// Travers the letters in `letters`
//  - Create `currKey` to the current letter in letters
// - If `currKey` does not exist in `freq`
//  - Create `currKey` in `freq` with the value of `1`
// - If it exists
//  - Increment it by `1`
// End traversion
// Return `freq`

const findFrequencies = (sentence) => {
  const letters = sentence.split('').filter(char => char !== ' ');
  const freq = {};

  for (let idx = 0; idx < letters.length; idx++) {
    let currKey = letters[idx];

    if (!(freq[currKey])) {
      freq[currKey] = 1;
    } else {
      freq[currKey] += 1;
    }
  }
  return freq;
}

console.log(findFrequencies(statement)); // 