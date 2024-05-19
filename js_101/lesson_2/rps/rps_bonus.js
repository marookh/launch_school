const MESSAGES = require('./rps_messages.json');
const readline = require('readline-sync');
const BEST_OF_FIVE = 3;

const WINNING_MOVES = {
  rock: { abbr: 'r', beats: ['scissors', 'lizard'] },
  paper: { abbr: 'p', beats: ['rock', 'spock'] },
  scissors: { abbr: 'sc', beats: ['paper', 'lizard'] },
  lizard: { abbr: 'l', beats: ['paper', 'spock'] },
  spock: { abbr: 'sp', beats: ['scissors', 'rock']}
};

const VALID_CHOICES = Object.keys(WINNING_MOVES);
const CHOICE_ABBRS = validAbbreviations(VALID_CHOICES);

const RANDOM_INDEX = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[RANDOM_INDEX];

let playerScores = 0;
let computerScores = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function validAbbreviations(choices) {
  return choices.map(choice => WINNING_MOVES[choice]['abbr']);
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_MOVES[playerChoice]['beats'].includes(computerChoice);
}

function computerWins(computerChoice, playerChoice) {
  return WINNING_MOVES[computerChoice]['beats'].includes(playerChoice);
}

function abbreviatedChoice(choice) {
  return CHOICE_ABBRS.includes(choice);
}

function displayChoices(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  prompt(MESSAGES['graphics']['lines']);
}

function displayCurrentScore(playerScore, computerScore) {
  prompt(`The current player score is ${playerScore} and computer is ${computerScore}!\n`);
}

function roundWinner(playerChoice, computerChoice,) {
  displayChoices(playerChoice, computerChoice);
  if (playerWins(playerChoice, computerChoice)) {
    prompt(MESSAGES['player']);
    prompt(MESSAGES['graphics']['lines']);
    playerScores += 1;
  } else if (computerWins(computerChoice, playerChoice)) {
    prompt(MESSAGES['computer']);
    prompt(MESSAGES['graphics']['lines']);
    computerScores += 1;
  } else {
    prompt(MESSAGES['tie']);
    prompt(MESSAGES['graphics']['lines']);
  }
}

function displayGameWinner(playerScores, computerScores) {
  if (playerScores === BEST_OF_FIVE) {
    prompt(MESSAGES['playerWon']);
    return true;
  } else if (computerScores === BEST_OF_FIVE) {
    prompt(MESSAGES['computerWon']);
    return true;
  }

  return false;
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt(MESSAGES['graphics']['lines']);

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}
  or ${CHOICE_ABBRS.join(', ')}`);
  prompt(MESSAGES['graphics']['lines']);

  let playerChoice = readline.question();
  while (!VALID_CHOICES.includes(playerChoice) &&
         !CHOICE_ABBRS.includes(playerChoice)) {
    console.clear();
    prompt(MESSAGES['invalidChoice']);
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}
    or ${CHOICE_ABBRS.join(', ')}`);
    prompt(MESSAGES['graphics']['lines']);
    playerChoice = readline.question();
  }

  while (abbreviatedChoice(playerChoice)) {
    console.clear();
    playerChoice = VALID_CHOICES[CHOICE_ABBRS.indexOf(playerChoice)];
  }

  roundWinner(playerChoice, computerChoice);
  displayCurrentScore(playerScores, computerScores);

  if (displayGameWinner(playerScores, computerScores) === true) {

    playerScores = 0;
    computerScores = 0;

    prompt(MESSAGES['playAgain']);
    prompt(MESSAGES['graphics']['lines']);
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer !== 'y') {
      prompt(MESSAGES['yOrn']);
      prompt(MESSAGES['graphics']['lines']);
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') {
      console.clear();
      prompt(MESSAGES['lastMessage']);
      break;
    }
    console.clear();
  } else {
    prompt(MESSAGES['playAgain']);
    prompt(MESSAGES['graphics']['lines']);
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer !== 'y') {
      console.clear();
      prompt(MESSAGES['yOrn']);
      prompt(MESSAGES['graphics']['lines']);
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') {
      console.clear();
      prompt(MESSAGES['lastMessage']);
      break;
    }
  }
}