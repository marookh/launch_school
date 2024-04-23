Question 1
Write three different ways to remove all of the elements from the following array:

```js
let numbers = [1, 2, 3, 4];
```
Solution 1
Method 1

```js
numbers.length = 0;
Method 2


numbers.splice(0, numbers.length);
Method 3


while (numbers.length) {
  numbers.pop();
}
```
Question 2
What will the following code output?

```js
console.log([1, 2, 3] + [4, 5]);
```

Solution 2
The above code outputs:

`1,2,34,5`
In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.


Question 3
What will the following code output?

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
```

Solution 3
```js
hello there
```
The output is `hello there` since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means that JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line 2 assigns `str2` a new string that happens to be a copy of `str1`'s value. Line 3, in turn, assigns `str2` to an entirely new string.

Question 4
What will the following code output?

```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```
Solution 4
The output will be:

```js
[{ first: 42 }, { second: "value2" }, 3, 4, 5];
```

Internally, `arr1` looks something like this after line 1 runs:

```js
+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+
```

The first two elements of the array are pointers to objects that appear somewhere in the computer's memory. The values of those objects are not stored in the array. (Since arrays are objects, this applies to elements with array values too.) However, the primitive values are stored directly in the array.

There are two kinds of copy operations when working with objects and arrays: a **deep** copy and a **shallow** copy.

1. A deep copy makes a duplicate of every item in an existing array or object. In particular, it creates completely new instances of any subarrays or subobjects in the source object. If we performed a deep copy on `arr1`, we would have two different arrays as well as four separate objects.

2. A shallow copy only makes a duplicate of the outermost values in an array or object. If we perform a shallow copy on `arr1`, we end up with two different arrays, but we still only have one occurrence each of `{ first: 42 }` and `{ second: 'value2' }`. In this case, both `arr1[0]` and `arr2[0]` point to the same object in memory. Likewise, `arr1[1]` and `arr2[1]` point to the `{ second: 'value2' }` object.

The `slice` method performs shallow copies. Thus, when we call `arr1.slice()`, we end up with something like this:

```js
   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+
```
`arr1[0]` and `arr2[0]` point to the same object, `{ first: "value1" }`. Thus, when we replace the value of the first property by using `arr2[0]`.first, the change shows up in `arr1` as well. In the end, we get the following results:

```js
   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> |    { first: 42 }    | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+
```
Question 5
The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

```js
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

Solution 5
We can simplify this function like this:

```js
function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => color === "blue" || color === "green";
```

Another tweak you can make is to use the Array.prototype.includes method; this works especially well when you have more than 2 choices:

```js
const isColorValid = color => ["blue", "green"].includes(color);
```

Question 6
Can you identify all of the variables, primitive values, and objects that exist when this code executes?

```js
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
```
Solution 6
There are 6 variables, 9 primitive values, and 2 objects. If you counted less, you might want to have another look at the code before reading through the rest of the answer to find the ones you missed yourself.

The variables are as follows: arr declared on line 1, newArr on line 2, num and newNum declared on lines 4 and 5 respectively, double, which is the name of the function defined on lines 7-9, and num, the function parameter. Note that this num is different to the num declared on line 4, which is a global variable.

For primitives, we have the number elements of arr, 1, 2 and 3. On line 4, num is assigned to a copy of the first array element, 1. Note that the number 0 is used to access that element, which is also a primitive. On the next line, newNum is assigned yet another copy of the number 1. On line 8, inside the function body, the number 2 is used. Finally, on the last line, double is invoked with the value of newNum being passed as an argument. Remember that primitives are passed by value? This means that the parameter num receives a copy of the number 1. The function then returns the product of 1 * 2, which is the number 2.

There are only two objects in this code. The array referenced by arr and newArr, and the function double. There may be three pointers, but only two distinct objects.

