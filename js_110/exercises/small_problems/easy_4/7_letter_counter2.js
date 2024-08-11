// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters 
// when determining word size. For instance, the word size of "it's" is 3, not 4.

function isLetter(char) {
  if (char >= 'a' && char <= 'z' || char >= 'A' & char <= 'Z') {
    return true;
  } else {
    return false;
  }
}

function wordSizes(words) {
  let wordsArray = words.split(' ').map(word => {
    return word.split('').filter(char => isLetter(char)).join('');
  });

  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}
// Inspired by Kenneth Lee an ls student
const wordSizes = (str) => {
  let obj = {};

  str.split(" ").forEach((word) => {
    word = word.split("").filter((char) => /[a-zA-Z]/.test(char));
    obj[word.length] ? obj[word.length]++ : (obj[word.length] = 1);
  });

  return obj;
};

// Examples:

const p = console.log;

p(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
p(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
p(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
p(wordSizes(''));                                            // {}