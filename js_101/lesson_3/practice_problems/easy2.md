Question 1
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```js
let advice = "Few things in life are as important as house training your pet dinosaur.";
```
Solution 1
```js
advice.replace('important', 'urgent');
advice.replaceAll("important", "urgent");
// => Few things in life are as urgent as house training your pet dinosaur.
```
Note that if the string contains two or more occurrences of important, this code only replaces the first. 

Question 2
The `Array.prototype.reverse` method reverses the order of elements in an array, and `Array.prototype.sort` can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```
Bonus Question: Can you do it using the `Array.prototype.forEach()` method?

Solution 2
```js
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]


let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
```
Bonus Question Answer:

```js
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
```

Question 3
Given a number and an array, determine whether the number is included in the array.

```js
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
```
Solution 3
```js
numbers.includes(number1); // => false
numbers.includes(number2); // => true
```

Question 4
Starting with the string:

```js
let famousWords = "seven years ago...";
```
show two different ways to put the expected "Four score and " in front of it.

Solution 4
```js
"Four score and " + famousWords;
or

"Four score and ".concat(famousWords);
```
Question 5
Given an array of numbers `[1, 2, 3, 4, 5]`, mutate the array by removing the number at index 2, so that the array becomes `[1, 2, 4, 5]`.

Solution 5
```js
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]
```
Question 6
Suppose we build an array like this:

```js
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
```
This code will create a nested array that looks like this:

```js
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
```

Create a new array that contains all of the above values, but in an un-nested format:

```js
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

Solution 6
```js
flintstones = [].concat(...flintstones);
```
Solution with reduce

```js
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
```
Solution with forEach

```js
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
```
Solution with flat

```js
let newFlintstones = flintstones.flat();
Array.prototype.flat() was added to JavaScript in ES2019. You can read about it on MDN.
```
Question 7
Consider the following object:

```js
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
```
Create an array from this object that contains only two elements: Barney's name and Barney's number:

```js
[ 'Barney', 2 ]
```

Solution 7
```js
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
```
Question 8
How would you check whether the objects assigned to variables numbers and table below are arrays?

```js
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
```

Solution 8
```js
Array.isArray(numbers); // => true
Array.isArray(table);   // => false
```

Question 9
Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```js
let title = "Flintstone Family Members";
```

Solution 9
```js
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);
```
To center some text, we need to pad it on the left with some spaces. The hard part here is determining how many spaces you need. You can determine the correct value by subtracting the length of the string from the desired width, then dividing that result by 2. That gives you the number of spaces you need on the left, and an equivalent number of spaces on the right, after allowance for rounding. Once we know how many spaces we need on the left, we can use padStart to pad the original string to a length that includes those additional spaces.

Question 10
Write a one-line expression to count the number of lower-case t characters in each of the following strings:

```js
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
```
Solution 10
```js
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
```