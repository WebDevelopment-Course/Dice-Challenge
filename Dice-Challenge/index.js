var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src",randomImageSource1);
document.querySelector("img.img2").setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerText = "Player 1 Wins⛳️";
} else if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerText = "Player 2 Wins⛳️";
} else {
    document.querySelector(".container h1").innerText = "Draw 🤝";
  }
