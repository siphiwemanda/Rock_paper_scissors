const UserWon = "You won";
const ComputerWon = "Computer won";
const Draw = "This game was a tie";
const paper = "img/plane.png";
const rock = "img/electric-guitar.png";
const scissors = "img/scissors.png";
const BOOM = 'BOOM, you won!'
const explosion = "img/explosion.png"

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock"|| "paper"|| "scissors" || "bomb"){
        return userInput;
    }else{
        console.log("error")
    }
}
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return showComputerChoice(rock, "rock")
        case 1:
            return showComputerChoice(paper, "paper")
        case 2:
            return showComputerChoice(scissors, "scissors")
        default:
            return showComputerChoice(paper, "paper")
    }
}
function showComputerChoice(computerChoice, choice) {
    document.getElementById("computers_choice").src = computerChoice;
    return choice
}
function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        return whoWonMessage(Draw)
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return whoWonMessage(ComputerWon)
        } else {
            return whoWonMessage(UserWon)
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return whoWonMessage(ComputerWon)
        }else {
            return whoWonMessage(UserWon)
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return whoWonMessage(ComputerWon)
        }else{
            return whoWonMessage(UserWon)
        }
    }
    if (userChoice === 'bomb'){
        showComputerChoice(explosion, "this is an explosion")
        return whoWonMessage(BOOM)
    }
}
function whoWonMessage(message) {
    document.getElementById("who_won").innerText = message
    return message
}
function choice(id) {
    const userChoice = getUserChoice(id);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
