const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += ACE_VALUE;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += FACE_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values
    .filter(value => value === "A")
    .forEach(_ => {
      if (sum > GOAL_SUM) sum -= 10;
    });

  return sum;
}

function busted(total) {
  return total > GOAL_SUM;
}

function playerTurn(playerCards, playerTotal, deck) {
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = readline.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);

      console.clear();
      prompt("You chose to hit!");
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${playerTotal}.`);
    }

    if (playerTurn === "s" || busted(playerTotal)) break;
  }
}

function dealerTurn(dealerCards, dealerTotal, deck) {
  while (dealerTotal < DEALER_MIN_SUM) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);

    prompt(`Dealer's cards: ${hand(dealerCards)}.`);
  }
}

function detectResult(dealerTotal, playerTotal) {
  if (playerTotal > GOAL_SUM) {
    return "PLAYER_BUSTED";
  } else if (dealerTotal > GOAL_SUM) {
    return "DEALER_BUSTED";
  } else if (playerTotal > dealerTotal) {
    return "PLAYER_WINS";
  } else if (dealerTotal > playerTotal) {
    return "DEALER_WINS";
  } else {
    return "TIE";
  }
}

function displayRoundRes(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log("==============");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${playerTotal}`);
  console.log("==============");
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("You busted! Dealer wins!");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted! You win!");
      break;
    case "PLAYER_WINS":
      prompt("You win!");
      break;
    case "DEALER_WINS":
      prompt("Dealer wins!");
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

function playAgain() {
  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    prompt("Invalid response. Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  return answer === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(", ");
}

console.clear();
prompt("Welcome to Twenty-One!");

let playerWins = 0;
let dealerWins = 0;
let roundNumber = 1; // Initialize the round number

while (true) {
  // Display the current round at the beginning
  console.clear();
  prompt(`Round ${roundNumber} begins!`);
  prompt(`Current score: Player ${playerWins}, Dealer ${dealerWins}`);
  console.log("-------------");

  // Check if a match winner is already determined
  if (playerWins === 3 || dealerWins === 3) {
    console.clear();
    if (playerWins === 3) {
      prompt("Congratulations! You are the match winner!");
    } else if (dealerWins === 3) {
      prompt("Dealer wins the match. Better luck next time!");
    }

    if (!playAgain()) break; // Ask if the user wants to replay the entire match

    // Reset scores and round number for a new series
    playerWins = 0;
    dealerWins = 0;
    roundNumber = 1;
    console.clear();
    continue;
  }

  // Initialize deck and deal cards
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

  // Player's turn
  playerTurn(playerCards, playerTotal, deck);
  playerTotal = total(playerCards); // Update total after player's turn

  console.clear(); // Clear console after player action
  if (busted(playerTotal)) {
    displayResults(dealerTotal, playerTotal);
    dealerWins++; // Dealer wins if player busts
    roundNumber++; // Move to the next round
    if (!playAgain()) break;
    continue;
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  // Dealer's turn
  prompt("Dealer turn...");
  dealerTurn(dealerCards, dealerTotal, deck);
  dealerTotal = total(dealerCards); // Update total after dealer's turn

  console.clear(); // Clear console before final results
  if (busted(dealerTotal)) {
    prompt(`Dealer total: ${dealerTotal}.`);
    displayResults(dealerTotal, playerTotal);
    playerWins++; // Player wins if dealer busts
    roundNumber++; // Move to the next round
    if (!playAgain()) break;
    continue;
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  // Compare totals and display results
  displayRoundRes(dealerCards, playerCards, dealerTotal, playerTotal);
  let result = detectResult(dealerTotal, playerTotal);

  if (result === "PLAYER_WINS") {
    playerWins++;
    prompt("You win this round!");
  } else if (result === "DEALER_WINS") {
    dealerWins++;
    prompt("Dealer wins this round!");
  } else {
    prompt("It's a tie!");
  }

  roundNumber++; // Increment the round number after each round
  if (!playAgain()) break;
}

console.log("-------------");
console.log("We hope to see you again soon!");
