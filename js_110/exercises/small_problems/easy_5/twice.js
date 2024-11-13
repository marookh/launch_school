
function twice(int) {
  let numStr = String(int);
  let length = numStr.length;
  let two = 2;
  if (length % two === 1) {
    return int * two;
  }

  if (length % two === 0) {
    let leftSideInt = numStr.slice(0, length / two);
    let rightSideInt = numStr.slice(length / two);

    if (leftSideInt !== rightSideInt) {
      return int * two;
    }
  }

  return int;
}

//Examples:

console.log(twice(37));          // 74
console.log(twice(44));          // 44 
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888 
console.log(twice(107));         // 214 
console.log(twice(103103));      // 103103 
console.log(twice(3333));        // 3333 
console.log(twice(7676));        // 7676 