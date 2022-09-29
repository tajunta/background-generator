var h3 = document.querySelector("h3");
var color1 = document.querySelector(".c1");
var color2 = document.querySelector(".c2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  h3.textContent = body.style.background + ";";
}

function randomColor() {
  var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";

  h3.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomColor);
