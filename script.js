function computerPlay(){
    move=["Rock","Paper","Scissors"];
    randomInt=Math.floor(3*Math.random())
    return move[randomInt];
}

function standardizeMove(playerMove){
    let result="";
    result+=playerMove[0].toUpperCase();
    result+=playerMove.substr(1).toLowerCase();
    return result;
}

function playerWon(playerMove,computerMove){
    return (playerMove=="Paper"&&computerMove=="Rock")||(playerMove=="Rock"&&computerMove=="Scissors")
    ||(playerMove=="Scissors"&&computerMove=="Paper");
}

function playRound(playerMove,computerMove){
    playerMove=standardizeMove(playerMove);
    if(playerMove==computerMove)
        return `It's a tie,both of you played ${playerMove}`;
    else if(playerWon(playerMove,computerMove))
        return `You Win! ${playerMove} beats ${computerMove}`;
    else 
        return `You Lose! ${computerMove} beats ${playerMove}`;
}

function invalid(playerMove){
    if(playerMove=="")
        return true;
    playerMove=standardizeMove(playerMove);
    return playerMove!="Rock"&&playerMove!="Paper"&&playerMove!="Scissors";
}

var game_time=5;

function game(){
    for(let i=0;i<game_time;i++){
        let playerMove="";
        while(invalid(playerMove)){
            playerMove=prompt("Enter your move(Rock,Paper,Scissors):")
            if(invalid(playerMove))
                console.log("Invalid Move,try again");
        }
        console.log(playRound(playerMove,computerPlay()));
    }
}

game();