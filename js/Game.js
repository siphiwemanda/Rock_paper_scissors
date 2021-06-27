class Game {
    CompChoice;
    UserChoice;
    constructor(id) {
        this.userChoice(id)
        this.ComputerChoice()
    }

    Choices = {
        Rock: "Rock",
        Paper: "Paper",
        Scissors: "Scissors",
        Spock: "Spock",
        Lizard: "Lizard"
    }

    winner(){
 if (this.UserChoice === Choices.Rock && )
    }
    
    ComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 5);


        switch (randomNumber) {
            case 0:
                this.CompChoice =  Choices.Rock
                break;
            case 1:
                this.CompChoice =  Choices.Paper
                break;
            case 2:
                this.CompChoice =  Choices.Scissors
                break;
            case 3:
                this.CompChoice =  Choices.Lizard
                break;
            case 4:
                this.CompChoice =  Choices.Spock
                break;
            default:
                this.CompChoice =  Choices.Scissors
        }
    }

    userChoice(id) {
        Choices.forEach(choice => {
            if (choice === id){
                this.UserChoice = choice;
            }
        })
    }
}