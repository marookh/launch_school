// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter += 1;
}


## Variable Scope
undefined because var declaration hoists during the creation phase of the execution ctx
It will give an error b/c let isn't hoisted, but put into a TDZ
It will give a referenceError b/c myValue is scoped to the if clause and there is no myValue isn't in the global scope
outputs 1
❌ ReferenceError because the a inside of the if clause is hoisted, but a is in the TDZ and not given a value
function myFunction() {
	let a = 1;

	if (true) {
		console.log(a);
		let a = 2;
		console.log(a);
	}
}

myFunction();
false
1
2 because of variable shadowing
TypeError because you're trying to reassign the const var
It will output an obj with 2 properties firstName: 'Jane' and lastName: 'Doe'
Strings
'These aren't the droids you're looking for'.length;
'confetti floating everywhere'.toUpperCase();
function repeat(num, str) {
	let string = '';
	for (let i = 1; i <= num; i += 1) {
		console.log(str);
		string += str;
	}
	return string;
}

repeat(3, 'hello');
Put it in a template literal or put it in a \n while using '' or ""
Before you compare the 2 strings, you have to change both strings to toLowerCase() or toUpperCase()
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));
function isBlank(str) {
	if (str === '') return true;
	return false;
}

isBlank('mars');
isBlank('  ');
isBlank('');
function isBlank(str) {
	if (str.trim() === '') return true;
	return false;
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
let string = 'launch school tech & talk';
let answer = string
	.split(' ')
	.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
	.join(' ');

console.log(answer);
Arrays
// 1 First Element
function first(arr) {
	if (arr.length === 0) return [];
	return arr[0];
}

// 2 Last Element
function last(arr) {
	return arr[arr.length - 1];
}

// 3 Add + Delete
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(energy.indexOf('fossil'), 1);
energy.push('geothermal');
console.log(energy);

// 4 Alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('');
console.log(alphabet);

// 5 Filter
let scores = [96, 47, 113, 89, 100, 102];
let answer = scores.filter(num => num >= 100).length;
console.log(answer);

// 6 Vocabulary
let vocabulary = [
	['happy', 'cheerful', 'merry', 'glad'],
	['tired', 'sleepy', 'fatigued', 'drained'],
	['excited', 'eager', 'enthused', 'animated'],
];

vocabulary.flat(1).forEach(word => console.log(word));

// 7 Equality
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// false because these are 2 obj references which happens to hold the same values

// 8 Type
function filter(input) {
	return Array.isArray(input);
}

filter([]);
filter(3);

// 9 Travel
let destinations = [
	'Prague',
	'London',
	'Sydney',
	'Belfast',
	'Rome',
	'Aruba',
	'Paris',
	'Bora Bora',
	'Barcelona',
	'Rio de Janeiro',
	'Marrakesh',
	'New York City',
];

function contains(searchLocation, array) {
	return !!array.find(location => location === searchLocation);
}

contains('Barcelona', destinations);
contains('Nashville', destinations);

// 10 Passcode
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

function generatePasscode(array) {
	return array.join('-');
}

console.log(generatePasscode(passcode));

// 11 Checking items off the grocery list
let groceryList = [
	'paprika',
	'tofu',
	'garlic',
	'quinoa',
	'carrots',
	'broccoli',
	'hummus',
];

function removeList(arr) {
	const arrayLength = arr.length;

	for (let i = 0; i < arrayLength; i++) {
		console.log(arr.shift());
	}
}

removeList(groceryList);
Functions 2
// 1. Greet 1
function greet(greeting = 'Hello') {
	console.log(greeting + ', world!');
}

greet('Salutations');
greet();

// 2. Greet 2
function greet(greeting = 'Hello, ', recipient = 'world') {
	console.log(greeting + recipient);
}

// 3 Greet 3
function greet() {
	return greeting() + ', ' + recipient() + '!';
}

function greeting() {
	return 'Good morning';
}

function recipient() {
	return 'Launch School';
}

// 4 Calculate BMI
function calculateBMI(height, weight) {
	return (weight / (height / 100) ** 2).toFixed(2);
}

calculateBMI(180, 80);

// 5 Calculate Cat Age
function catAge(humanYears) {
	let catYears = 0;
	for (let i = 1; i <= humanYears; i++) {
		if (i === 1) {
			catYears += 15;
		} else if (i === 2) {
			catYears += 9;
		} else {
			catYears += 4;
		}
	}

	return catYears;
}

console.log(catAge(3));

// 6 Remove Last Char
function removeLastChar(str) {
	return str.slice(0, str.length - 1);
}

removeLastChar('hello');

// 7 Arrow Functions (Part 1)
const template = 'I VERB NOUN.';

const sentence = (verb, noun) =>
	template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));

// 8 Arrow Functions (Part 2)
let initGame = () => ({ level: 1, score: 0 });
Objects
// 1
student.courses || student['courses']
// 2
jane.location.country || jane['location']['country']
// 3
fido.age • fido['age'] = 34;
fido['favorite food'] = 'spaghetti'
// 4
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet = function(name) {
	console.log(`Hej ${name}!`);
}

console.log(jane);
// 5
{ prefix: 'Pacific'}
{ Indian: 'Pacific'}

// 6 It will never run because obj properties are stringified and the for in loop expects the boolean value of true. true !== 'true'

// 7
const keys = Object.keys(vehicle);
// 8
const nestedPerson = Object.entries(person)
// 9
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
const obj = {};

for (let index in nestedArray) {
	console.log(nestedArray[index]);
	obj[nestedArray[index][0]] = nestedArray[index][1];
}

console.log(obj);
// 10
function clone(obj) {
	return {...obj}
	// Object.assign({}, obj)
}