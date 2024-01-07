console.log("Hello World!");

//Objective: Create a Rock Paper Scissors game.
//Rock Paper Scissors is a game of 2 players, in this case a 
//user input player against a computer. The players must choose 
//either rock, paper, or scissors. If rock goes against scissors, 
//rock wins. If paper goes against rock, paper wins. If scissors 
//goes against paper, scissors wins. 

//Algorithm
//display a message, prompting a user to input rock, paper, or scissors
//store the user's input in a variable
let userInput;
 


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
    userInput = prompt('Rock Paper Scissors!\nChoose one: ');
    computerInput = getComputerChoice();
    if (userInput.toLowerCase() == 'rock' && computerInput == 'Rock'){
        alert('Game is tied.');
    }
    else if (userInput.toLowerCase() == 'rock' && computerInput == 'Paper'){
        alert('Computer Wins.');
        winner = 'computer';
        return winner;
    }
    else if (userInput.toLowerCase() == 'rock' && computerInput == 'Scissors'){
        alert('Congrats. You Won!');
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Paper'){
        alert('Game is tied.');
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Rock'){
        alert('Congrats. You Won!');
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'paper' && computerInput == 'Scissors'){
        alert('L. The Computer Won.');
        winner = 'computer';
        return winner;
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Scissors'){
        alert('Game is tied.');
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Paper'){
        alert('Congrats. You Won!');
        winner = 'player';
        return winner;
    }
    else if (userInput.toLowerCase() == 'scissors' && computerInput == 'Rock'){
        alert('You lost.');
        winner = 'computer';
        return winner;
    }
    else {
        alert('not a selection.')
    }

    
}

//create a function that keeps a 5 round game. 
function game(){
    let round = 5;
    let score = 0;
    let roundwinner;
    console.log('test');
    for (round; round > 0; round--){
        roundwinner = playRound(userInput, computerInput);
        if (roundwinner == 'player'){
            score += 1;
        }
        else if (roundwinner == 'computer'){
            score -= 1;
        }
        console.log(roundwinner);
        console.log(score);
        console.log(round);
    }
}
game();
