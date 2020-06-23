
var randomNumber1 = Math.floor(Math.random()*6) + 1; // to generage random number between 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // to generate random dice img

var randomImgSource = "images/" + randomDiceImg; // to generate random img source

document.querySelectorAll("img")[0].setAttribute("src", randomImgSource); // now changing the src each time we refresh

 //----------------------------

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//-----------------------------

if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "Player 1 Wins🏆";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins🏆";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
