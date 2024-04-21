Question 1
Will the code below raise an error?

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
```
Bonus:

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
```
Solution 1
It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots.

Bonus Answer:

`numbers[4]` will output undefined, but the slot is empty -- it doesn't have a value, not even undefined, in spite of what the line returns. This distinction is important: if you use` map()`, for instance, the new array will also have empty slots in the corresponding positions. On the other hand, slots with a value of `undefined` will be remapped based on the return value of the callback:

```js
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]
```
Question 2
How can you determine whether a given string ends with an exclamation mark (!)?

```js
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```
Solution 2
```js
str1.endsWith("!"); // true
str2.endsWith("!"); // false
```
Question 3
Determine whether the following object of people and their age contains an entry for `'Spot'`:

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```
Note that our keys have capitalized names; this usually violates style guidelines, but is fine for our purposes. 

Solution 3
```js
ages.hasOwnProperty("Spot");
```
Question 4
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. 

```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
```
Solution 4
```js
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
  ```
Alternate solution
```js
munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();
```
Question 5
What will the following code output?

```js
console.log(false == '0');
console.log(false === '0');
```

Solution 5
The code outputs:
```js
true
false
```
In JavaScript, there are two equality operators: strict equality (===) and non-strict (or weak) equality (==). The === operator behaves as a traditional equality operator does in most languages: it evaluates as true when the two expressions on either side have the same type and value. On the other hand, the == operator coerces the values to the same type before comparing them. Coercions can produce unexpected and confusing behavior. Thus, it's good practice to use === rather than ==. The same holds for the !== vs. != operators: prefer !==.

Question 6
We have most of the Munster family in our ages object:

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
```
Add entries for `Marilyn` and `Spot` to the object:

```js
let additionalAges = { Marilyn: 22, Spot: 237 };
```
Solution 6
```js
Object.assign(ages, additionalAges);
or
ages = {...ages, ...additionalAges};
```
Question 7
Determine whether the name `Dino` appears in the strings below -- check each string separately:

```js
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
```
Solution 7
```js
str1.includes('Dino'); // false
str2.includes('Dino'); // true
```
Alternate Solution

```js
str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true
```
Yet another Solution

```js
str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true
```
Question 8
How can we add the family pet, "Dino", to the following array?

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
```
Solution 8
```js
flintstones.push("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]
```
Alternate Solution

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones = flintstones.concat("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]
```
Yet Another Solution

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = "Dino";
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]
```
Question 9
In the previous problem, our first answer added 'Dino' to the array like this:

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
```
How can we add multiple items to our array? ('Dino' and 'Hoppy')

Solution 9
```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]
```
Question 10
Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

```js
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
```
Solution 10
```js
advice.slice(0, advice.indexOf('house'));
// => 'Few things in life are as important as '
```