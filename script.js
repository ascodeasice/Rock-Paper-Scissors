var playerScore = 0;
var computerScore = 0;
const btns = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result")
const playerScoreText = document.querySelector("#playerScore")
const computerScoreText = document.querySelector("#computerScore")
const resetBtn = document.querySelector("#resetBtn");
var over = false;

function computerPlay() {
    move = ["Rock", "Paper", "Scissors"];
    randomInt = Math.floor(3 * Math.random())
    return move[randomInt];
}

function standardizeMove(playerMove) {
    let result = "";
    result += playerMove[0].toUpperCase();
    result += playerMove.substr(1).toLowerCase();
    return result;
}

function playerWon(playerMove, computerMove) {
    return (playerMove == "Paper" && computerMove == "Rock") || (playerMove == "Rock" && computerMove == "Scissors")
        || (playerMove == "Scissors" && computerMove == "Paper");
}

function playRound(playerMove, computerMove) {
    playerMove = standardizeMove(playerMove);
    if (playerMove == computerMove)
        return `It's a tie,both of you played ${playerMove}`;
    else if (playerWon(playerMove, computerMove)) {
        playerScore++;
        playerScoreText.innerText = `Player score:${playerScore}`;
        if (playerScore >= 5) {
            over = true;
            resetBtn.classList.remove("invisible");
            return "You win!You reached 5 points first!"
        }
        return `You Win! ${playerMove} beats ${computerMove}`;
    }
    else {
        computerScore++;
        computerScoreText.innerText = `Computer score:${computerScore}`;
        if (computerScore >= 5) {
            over = true;
            resetBtn.classList.remove("invisible");
            return "You lose!The computer reached 5 points first!"
        }
        return `You Lose! ${computerMove} beats ${playerMove}`;
    }
}

btns.forEach(btn => btn.addEventListener("click", function (e) {
    if (over)
        return;
    resultDiv.innerText = playRound(e.target.id, computerPlay())
}))

resetBtn.addEventListener("click", function (e) {
    e.target.classList.add("invisible");
    over = false;
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = "Player score:0";
    computerScoreText.innerText = "Computer score:0";
    resultDiv.innerText = "";
})
