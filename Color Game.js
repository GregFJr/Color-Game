var colors = generateRandomColors(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		   squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		   squares[i].style.background = colors[i];
		   squares[i].style.display = "block"
		}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#4682b4";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
		  messageDisplay.textContent = "Correct!"
		  resetButton.textContent = "Play Again?"
		  changeColors(clickedColor);
		  h1.style.background = clickedColor;
		} else {
		  this.style.background = "#232323";
		  messageDisplay.textContent = "Try Agian"
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	} 
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0;  i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

