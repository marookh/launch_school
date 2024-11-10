
## Animal
Given a class Animal create two classes Cat and Dog that inherit from it.

The `Cat` constructor should take 3 arguments, `name`, `age` and `status`. Cats should always have a leg count of 4 and a species of cat. Also, the `introduce` method should be identical to the original except, after the phrase there should be a single space and the words `Meow meow!`. For example:

```js
let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true
```

The `Dog` constructor should take 4 arguments, `name`, `age` and `status` and `master`. Dogs should always have a leg count of 4 and a species of dog. Dogs have the same `introduce` method as any other animal, but they have their own method called `greetMaster()`, which accepts no arguments and returns `Hello (master's name)! Woof, woof!`. (Make sure you replace (master's name) with the name of the dog's master.)

```js
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}
```

## Solution
```js
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}
```
---
## Refactoring Vehicles
Consider the following classes:

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 4;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Motorcycle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 2;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Truck {
  constructor(make, model, payload) {
    this.make = make;
    this.model = model;
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}
```
Refactor these classes so they all use a common superclass, and inherit behavior as needed.
## Solution
```js
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
  getWheels() {
    return 6;
  }
}
```
