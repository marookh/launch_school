const rlSync = require('readline-sync');
const WINNING_SCORE = 3;
const AVAILABLE_MOVES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const MOVE_SHORTCUTS = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  li: 'lizard',
  sp: 'spock'
};

const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function prompt(msg) {
  console.log(msg);
}

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,
    winCounts: {
      rock: 0,
      paper: 0,
      scissors: 0,
      lizard: 0,
      spock: 0,
    },
    humanWinCounts: {
      rock: 0,
      paper: 0,
      scissors: 0,
      lizard: 0,
      spock: 0,
    },

    analyzeHistory() {
      let weights = {
        rock: 1,
        paper: 1,
        scissors: 1,
        lizard: 1,
        spock: 1,
      };

      for (let move in this.humanWinCounts) {
        let humanWins = this.humanWinCounts[move];
        let totalWins = this.winCounts[move] + humanWins;

        if (totalWins > 0) {
          let humanWinRate = humanWins / totalWins;

          if (humanWinRate > 0.6) {
            weights[move] *= 0.5;
          } else if (this.winCounts[move] > humanWins) {
            weights[move] *= 1.5;
          }
        }
      }

      return weights;
    },

    choose() {
      let weights = this.analyzeHistory();

      let choices = [];
      for (let move in weights) {
        let weight = Math.floor(weights[move] * 10);
        for (let i = 0; i < weight; i++) {
          choices.push(move);
        }
      }

      let randomIndx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndx];
    },
  };

  return Object.assign(playerObject, computerObject);
}


function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        prompt(`Choose: ${Object.entries(MOVE_SHORTCUTS).join(', ')}`);
        choice = rlSync.question().toLowerCase();

        if (MOVE_SHORTCUTS[choice]) {
          choice = MOVE_SHORTCUTS[choice];
        }

        if (AVAILABLE_MOVES.includes(choice)) break;
        console.clear();
        prompt('Sorry, invalid choice.');
      }
      this.move = choice;
    }

  };

  return Object.assign(playerObject, humanObject);
}

const scoreKeeper = {
  humanScore: 0,
  computerScore: 0,

  incrementHumanScore() {
    this.humanScore += 1;
  },

  incrementComputerScore() {
    this.computerScore += 1;
  },

  displayScore() {
    prompt(`Your score: ${this.humanScore} Computer score: ${this.computerScore}`);
    prompt(`-------------------------------`);
  },

  checkForWinner() {
    if (this.humanScore === WINNING_SCORE) {
      prompt("Congratulations! You won the match!");
      return true;
    } else if (this.computerScore === WINNING_SCORE) {
      prompt("The computer won the match! Better luck next time!");
      return true;
    }
    return false;
  }

};

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  history: [],

  nameTheGame() {
    return AVAILABLE_MOVES.map(move => move[0].toUpperCase() + move.slice(1))
      .join(', ');

  },

  displayWelcomeMessage() {
    prompt(`Welcome to the ${this.nameTheGame()} Game!`);
  },

  displayGoodbyeMessage() {
    prompt(`Thanks for playing ${this.nameTheGame()}. Goodbye!`);
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    prompt(`You chose: ${humanMove}`);
    prompt(`Computer chose: ${computerMove}`);

    let roundResult;

    if (WINNING_COMBINATIONS[humanMove].includes(computerMove)) {
      scoreKeeper.incrementHumanScore();
      roundResult = 'You win';

      this.computer.humanWinCounts[computerMove]++;

    } else if (WINNING_COMBINATIONS[computerMove].includes(humanMove)) {
      scoreKeeper.incrementComputerScore();
      roundResult = 'Computer Wins';

      this.computer.winCounts[computerMove]++;
    } else {
      roundResult = 'tie';
    }

    this.history.push({ humanMove, computerMove, roundResult });

    scoreKeeper.displayScore();

    return scoreKeeper.checkForWinner();
  },

  displayHistory() {
    prompt(`History of moves:`);
    this.history.forEach((entry, index) => {
      prompt(`Round ${index + 1}: You "${entry.humanMove}", Computer "${entry.computerMove}".`);
      prompt(`Result: ${entry.roundResult}`);
      prompt(`-------------------------------`);
    });

  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = rlSync.question();
    while (!["y", "yes", "yeah", "yep", "no", "n", "nope"].includes(answer)) {
      console.clear();
      console.log("Please choose: (y/n)");
      answer = rlSync.question();
    }
    return answer.toLowerCase()[0] === "y";
  },


  resetScore() {
    scoreKeeper.humanScore = 0;
    scoreKeeper.computerScore = 0;
  },

  play() {
    this.displayWelcomeMessage();
    this.resetScore();

    while (true) {
      this.human.choose();
      this.computer.choose();
      console.clear();

      if (this.displayWinner()) {
        break;
      }

      this.displayHistory();

      if (!this.playAgain()) {
        console.clear();
        break;
      }
      console.clear();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();