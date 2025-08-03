let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const Msg = document.querySelector(".result");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        Msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        Msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorepara.innerText = compScore;
        Msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        Msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    Msg.innerText = "Game Was Draw. Play Again...";
    Msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    console.log("user choice :",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice :",compChoice);

    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){ // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice==="paper"){ //rock, scissor
            userWin = compChoice==="scissor" ? false : true;
        } else { //rock, paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});
