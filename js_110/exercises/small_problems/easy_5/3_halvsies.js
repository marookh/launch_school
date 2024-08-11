// Halvsies
// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

/**
P:
 Rules:
 - write a function taking an array as the argument
 - returns an array with two sub-arrays as the elements
 - Put first have in the first array, second half of the input array in the second sub-array of output array
 - If the original array contains an odd number of elemtents, place the middle element in the first sub-array
 - Assuming that if the array has one element, place that in the first sub-array, and return the second element as empty array
 - If original array is emtpy, return an array with two empty sub-arrays

 D:
 Input: an array of numbers
 Output: a nested two-layer array, each element is an array with a half of the original array
 Inter: Object to store the result

 [1, 5, 2, 4, 3]
 [[1, 5, 2], [4, 3]]

 result: {arr1: [], arr2: []}
 loop: arr.length % 2 === 1
  if obj['arr1'] < Math.ceil(arr.length / 2)
    obj['arr1'].push(num)
  else {
    obj['arr2'].push(num)
  }
  

  A: HIgh level
  Create an object with two properties each associated with arrays.
  Loop through the input array and store the result in the object.
  Return the object converted to a two-layer array

  A: Steps
  - Define a function called `halvsies` with one parameter `arr`
  - Initialize an empty `halvesies` object with tow properties: arr1: [], arr2: []
  - Initialize `center` (arr.length / 2)

  - Loop through numbers in `arr`
    If `arr.length` is odd
    - Append the elements from index 0, `center + 1` to arr1 in `halvesies`
    - Append the elements from `center + 2`, arr.length to arr2 in `halvesies`
    If `arr.length` is even
    - Append the elements from index 0, `center` to arr1 in `halvesies`
    - Append the elements from index `center`, `arr.length` to arr2 in `halvesies`
  - After loop has ended
  - Return `halvesis` converted to nested array
 */

  function halvsies(array) { 
    const halvsies = {arr1: [], arr2: []};
    const center = array.length / 2;
  
    if (array.length % 2 === 1) {
      halvsies['arr1'].push(...array.slice(0, center + 1));
      halvsies['arr2'].push(...array.slice(center + 1));
    } else {
      halvsies['arr1'].push(...array.slice(0, center));
      halvsies['arr2'].push(...array.slice(center));
    }
  
    return Object.values(halvsies);
  
  }