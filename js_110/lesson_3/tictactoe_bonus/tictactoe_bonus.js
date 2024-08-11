const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const WHO_CHOOSE_FIRST = ['computer', 'player', 'choose'];

// Create prompt function for user inquiry
const prompt = (msg) => console.log(`=> ${msg}`);

// Display the board
function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {}

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function joinOr(arr, delim = ', ', wDelim = 'or') {
  let list = "";

  if (arr.length === 1) {
    list = arr.join();
  } else if (arr.length === 2) {
    list = arr.join(` ${wDelim} `);
  } else {
    for (let idx = 0; idx < arr.length; idx++) {
      let currNum = arr[idx];
      
      if (idx !== arr.length - 1) {
        list += currNum + delim;
      } else {
        list += `${wDelim} ${currNum} `;
      }
    }
  } 

  return list; 
}

function playerChoosesSquare(board) {
  let square; // Declare squre so that we can use outside the loop

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = readline.question().trim(); // trimmed to allow spaces input

    if (emptySquares(board).includes(square)) break; // break if it's a valid square
  
    prompt('Sorry this is not a valid square.');
    
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  // offense first
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // deffence mode
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (square === '5') {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
  }
} else { // just pick a random square
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  console.clear();
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'computer';
    }
  }

  return null;
}

function capitalize(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function isInvalid(ans) {
  ans = ans.toLowerCase();
  const yeses = ['yes', 'y', 'yep'];
  const no = ['no', 'nope', 'n'];

  if (yeses.includes(ans) || no.includes(ans)) {
    return false;
  }
  return true;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function matchWinner(scores) {
  if (scores.player === GAMES_TO_WIN_MATCH || scores.computer === GAMES_TO_WIN_MATCH) {
    prompt(`${scores.player === GAMES_TO_WIN_MATCH ? 'Player' : 'Computer'} wins the match!`);
    // Reset the scores for a new match
    scores.player = 0;
    scores.computer = 0;
 }

}

function playGame(board, scores) {

  if (someoneWon(board)) {
    prompt(`${capitalize(detectWinner(board))} win!`);
    scores[detectWinner(board)]++
  } else {
    prompt(`It's a tie!`);
  }

  // Report the scores after each game
  prompt(`Player: ${scores.player} | Computer: ${scores.computer}`);

  // Check if any player has won the match
  matchWinner(scores);
  return scores;
}

while (true) {
let board = initializeBoard();
let scores = {
  player: 0,
  computer: 0,
}

while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
}

displayBoard(board);
playGame(board, scores);  

prompt(`play again? (y or n)`) 
let answer = readline.question().toLowerCase();
  
while (isInvalid(answer)) {
  prompt('Please inter (y) for yes and (n) no.');
  answer = readline.question().toLowerCase();
}

if (answer[0] === 'n') break;
}

console.clear();
prompt(`Thank you for playing the Tic Tac Toe game!`);
