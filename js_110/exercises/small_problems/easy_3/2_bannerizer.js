// Write a function that will take a short line of text, and write it to the
// console log within a box.

// Examples:

// Instructions:
// - Print the string, '+-' + '-' equal to string.length + '-+'
// - Print the string '| ' +' ' equal to string.length + ' |'
// - Print the string '| ' + string + ' |'
// - Print the string '| ' +' ' equal to string.length + ' |'
// - Print the string, '+-' + '-' equal to string.length + '-+'

function logInBox(str) {
  console.log('+-'+ '-'.repeat(str.length) + '-+');
  console.log('| ' + ' '.repeat(str.length) + ' |');
  console.log('| ' + str + ' |');
  console.log('| ' + ' '.repeat(str.length) + ' |');
  console.log('+-'+ '-'.repeat(str.length) + '-+');
}

// A simpler way
function logInBox(string) {
  let length = string.length;
  let dash = '-';
  let space = ' ';

  let banner = `
                +-${dash.repeat(length)}-+
                | ${space.repeat(length)} |
                | ${string} |
                | ${space.repeat(length)} |
                +-${dash.repeat(length)}-+
                `;

  console.log(banner);
}

// Another great way
function logInBox(str) {
  let border = `+-`.concat(`-`.repeat(str.length), `-+`);
  let space = `| `.concat(' '.repeat(str.length), ` |`);
  let text = `| `.concat(str, ` |`);

  let arr = [border, space, text, space, border]
  arr.forEach(line => {
    console.log(line);
  });
}


logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.

