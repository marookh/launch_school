// SETUP
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const VALID_OPERATIONS = ['+', '-', '*', '/'];
const AVAILABLE_LANGUAGES = ['en', 'ps'];
let LANGUAGE = 'en';

// Helper functions
function getMessages(language = LANGUAGE, message) {
  return MESSAGES[language][message];
}

function displayMessage(message, ...messages) {
  message = getMessages(LANGUAGE, message);
  console.log('=>', message, ...messages);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperator(operation) {
  return !VALID_OPERATIONS.includes(operation);
}

function doCalculation(num1, num2, operation) {
  let result;
  switch (operation) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    case '/':
      result = Number(num1) / Number(num2);
      break;
  }
  return result;
}

function confirmLanguageChoice(userLang) {
  if (AVAILABLE_LANGUAGES.includes(userLang)) {
    LANGUAGE = userLang;
    if (userLang === LANGUAGE) {
      displayMessage("languageConfirmation");
    } else if (userLang === 'ps') {
      displayMessage("languageConfirmation");
    }
  }
}

// Main program
displayMessage("welcome");

while (true) {
  displayMessage("selectLanguage", AVAILABLE_LANGUAGES.join(', '));
  let defaultLanguage = readline.question().toLowerCase();

  while (!AVAILABLE_LANGUAGES.includes(defaultLanguage)) {
    displayMessage("invalidLanguage", AVAILABLE_LANGUAGES.join(', '));
    defaultLanguage = readline.question().toLowerCase();
  }

  confirmLanguageChoice(defaultLanguage);

  displayMessage("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    console.clear();
    displayMessage("invalidNumber");
    number1 = readline.question();
  }

  displayMessage("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    console.clear();
    displayMessage("invalidNumber");
    number2 = readline.question();
  }

  displayMessage("operator");
  let operation = readline.question();

  while (invalidOperator(operation)) {
    console.clear();
    displayMessage("invalidOperator");
    operation = readline.question();
  }

  let result = doCalculation(number1, number2, operation);
  console.clear();

  displayMessage("result", result);
  displayMessage("anotherOperation");
  let userAnswer = readline.question().toLowerCase();

  while (userAnswer[0] !== 'n' && userAnswer[0] !== 'y') {
    displayMessage("yesOrNo");
    userAnswer = readline.question().toLowerCase();
  }

  if (userAnswer[0] === 'n' || userAnswer[0] === 'no') {
    console.clear();
    displayMessage("lastMessage");
    break;
  }
}

// End
