// Given two words, which letters do you have to remove from them to make them anagrams?
// A word is an anagram of another word if they have the same letters.
// The order of characters in the result string does not matter.
// P:
// - Determine which letter should I remove and return them.
// - The order is not important
// - Input string can alos be empty
// - If none of the input string are anagrams return them 

// D:
// Input: two string
// OUput: The letters that should be removed

// A:
// Helper Func: isAnagram
// Input: two string
// Output: boolean
// Sort the array version of both strings, converting back to string
// IF both strings are equal, return true
// else return false

// Main func : `anagramDiffrenece` with two paramters `str1`, `str2`
// If both strings are not agnagrams 
///   - Iterate through str1 starting at index 0
//     - Iterate through str2 starting at index 0

//     - If the current letter in str1 is not within str2, nor in `removedLetters`
//        - Update `removedLetters` by concatinating current letter to it

//        - If the current in str2 is not within str2, nor in `removedLetters`
//        - Update `removedLetters` by concatinating current letter to it. 
//    - After the iteration ends
// - After the iteration ends

// - Return ``removedLetters``

// "launchschool" 
// "coolish"

function sort(str) {
  return str.split('').sort().join('');
}
function isAnagram(str1, str2) {
  return sort(str1) === sort(str2);
}

// 'aabcdd'  => be
// 'aabcdd'
// // Test cases

// ===================================================

function anagramDifference(str1, str2) {
  // Helper function to count character frequencies in a string
  function getFrequencyCounter(str) {
    const counter = {};
    for (const char of str) {
      counter[char] = (counter[char] || 0) + 1;
    }
    return counter;
  }

  // Get frequency counters for both strings
  const count1 = getFrequencyCounter(str1);
  const count2 = getFrequencyCounter(str2);

  // Helper function to build the result string based on frequency differences
  function buildDifferenceString(count1, count2) {
    let result = '';

    // Find characters in count1 that are in excess compared to count2
    for (const char in count1) {
      if (count1[char] > (count2[char] || 0)) {
        result += char.repeat(count1[char] - (count2[char] || 0)); 
      }
    }

    // Find characters in count2 that are in excess compared to count1
    for (const char in count2) {
      if (count2[char] > (count1[char] || 0)) {
        result += char.repeat(count2[char] - (count1[char] || 0));
      }
    }

    return result;
  }

  return buildDifferenceString(count1, count2);
}

// Example usage:

console.log(anagramDifference("ab","a"));   // b
console.log(anagramDifference("ab","cd"));  // abcd
console.log(anagramDifference("aab","a"));  // ab
console.log(anagramDifference("a","aab"));  // ab
console.log(anagramDifference("launchschool","coolish")); // aunchli
console.log(anagramDifference("a",""));     // a
console.log(anagramDifference("", "a"));    // a
// TODO: work on this problem