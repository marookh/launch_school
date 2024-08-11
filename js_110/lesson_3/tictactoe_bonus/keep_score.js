// Keep Score
// Keep track of how many times the player and computer each win, 
// and report the scores after each game. The first player to win 5 games wins the 
// overall match (a series of 2 or more games). The score should reset to 0 
// for each player when beginning a new match. Don't use any global variables. 
// However, you may want to use a global constant to represent the number of games 
// needed to win the match.


// Instructions:
// 1. You need to ensure that you are checking the win condition after each game 
// rather than when the board is full because a game can end before the board is completely filled.

// 2. Instead of checking the scores while the board is full, you should check the 
// scores when a player wins a game.

// 3. The game should keep track of the number of games won by the player and the 
// computer separately.

// 4. Before incrementing the score for a player or computer, you need to check 
// if the game has been won by any of the players. 
// If so, increment the corresponding score and reset the board for the next game.

// 5. The logic should include checking for the winning condition after each move 
// or at the end of a game, not after the board is full.

// 1. Define a global constant to represent the number of games needed to win the match.
// 2. Create a function that encapsulates the game logic and state.
// 3. Pass the necessary game state as arguments to the function and return the updated state after each game.
// 4. Keep track of the player and computer wins within the game state.
// 5. Report the scores after each game and reset the scores when starting a new match.

const GAMES_TO_WIN_MATCH = 5;

function playGame(scores) {
    // Play the game and determine the winner (player or computer)
    // const winner = Math.random() < 0.5 ? 'player' : 'computer';

    let winner = detectWinner(board);
    // Update the wins based on the winner
    if (winner === 'player') {
        scores[winner]++;
    } else {
        scores[winner]++;
    }

    // Report the scores after each game
    prompt(`Player: ${scores.player} | Computer: ${scores.computer}`);

    // Check if any player has won the match
    if (scores.player === GAMES_TO_WIN_MATCH || scores.computer === GAMES_TO_WIN_MATCH) {
        prompt(`${scores.player === GAMES_TO_WIN_MATCH ? 'Player' : 'Computer'} wins the match!`);
        // Reset the scores for a new match
        scores.player = 0;
        scores.computer = 0;
    }

    // Return the updated wins
    return scores;
}

let scores = {
  player: 0,
  computer: 0,
}


// Play multiple games
for (let i = 1; i <= 10; i++) {
  console.log(`Game ${i}:`);
  scores = playGame(scores);
}