
// for player 1
var randomNumber1 = Math.floor(((Math.random())*6)+1)
var imgSrc = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src",imgSrc)

// for player 2
var randomNumber2 = Math.floor(((Math.random())*6)+1)
var imgSrc = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",imgSrc)


//Who won message]
var player1 = "Player 1"
var player2 = "Player 2"
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1+ "- Wins!🚩 ";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2+ "- Wins!🚩 ";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

// button handelers
// Changing players name
document.querySelectorAll(".btn")[1].addEventListener("click", changeName)
function changeName() {
     player1 = prompt("enter player1 name")
     player2 = prompt("enter player2 name")     
        document.querySelectorAll("h2")[0].innerHTML=player1;
        document.querySelectorAll("h2")[1].innerHTML=player2;
        document.querySelector("h1").innerHTML = player1+ "- Wins!🚩 ";
        document.querySelector("h1").innerHTML = player2+ "- Wins!🚩 ";       
} 


