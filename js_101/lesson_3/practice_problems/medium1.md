Question 1

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

```js
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...
```
Solution 1
```js
for (let padding = 0; padding <= 9; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}

let emptyStr = " ";

for (let i = 0; i < 10; i += 1) {
  emptyStr += " ";
  console.log(emptyStr + str);
}
```

Question 2
Starting with the string:

```js
let munstersDescription = "The Munsters are creepy and spooky.";
```
Return a new string that swaps the case of all of the letters:

```js
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
```

Solution 2
```js
console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);
```

Question 3
Alan wrote the following function, which was intended to return all of the factors of number:

```js
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
```
How can you make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?

Solution 3
```js
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor) {
    if (number % divisor === 0) {
      // factors.push(number / divisor)
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

factors(40); // [1, 2, 4, 5, 8, 10, 20, 40]
factors(0); // []
factors(5); // [1, 5]
```

How does the result differ if you replace line 3 with `factors.push(divisor);`?
Bonus:
```js
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor) {
    if (number % divisor === 0) {
      // factors.push(number / divisor)
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(40)); [40, 20, 10, 8, 4, 2, 1]
console.log(factors(0)); []
console.log(factors(5)); [5, 1]
```

In this code, the factors of the input `number` numbers are being pushed into the `factors` array. The factors are the numbers that divide the input number without leaving a remainder.
The numbers in `factors` array will be in descending order.

Question 4

Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer` push() `or `concat()` for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

```js
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```
Solution 4
Yes, there is a difference. While both functions have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer.

Question 5
What will the following two lines of code output?

```js
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

Solution 5
JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.
```js
0.8999999999999999
false
```

Question 6
What do you think the following code will output?

```js
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```
Bonus:

How can you reliably test if a value is `NaN`?

Solution 6
The output is false. NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.

Bonus Answer:

To test whether the value is NaN, we use the` Number.isNaN()` method:

```js
console.log(Number.isNaN(nanArray[0])); // true
```

Question 7
What is the output of the following code?

```js
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```
Solution 7
```js
34
```
The expression `answer - 8` is evaluated before loggin it to the consoele. The value of answer is `42`, 42 - 8 becomes `34`. When we passed in `answer`'s value to `messWithIt` a copy of that value is passed to the function since `42` is a primitive (pass by value) type. Reassigning the function parameter `someNumber` doesn't affect the value of `answer`. 

Question 8
One day, `Spot` was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

```js
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
After writing this function, he typed the following code:

```js
messWithDemographics(munsters);
```

Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

Solution 8

In JavaScript, objects are passed by reference. Thus, Spot's `demoObject` starts off pointing to the `munsters` object. His program could replace that with some other object, and the family's data would be safe. However, in this case, the program doesn't create a copy of the `demoObject`; it just uses it, as-is. To further complicate matters, the objects nested in the `demoObject` are the same objects referenced by the `munsters` object properties. Therefore, when the forEach loop mutates those objects, the change is reflected by both pointers, `munsters` and `demoObject`. Ultimately, the object that gets changed by the function is the `munsters` object.

Question 9
Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

```js
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
What does the following code output?

```js
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```

Solution 9
```js
"paper"
```

The outermost call determines the result of comparing `rps(rps("rock", "paper")`, `rps("rock", "scissors"))` against rock. That means that we must evaluate the two separate calls, `rps("rock", "paper")` and `rps("rock", "scissors")`, and combine them by calling rps on their results. Those innermost expressions return "`paper`" and "`rock`", respectively. Calling `rps` on those two values returns `"paper"`, which, when evaluated against `"rock"`, returns `"paper"`.

Question 10
Consider these two simple functions:

```js
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
```
What will the following function invocation return?

bar(foo());
Solution 10
```js
"no";
```
This is because the value returned from the foo function will always be `"yes"` , and `"yes" === "no"` will be `false`.

