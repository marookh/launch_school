// Start
const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

// Helper functions
function displayMessage(message, ...moreMessages) {
  console.log('=>', MESSAGES['en'][message], ...moreMessages);
}

function isInvalidNumber(number) {
  return number.toString().trimStart() === ''
         || number <= 0
         || Number.isNaN(number);
}

function determineUserResponse(resp) {
  if (resp[0] !== 'n') {
    console.clear();
    return true;
  } else {
    console.clear();
    displayMessage('thank');
    return false;
  }
}

function askUserContiueOrStop() {
  displayMessage('again');
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== 'n' && answer !== 'no') &&
        (answer !== 'yes' && answer !== 'y')) {
    console.clear();
    displayMessage('stop');
    answer = readline.question().toLowerCase();
  }

  return determineUserResponse(answer);

}

function getAmount() {
  displayMessage('amount');
  let loanAmount = Number(readline.question());

  while (isInvalidNumber(loanAmount)) {
    console.clear();
    displayMessage('invalidNumber');
    loanAmount = Number(readline.question());
  }

  return loanAmount;

}

function getAPR() {
  displayMessage('APR');
  displayMessage(('example'));

  let interestRate = Number(readline.question());

  while (isInvalidNumber(interestRate)) {
    console.clear();
    displayMessage('invalidNumber');
    interestRate = Number(readline.question());
  }

  return interestRate;

}

function getDuration() {
  displayMessage('duration');
  let loanDurationInYears = Number(readline.question());

  while (isInvalidNumber(loanDurationInYears)) {
    console.clear();
    displayMessage('invalidNumber');
    loanDurationInYears = Number(readline.question());
  }

  return loanDurationInYears;
}

function monthlyRate(rate) {
  let annualInterestRate = rate / 100;
  return annualInterestRate / 12;
}
function calculateRate(amount, rate, years) {
  let monthlyInterestRate = monthlyRate(rate);
  let loanDurationInMonths = years * 12;


  let monthlyPayment = amount *
                       (monthlyInterestRate /
                       (1 - Math.pow((1 + monthlyInterestRate),
                         (-loanDurationInMonths))));

  return monthlyPayment.toFixed(2);
}

function runProgram() {
  let loanAmount = getAmount();
  let interestRate = getAPR();
  let duration = getDuration();
  let payment = calculateRate(loanAmount, interestRate, duration);
  let monthlyInterestRate = monthlyRate(interestRate);

  displayMessage('loanAmount', `$${loanAmount}`);
  displayMessage('years', `${duration} years`);
  displayMessage('annualInterstRate', `${interestRate}`);
  displayMessage('payment', `$${payment}`);
  displayMessage('monthlyInterestRate', `${monthlyInterestRate.toFixed(2)}`);
}

// Main Program
displayMessage('welcome');
displayMessage('info');

do {
  runProgram();
}
while (askUserContiueOrStop());

// End