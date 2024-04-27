const readline = require('readline-sync');

function displayMessage(message) {
  console.log(`=> ${message}`)
}

function isInvalidNumber(number) {
  return number.trimStart() === '' ||
         Number(number) < 0 ||
         Number.isNaN(Number(number));
}

displayMessage('Welcome to Car Loan Calculator!');
displayMessage('This calculator allows you for basic loan calculation such as mortgage.');

while (true) {
  displayMessage('Enter the loan amount');
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    console.clear();
    displayMessage("Invalid number. Please enter a positive number:");
    loanAmount = readline.question();
  }

  displayMessage('Enter the Annual Interest Rate:');
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    console.clear();
    displayMessage("Invalid number. Please enter a positive number:");
    interestRate = readline.question();
  }

  displayMessage('Enter the loan duration in (years): ');
  let loanDurationInYears = readline.question();

  while (isInvalidNumber(loanDurationInYears)) {
    console.clear();
    displayMessage("Invalid number. Please enter a positive number:");
    loanDurationInYears = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;

  let loanDurationInMonths = Number(loanDurationInYears) * 12;


  let monthlyPayment = Number(loanAmount) *
                       (monthlyInterestRate / 
                       (1 - Math.pow((1 + monthlyInterestRate), 
                       (-Number(loanDurationInMonths)))));
                     
  displayMessage(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  displayMessage(`Your monthly interest rate is $${monthlyInterestRate.toFixed(2)}`);

  displayMessage("Another calculation?");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      console.clear();
      displayMessage('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

  if (answer[0] === 'n') {
    console.clear();
    displayMessage('Thank you for choosing Car Loan Calculator! Have a nice day!');
    break;
  }
}
