// 5. Compute and display the total age of the male members in the family 
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
}; 

// Initialize a `total` to 0;
// Iterate through objects in munsters
//  Create gender and age variables to the gender and age of each member
//  If the gender of the member is male
//  Increment `total` by the age of that member
// End looping
// Print `total`

let total = 0; 
for (let member in munsters) {
  let gender = munsters[member]['gender'];
  let age = munsters[member]['age'];

  if (gender === 'male') {
    total += age;
  }
}

console.log(total); // 444