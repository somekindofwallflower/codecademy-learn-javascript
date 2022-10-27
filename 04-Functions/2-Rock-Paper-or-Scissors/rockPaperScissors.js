// Input rock, paper or scissors.
let userInput = 'ROCK';

// Getting the user choice.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Please type: rock, paper, or scissors.')
    return 'Error!';
  }
}

// Randomizing the computer choice.
function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Checking who is a winner.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'Error!') {
    return 'Error!';
  } else if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You won!';
  } else {
    return 'Computer won!';
  }
}

// Creating playGame function.
const playGame = () => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log('\nLets play the game!\n');
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// Starting the game
playGame();