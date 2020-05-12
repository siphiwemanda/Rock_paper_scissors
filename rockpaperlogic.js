
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock"|| "paper"|| "scissors" || "bomb"){
        return userInput;
    }else{
        console.log("error")
    }
};

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper'
        case 2:
            return 'scissors';
        default:
            return 'paper'

    }
}
function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
       return "this game was a tie"
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return "computer won"
        }else{
            return "you won"
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'The computer won'
        }else {
            return 'you won'
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer won'
        }else{
            return 'hey you won'
        }
    }
    if (userChoice === 'bomb'){
        return 'BOOM, you won!'
    }

}
const playGame =() => {
 const userChoice = getUserChoice('bomb');
 const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log(`The computer threw: ${computerChoice}`);
 console.log(determineWinner(userChoice, computerChoice));
}

playGame();




