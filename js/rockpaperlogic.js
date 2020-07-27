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
    const paper = "img/plane.png";
    const rock = "img/electric-guitar.png";
    const scissors = "img/scissors.png";
    switch (randomNumber) {
        case 0:
            document.getElementById("computers_choice").src = rock;
            return 'rock';
        case 1:
            document.getElementById("computers_choice").src = paper;
            return 'paper'
        case 2:
            document.getElementById("computers_choice").src = scissors;
            return 'scissors';
        default:
            return 'paper'

    }
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        let message = "This game was a tie"
        document.getElementById("who_won").innerText = message
       return message
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            let message = "Computer won"
            document.getElementById("who_won").innerText = message
            return message
        }
        else
        {
            let message = "You won"
            document.getElementById("who_won").innerText = message
            return message
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            let message = 'The computer won'
            document.getElementById("who_won").innerText = message
            return message
        }else {
            let message = 'You won'
            document.getElementById("who_won").innerText = message
            return message
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            let message = 'Computer won'
            document.getElementById("who_won").innerText = message
            return message
        }else{
            let message = 'Hey you won'
            document.getElementById("who_won").innerText = message
            return message
        }
    }
    if (userChoice === 'bomb'){
        document.getElementById("computers_choice").src = "img/explosion.png";
        let message = 'BOOM, you won!'
        document.getElementById("who_won").innerText = message
        return message
    }
}

function choice(id) {
    console.log(id)
    const userChoice = getUserChoice(id);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}




