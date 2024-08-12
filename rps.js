let result = '';
let computerChoice = '';
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
const score{
    userScore:0,
    computerScore: 0
};


function playedrock(){
    computerChoice = generateComputerChoice();
    if(computerChoice === 'rock'){
        result = 'Tie';
    } else if(computerChoice === 'paper'){
        result = 'Computer Wins';
    } else {
        result = 'User Wins';
    }
    addEventListener('click', ()=>{
        if(result === 'User Wins'){
            userScore += 1;
        } else if(result === 'Computer Wins'){
            computerScore += 1;
        }
    })
    document.getElementById("message").innerHTML = "You chose rock and Computer chose: " + computerChoice;

    document.getElementById("result").innerHTML = result;
}

function playedpaper(){
    computerChoice = generateComputerChoice();
    if(computerChoice === 'rock'){
        result = 'User Wins';
    } else if(computerChoice === 'paper'){
        result = 'Tie';
    } else {
        result = 'Computer Wins';
    }
    document.getElementById("message").innerHTML = "You chose paper and Computer chose: " + computerChoice;

    document.getElementById("result").innerHTML = result;
}

function playedscissors(){
    computerChoice = generateComputerChoice();
    if(computerChoice === 'rock'){
        result = 'Computer Wins';
    } else if(computerChoice === 'paper'){
        result = 'User Wins';
    } else {
        result = 'Tie';
    }

    document.getElementById("message").innerHTML = "You chose scissors and Computer chose: " + computerChoice;

    document.getElementById("result").innerHTML = result;
}


console.log(userScore, computerScore);

function generateComputerChoice(){
    const randomnumber = Math.floor(Math.random() * 4);
    if (randomnumber === 0) {
        return 'rock';
    } else if (randomnumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

