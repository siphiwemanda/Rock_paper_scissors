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
            document.getElementById("computers_choice").src = paper;
            return 'paper'
    }
}

function determineWinner(userChoice, computerChoice) {
    let UserWon = "You won"
    let ComputerWon = "Computer won"
    let Draw = "This game was a tie"
    if(userChoice === computerChoice){
        document.getElementById("who_won").innerText = Draw
       return Draw
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            document.getElementById("who_won").innerText = ComputerWon
            return ComputerWon
        }
        else
        {
            document.getElementById("who_won").innerText = UserWon
            return UserWon
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            document.getElementById("who_won").innerText = ComputerWon
            return ComputerWon
        }else {
            document.getElementById("who_won").innerText = UserWon
            return UserWon
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            document.getElementById("who_won").innerText = ComputerWon
            return ComputerWon
        }else{
            document.getElementById("who_won").innerText = UserWon
            return UserWon
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




