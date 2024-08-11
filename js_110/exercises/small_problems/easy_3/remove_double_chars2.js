// // Inspired by Bob
// const crunch = (str) => str.split('')
//                             .reduce((newStr, char) =>
//                             (newStr.endsWith(char) ? newStr : newStr + char), '')

// // Inspired by William
// const crunch = (str) => {
//   return str.split('').reduce((newStr, char) => {
//     return newStr.endsWith(char) ? newStr : newStr + char;
//   }, '');
// };

// // Inspired by Jatinder
// const crunch = (str) => {
//   return [].reduce.call(str, (result, char) => {
//     if (result[result.length - 1] !== char) result += char;
//     return result;
//   }, '');
// }

// // Inspired by Spencer
// const crunch = (str) => {
//   return str.split('').reduce((newStr, char, idx) => {
//     if (char !== str[idx + 1]) {
//       newStr += char;
//     };
//     return newStr;
//   }, '')
// }

// // Inspired by Marc
// const crunch = (str) => {
//   return str.split('').reduce((newStr, char) => {
//     if (!newStr.endsWith(char)) {
//       newStr += char;
//     }
//     return newStr;
//   }, '')
// }

// // Inspired by Sam
// const crunch = (str) => {
//   let strArr = str.split('');
//   return strArr.reduce((newStr, char, idx, array) => {
//     if (idx === 0) newStr += char;
//     else if (char !== array[idx - 1]) newStr += char;
//     return newStr;
//   }, '')
// }

// // Inspired by Dubosej1
// const crunch = (str) => {
//   let strArr = str.split("");
//   return strArr.reduce((newStr, char, idx, array) => {
//     if (char === array[idx + 1]) {
//       return newStr;
//     } else {
//       return [...newStr, char];
//     }
//   }, []).join("");
// }