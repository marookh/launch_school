## Variables, Functions and Blocks

Example 1
```js
let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2
```
Example 2
```js
let myVar = [1];

function myFunc() {
  myVar = [2];
}

myFunc();
console.log(myVar); // [2]
```
Example 3
```js
let myVar = [1];

function myFunc() {
  myVar[0] = 2;
}

myFunc();
console.log(myVar); // [2]
```

Example 4
```js
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar); // 1
```

Example 5
```js
let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar); // [1]
```

Example 6
```js
let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(); // TypeError: Cannot set properties of undefined (setting '0')
console.log(myVar);
```

Example 7
```js
let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc(myVar);
console.log(myVar); // 1
```

Example 8
```js
let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc(myVar);
console.log(myVar); // [1]
```
Example 9

```js
let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar); // [2]
```

Note: These concepts are shown in the above examples
* Variable Scope
* Mutability
* Variables as Pointers
* Passing Function Arguments