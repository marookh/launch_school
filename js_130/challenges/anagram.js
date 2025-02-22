// Anagrams
// Write a program that takes a word and a list of possible anagrams
// and selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like 
// "enlists", "google", "inlets", and "banana", the program should return a 
// list containing "inlets". Please read the test suite for the exact rules 
// of anagrams.

/*
P:
Write a program that taken a word, returns a list of words that are anagrams of the given word.

Rules:
 - if none of words matched, return an empty array
 - anagram must have each character only once; don't include word with duplicate letters
 - identical word is not anagram
 - anagram comparison is case-insensitive
 - eleminate anagrams with the same subset or checksum

 - Define a class called Anagram, with a two methods:
  - Constructor: takes a word and saves it for later
  - match: takes an array of words and matches with the word

  Data structure:
   - an array of characters to check the given word with each other words in the array
   - maybe an object where the word is key and an array of anagram words is the value

  Algorithm:
   - Define the match method with a array of words as a parameter
    - Initialize an empry anagrams array
    - Iterate over the array of words
     - if the lowercase, sorted version of targetW is equal to the lowercase sorted current word:
      - Append the currentW in its original form to anagrams array
   - Return the anagrams array
*/

class Anagram {
  constructor(targetW) {
    this.matched = targetW.toLowerCase();
  }

  sortedCars(word) {
    return word.split('').sort();
  }

  isAnagram(w1, w2) {
    if (w1 === w2) {
      return false;
    }

    return this.sortedCars(w1).join('') === this.sortedCars(w2).join('');
  }

  match(words) {
    return words.filter(word => this.isAnagram(word.toLowerCase(), this.matched));
  }
}

module.exports = Anagram;