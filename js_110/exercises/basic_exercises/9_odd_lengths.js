let string = 'ahmad mahmood hamed hamd mohammad hameed';
// Write a function  oddLengths  that returns an array consist of length of strings that have odd lengths. Use reduce ↓

function oddLengths(str) {
  return str.split(' ')
            .map(word => word.length)
            .filter(length => length % 2 !== 0);
}

// using reduce
const oddLengths = str => {
  return str.split(' ').reduce((acc, word) => {
    if (word.length % 2 !== 0) {
      acc.push(word.length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(string));
