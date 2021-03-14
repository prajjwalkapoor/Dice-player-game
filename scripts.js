var player1 = "Player1"
var player2 = "Player2"
//Function to roll the dice
function rollTheDice() {
    // for player 1
var randomNumber1 = Math.floor(((Math.random())*6)+1)
var imgSrc = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src",imgSrc)

// for player 2
var randomNumber2 = Math.floor(((Math.random())*6)+1)
var imgSrc = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",imgSrc)

   if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = player1+ "- Wins!🚩 ";
    }
    else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2+ "- Wins!🚩 ";
      }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function nameEdit() {

    player1 = prompt("enter player1 name")
    player2 = prompt("enter player2 name")     
       document.querySelectorAll("h2")[0].innerHTML=player1;
       document.querySelectorAll("h2")[1].innerHTML=player2;

}