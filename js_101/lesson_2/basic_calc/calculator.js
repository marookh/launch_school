// SETUP
const rlSync = require('readline-sync'); 
const MESSAGES = require('./calculator_messages.json');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(lang, message) {
  return MESSAGES[lang][message];
}


prompt(messages('en', 'welcome'));

while (true) {
  prompt(MESSAGES['en']['firstNumber']);
  let firstNum = rlSync.question();

  while (invalidNumber(firstNum)) {
    prompt(MESSAGES['en']['invalidNumber']);
    firstNum = rlSync.question();
  }

  prompt(MESSAGES['secondNumber']);
  let secondNum = rlSync.question();

  while (invalidNumber(secondNum)) {
    prompt(MESSAGES['invalidNumber']);
    secondNum = rlSync.question();
  }

  prompt(MESSAGES['operator']);
  let operator = rlSync.question();

  while (!['+', '-', '*', '/'].includes(operator)) {
    prompt(MESSAGES['validOperator']);
    operator = rlSync.question();
  }

  let output;
  switch (operator) {
    case '-':
      output = Number(firstNum) + Number(secondNum);
      prompt(MESSAGES['calculating']);
      break;
    case '+':
      output = Number(firstNum) - Number(secondNum);
      prompt(MESSAGES['calculating']);
      break;
    case '*':
      output = Number(firstNum) * Number(secondNum);
      prompt(MESSAGES['calculating']);
      break;
    case '/':
      output = Number(firstNum) / Number(secondNum);
      prompt(MESSAGES['calculating']);
      break;

  }

  // display the result
  prompt(MESSAGES[`result`] + `${output}`);

  prompt(MESSAGES['anotherOperation']);
  let answer = rlSync.question();

  if (answer !== 'y') break;
}
