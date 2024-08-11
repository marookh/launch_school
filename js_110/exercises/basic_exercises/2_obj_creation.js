// Time: [9:01 - 9:10]

// Take a look at the following array.  Write a function that uses this array to create an object where the names are the keys and the values are the positions in the array: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }  ↓

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"]

// Define a func: factory with one param: arr
// - Initialize an empty `obj` that will hold the result
// - Iterate elements in `arr` using idx and arr.length
//  - Create a `currEl` variable to the current element in `arr`
//  - Create a prop with the `currEl` as key and its index as value in `obj`
// - After loopin ended
// - return `obj`

const factory = (arr) => {
  let obj = {}

  for (let idx = 0; idx < arr.length; idx++) {
    let currEle = arr[idx];
    obj[currEle] = idx;
  }

  return obj;
}

// 2nd way, using reduce

function factory(arr) {
  return arr.reduce((acc, currEl, idx) => {
    acc[currEl] = idx;
    return acc;
  }, {})
}

// 3th way, using forEach
let flintstonesObj = {};

flintstones.forEach((name, index) => flintstonesObj[name] = index);

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 } 
console.log(factory(flintstones)); 

// Out: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }