var randomNumber = null;
// var min;
// var max;

<<<<<<< HEAD
var nameInputOne = document.querySelector('#name-input-one');
var nameInputTwo = document.querySelector('#name-input-two');
var nameButton = document.querySelector('#guess-button');
var challengerNameOne = document.querySelector('#challenger-one');
var challengerNameTwo = document.querySelector('#challenger-two');

nameButton.addEventListener('click', renameFunction);

function renameFunction() {
  challengerNameOne.innerText = nameInputOne.value;
  challengerNameTwo.innerText = nameInputTwo.value;
}
=======
function setDefaults() { 
	makeRandomNumber();
}

function makeRandomNumber(min = 1, max = 100) {
	min = Math.ceil(min);
	max = Math.floor(max);
	randomNumber = Math.floor(Math.random() * (max - min)) + min;
	console.log('what is my random number?' , randomNumber);
	return randomNumber;
}

function buttonSetRange(evt) {
	var minInput = document.getElementById('min');
	var maxInput = document.getElementById('max');
	if (min != null && max != null) {
		makeRandomNumber(minInput.value.toString(), maxInput.value.toString());
		console.log(document.querySelector('.low-range').innerText);
		document.querySelector('.low-range').innerText = minInput.value;
		document.querySelector('.high-range').innerText = maxInput.value;
	}
} 

function makeGuesses() {
	var playerOneGuess = document.getElementById('guess-one').value;
	var playerTwoGuess = document.getElementById('guess-two').value;

	var playerOneText= document.getElementById('guesser-one-text').innerText;
	var playerTwoText= document.getElementById('guesser-two-text').innerText;

	// var playerOneText.innerText = playerOneGuess;
 //  var playerTwoText.innerText = playerTwoGuess;

if (playerOneGuess > randomNumber) {
	playerOneText = 'Too High';
} else if (playerOneGuess < randomNumber) { 
	playerOneText = 'Too Low';
} else { playerOneText = 'Correct!';
}

if (playerTwoText > randomNumber) {
	playerTwoText = 'Too High';
} else if (playerTwoGuess < randomNumber) {
 playerTwoText ='Too Low';
} else { playerTwoText = 'Correct!';
}}
>>>>>>> 12b9ab08ca8e0f6309212408e3d5634d3d6c7ee1

