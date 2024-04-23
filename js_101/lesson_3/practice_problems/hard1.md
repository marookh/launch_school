Question 1
Will the following functions return the same results?

```js
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
```

Solution 1
These functions do not return the same thing. The function `first() `returns the expected value of `{ prop1: "hi there" }`, but `second()` returns `undefined` without throwing any errors.

The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. In second, JavaScript inserts a semicolon after the word return, so the function returns `undefined`. No errors are thrown since the rest of the code is valid, even though it never gets executed.


Question 2
What does the last line in the following code output?

```js
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

Solution 2
```js
{
  first: [1, 2];
}
```

Since `numArray` is a reference to the original array, `[1]`, `numArray.push(2)` modifies this array. Thus, the original object referenced by object is changed. If, instead of modifying the original object, we want to modify `numArray` but not object, we have two options:

1. We can declare and initialize `numArray` with a reference to a copy of the original array:

```js
let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);
```

2. We can use `Array.prototype.concat()`, which returns a new array instead of modifying the original array:

```js
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);
```

Question 3
Given the following similar sets of code, what will each code snippet print?

A:

```js
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```
B:

```js
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```
C:

```js
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

Solution 3
A:

The output is:

```js
"one is: one"
"two is: two"
"three is: three"
```

The `messWithVars` function has three parameters, `one`, `two`, and `three`, that shadow their global counterparts. When the `messWithVars` function is invoked, it is passed the array references that are assigned to the `one`, `two` and `three` global variables.

Within the `messWithVars` function, the local versions of `one`, `two` and `three` are reassigned from lines 2 to 4. Due to variable shadowing, these reassignments have no effect on the global versions. Thus, lines 13 through 15 log the values of the global one, `two` and `three` variables.

B:

The output is:

```js
"one is: one"
"two is: two"
"three is: three"
```

As with the first snippet, this version of `messWithVars` has three parameters that shadow their global counterparts. Likewise, it only performs reassignments to local variables so that the values that are logged by lines 13 through 15 are the values of the global `one`, `two` and `three` variables.

Though this detail has no outcome on the final output, it's important to note that within the `messWithVars` function, the local variables of `one`, `two` and `three` are being reassigned to brand *new* arrays. Which means they don't use any of the references that were passed to the function when it was invoked on line 11.

C:

The output is:

```js
"one is: two"
"two is: three"
"three is: one"
```

As with the first two snippets, this version of `messWithVars` has three parameters that shadow their global counterparts. Unlike the other two snippets, this version invokes the `splice` method on each of its arguments. `splice` is a destructive operation and will mutate the arrays that are being passed into `messWithVars`.

Because arrays are passed by reference, when the `messWithVars` function executes `splice`, the changes to each array will be seen outside of the function's invocation. So, when the values for the `one`, `two` and `three` global variables are logged on lines 13 to 15, the mutated arrays are what get printed.

Each `splice` invocation deletes the first element in the array that it's called on and inserts a new string value in its place.

Question 4
Can you identify all of the variables, primitive values, and objects in the following code?

```js
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);
```

Solution 4
There are 5 variables, 13 primitive values, and 2 objects. Re-examine the code if you found less before looking at the rest of the solution.

We counted 5 variables that are declared in this code snippet: the function name `boo`, the `scare` parameter of the function, `myBoo` declared on line 2, `halloweenCollection` declared as a constant on line 6, and the global `myBoo` variable, on line 12. Note that `console` is also technically a variable name, as `console` is a property of the global object.

The objects are pretty straightforward. There is the `boo` function object, and the object literal referenced by `halloweenCollection`. One could further include the `log` and `toUpperCase` methods, as well as the `console` object. Methods are just functions referenced by object properties.

There are a lot of primitive values, so we've made a list:

* The keys and values from the `halloweenCollection` object are all strings. That includes` "greet", "scare", "wish", "Happy Halloween", "Boo", and "May all your pumpkins be glowing"`.
* On line 12, we're passing the value of the greet property to the `boo` function by value. Namely, we're passing a copy of the string `"Happy Halloween"`. On that same line, the string `"greet" `is used to access that value.
* Inside of the function body, on line 2, `scare.toUpperCase()` returns a new string, `"HAPPY HALLOWEEN"`, which is going to be concatenated with another string, `"!!!"`. Ultimately, the concatenation results in yet another string, `"HAPPY HALLOWEEN!!!"`, which is what `myBoo` is initialized to.
* On the next line, the value of `myBoo` is passed into `console.log` by value, i.e. a copy of that string is passed and logged to the console.
* Finally, the function returns `undefined`, which is assigned to the global `myBoo`, on line 12.

Question 5

Fix the following that returns a false condition for the values that are strings like this `"abc"` and like this "343" and handle string values that are less than or greater than 4 components, e.g., `4.5.5` or `1.2.3.4.5`

```js
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
```
The `isAnIpNumber()` function
```js
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}
```

The call to `/^\d+$/.test(str)` (/\d+$/ is a regular expression) returns a truthy value if `str` is a string of digits. If it is, we convert it to a number then check whether the number is in the appropriate range (0-255).

If `str` is not a string of digits, we return `false`.

Solution 5

To determine whether there are precisely 4 dot-separated "words" in the string, you can check the value of `dotSeparatedWords.length` after splitting the string.

```js
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
```
You can fix this by using `return` `false` instead of `break`.

```js
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
```