// . A UUID is a type of identifier that uniquely identifies items. It's used to prevent conflicts when multiple systems create new items without syncing. UUIDs use massive randomization to provide a vast number of possible values (around 3.4 X 10^38), minimizing the chance of conflicts. Each UUID is a 32-character string of hexadecimal (0-9, a-f) digits split into 5 sections in an 8-4-4-4-12 pattern. Could you please write a function that generates a UUID as a string? 

// UUID = a 32-character string
// hexadecimal (0-9, a-f)
// string is splited into 5 sections
// 8-4-4-4-12 pattern is used
// Strings are selected randomly

// D:
// Input: n/a
// Output: UUID as a string
// Int: 
// - an array of hexadecimal characters
// - an array of fiveour sections [8, 4, 4, 4, 12]

// A:
// Create an array of hexadecimal characters 
// Create an array of 5 sections, numbers
// Create an empty `uuid` string

// Iterate through sections in `sections`
//  Iterate through `section` using index
//  - Create a `randomIdx` to the result of multiplying the 1 or 0 to `characters.length` rounded off to a non-negative integer
//  - Reassign `uuid` by concatinating a character in `character` at `randomIdx`
//  After ending the inner iteration

// If the index of `section` is less `sections.length -1`
// Reassign `uuid` by concatinating a `-` to it

// After ending the outer iteration, return `uuid`

function getUUID() {
  const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const sections = [8, 4, 4, 4, 12];
  let uuid = '';

  sections.forEach((section, sectionIdx) => {
    for (let idx = 1; idx <= section; idx++) {
      const randomIdx = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIdx];
    }

    if (sectionIdx < sections.length -1) {
      uuid += '-';
    }
  });
  return uuid;
}


console.log(getUUID())


