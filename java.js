console.log("Hello World!");


//DOM 
const container = document.querySelector('.container').style;
const playerButtons = document.querySelector('#buttons');
//create player buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.textContent = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";



//CSS style rules (scoreboard)
const scoreboard = document.querySelector('#scoreboard');
//title
const title = document.getElementById('header');
title.style.textAlign = "center";
//display the winner
const scoreText = document.getElementById('winner');
scoreText.textContent = "";
scoreText.style.textAlign = "center";
scoreText.textContent = "";
//instructions
const instructions = document.getElementById('roundCount');
instructions.textContent = "Play a classic game of Rock Paper Scissors against a Computer. Best of 5. Choose your weapon:";
instructions.style.textAlign = 'center';
//count of score
const scoreCount = document.getElementById('scoreCount');
scoreCount.style.textAlign = 'center';
//display both player's selections
const playerSelection = document.getElementById('playerSelection');
const computerSelection = document.getElementById('computerSelection');
playerSelection.style.textAlign = 'center';
computerSelection.style.textAlign = 'center';

scoreboard.appendChild(scoreText);
scoreboard.appendChild(instructions);
scoreboard.appendChild(scoreCount);






//Container styles
container.height = '100vh';
container.width = 'auto';
container.display = 'flex';
container.flexDirection = 'column';
container.justifyContent = 'center';
container.alignItems = 'center';

//scoreboard styles
scoreboard.style.maxWidth = '350px';








//Objective: Create a Rock Paper Scissors game.
//Rock Paper Scissors is a game of 2 players, in this case a 
//user input player against a computer. The players must choose 
//either rock, paper, or scissors. If rock goes against scissors, 
//rock wins. If paper goes against rock, paper wins. If scissors 
//goes against paper, scissors wins. 

//Algorithm
//display a message, prompting a user to input rock, paper, or scissors
//store the user's input in a variable
let userInput = '';
let round = 5;
let playerScore = 0;
let computerScore = 0;
let roundwinner;


//create a variable for the computer's input (random input)
let computerInput;
function getComputerChoice() {
    //use the function math.random to randomly choose the computer's input
    let computerIndex = Math.floor(Math.random() * 3); //3 is not included, so it chooses from 0 to 2
    //use a switch statement to assign the computer's choice
    switch(computerIndex){
        case 0:
            computerInput = 'Rock';
            break;
        case 1:
            computerInput = 'Paper';
            break;
        case 2: 
            computerInput = 'Scissors'
            break;
    }   
    return computerInput;
}


//compare the variables with each scenario to see who wins
function playRound(userInput, computerInput){
    let winner;
    //userInput = prompt('Rock Paper Scissors!\nChoose one: ');
    computerInput = getComputerChoice();
    if (userInput.toLowerCase() == 'rock' && computerInput == 'Rock'){
        scoreText.textContent = "Tie!";
    }
    else if (userInput.toLowerCase() == 'rock' && computerInput == 'Paper'){
        scoreText.textContent = "Computer Wins!";
        winner = 'computer';
        return winner;
    }
    else if (userInput.toLowerCase() == 'rock' && computerInput == 'Scissors'){
        scoreText.textContent = "You Win!";
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Paper'){
        scoreText.textContent = "Tie!";
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Rock'){
        scoreText.textContent = "You Win!";
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Scissors'){
        scoreText.textContent = "Computer Wins!";
        winner = 'computer';
        return winner;
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Scissors'){
        scoreText.textContent = "Tie!";
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Paper'){
        scoreText.textContent = "You Win!";
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Rock'){
        scoreText.textContent = "Computer Wins!";
        winner = 'computer';
        return winner;
    }
    else {
        console.log('not a selection.')
    }

    
}





rock.onclick = () => {
    if (round >= 0) {
        roundwinner = playRound(userInput = 'rock');
        game();
       }
    else checkWinner();
    
};
paper.onclick = () => {
    if (round >= 0) {
        roundwinner = playRound(userInput = 'paper');
        game();
       }
    else checkWinner();
};
scissors.onclick = () => {
   if (round >= 0) {
    roundwinner = playRound(userInput = 'scissors');
    game();
   }
   else checkWinner();
    
};
//create a function that keeps a 5 round game. 
function game() {
    
    if (roundwinner == 'player'){
        playerScore += 1;
    }
    else if (roundwinner == 'computer'){
        computerScore += 1;
    }
    console.log("winner: " + roundwinner);
    console.log("round: " + round);
    console.log("your score: " + playerScore);
    console.log("computer's score: " + computerScore);
    console.log("player chose " + userInput);

    //display the results
    scoreCount.textContent = "Your Score: " + playerScore;
    instructions.textContent = "Round: " + round;
    playerSelection.textContent = "You Chose: " + userInput.toUpperCase();
    computerSelection.textContent = "Computer Chose: " + computerInput.toUpperCase();
    round--;
 }

 function checkWinner() {
    if (playerScore > computerScore) {
        scoreText.textContent = "Game Over! The winner is YOU with the score of: " + playerScore + " out of 5 rounds.";
    }
    else if (playerScore < computerScore) {
        scoreText.textContent = "Game Over! The winner is COMPUTER with the score of: " + computerScore + " out of 5 rounds.";
    }
    else scoreText.textContent = "Game Over! The Game is TIED!";
 }