/*Create a game of 'Rock Paper Scissors' that runs until one player has three wins
    Store the player names and number of wins for each player in variables
    Use a while loop to run the game until one player has 3 wins
    Use the following code to randomly select a weapon
var weapons = ["rock", "paper", "scissors"];
var weaponOfChoice = weapons[Math.floor(Math.random() * weapons.length)];
    Output each players hand to the console
    Use an if or switch statement to determine a winner of the round
    Output the round winner's name to the console
    Create a way to track how many rounds each player has won
    When one player wins 3 rounds, announce that player's name as the game winner
    Push the code to our class GitHub Repo
    See below for all possible winning outcomes*/


var player1 = 0;
var player2 = 0;
var weapons = ["rock", "paper", "scissors"];
//var weapons.length = [4,5,6];
var weaponOfChoice = weapons[Math.floor(Math.random()* weapons.length)];

while (player1< 3 && player2 <3){
    player1weapon = weaponOfChoice = weapons[Math.floor(Math.random()* weapons.length)];
    console.log(player1+  weaponOfChoice);
    player2weapon = weaponOfChoice = weapons[Math.floor(Math.random()* weapons.length)];
    console.log(player2+  weaponOfChoice);
    if(player1weapon === player2weapon){
        console.log("It's a tie");
    }
    if(player1weapon>player2weapon){
        console.log("Player one wins this round"+ player1++);
    } else {
        console.log("Player two wins this round"+ player2++);
    }
 if  (player1>player2) {
     console.log("Player one wins game");
    } else{
    console.log("Player two wins game");
    }
}
