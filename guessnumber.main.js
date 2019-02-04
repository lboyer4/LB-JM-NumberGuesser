var randomNumber = null;
// var min;
// var max;

var nameInputOne = document.querySelector('#name-input-one');
var nameInputTwo = document.querySelector('#name-input-two');
var guessInputOne = document.querySelector('.guess-one');
var guessInputTwo = document.querySelector('.guess-two');
var guessButton = document.querySelector('#guess-button');
var guessInputs = [nameInputOne, nameInputTwo, guessInputOne, guessInputTwo];
var challengerNameOne = document.querySelector('#challenger-one');
var challengerNameTwo = document.querySelector('#challenger-two');

guessButton.addEventListener('click', renameFunction);

function renameFunction() {
  challengerNameOne.innerText = nameInputOne.value;
  challengerNameTwo.innerText = nameInputTwo.value;
}

var error = document.querySelector(".error-hidden");

guessButton.addEventListener('click', blankInput);

function blankInput() {
	console.log("test");
  for (var i = 0; i < guessInputs.length; i++) {
  console.log(guessInputs[i].parentNode.querySelector('.error'))
  if (guessInputs[i].value == "") {
   	guessInputs[i].classList.add("empty");
    guessInputs[i].parentNode.querySelector('.error').classList.remove("error-hidden");
    guessInputs[i].parentNode.querySelector('.error').classList.add("error-shown");
  } else {
    guessInputs[i].classList.remove("empty");
   	guessInputs[i].parentNode.querySelector('.error').classList.remove("error-shown");
   	guessInputs[i].parentNode.querySelector('.error').classList.add("error-hidden");
  	}
  }
 }

var clearButton = document.querySelector('.clear-game');
clearButton.addEventListener('click', clear);

function clear() {
  document.getElementById("name-input-one").value = "";
  document.getElementById("guess-one").value = "";
  document.getElementById("name-input-two").value = "";
  document.getElementById("guess-two").value = "";
}

function disableClear() {
	if (guessInputs.value == "") {
		document.getElementByClass('.clear-game').disabled = true;
	} else {
		document.getElementByClass('.clear=game').disabled = false;
	}
}

var currentGuessOne = document.querySelector('#current-guess-one');
var currentGuessTwo = document.querySelector('#current-guess-two');

guessButton.addEventListener('click', currentGuess);

function currentGuess () {
	currentGuessOne.innerText = guessInputOne.value;
  currentGuessTwo.innerText = guessInputTwo.value;
}

var tooSomethingOne = document.querySelector("#guesser-one-text");
var tooSomethingTwo = document.querySelector("#guesser-two-text");

function challengerOneWin() {
 if (guessInputOne.value > randomNumber){
  tooSomethingOne.innerText = "that's too high";
 } else if (guessInputOne.value < randomNumber){
  tooSomethingOne.innerText = "that's too low";
 } else {
  tooSomethingOne.innerText = "winner!"
  createCard();
 }
}

// function challengerTwoWin(){
//  if (guessInputTwo.value > randomNumber){
//   tooSomethingTwo.innerText = "that's too high";
//  } else if (guessInputTwo.value < randomNumber){
//   tooSomethingTwo.innerText = "that's too low";
//  } else {
//   tooSomethingTwo.innerText = "winner!";
//   createCard();
//  }
// }

function createCard(challengerOne, challengerTwo, winner) {
  var challengerOne = nameInputOne.value;
  var challengerTwo = nameInputTwo.value;
  var rightSide = document.querySelector(".right-side");
  var newCard = 
  `<div class="cards">
      <div class="challenger-names">
        <h4 class="challenger-one little-text bold">Challenger One</h4>
        <p>vs</p>
        <h4 class="challenger-two little-text bold">Challenger One</h4>
      </div>
      <div class="winner-text">
        <h2 id="winner-name">Winner</h2>
        <h2 class="display-winner">WINNER</h2>
      </div>
      <div class="guesses-time">
        <p>guesses</p>
        <p>time</p>
        <button class="close-button" name="close">X</button>
      </div>
    </div>`
  rightSide.innerHTML = newCard + rightSide.innerHTML;
}

// var closeButton = document.querySelector('.close-button');
// var cardOne = document.querySelector('.card-one')
// closeButton.addEventListener('click', closeCard);

// function closeCard() {
// 	cardOne.classList.add("cards-hidden")
// 	cardOne.classList.remove("card-one")
// 	cardOne.classList.remove("cards")
// }

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
	
if (playerOneGuess > randomNumber) {
	playerOneText.innerText = "that's too high";
} else if (playerOneGuess < randomNumber) { 
	playerOneText.innerText = "that's too low";
} else { playerOneText.innerText = "correct";
}

if (playerTwoText > randomNumber) {
	playerTwoText.innerText = "that's too high";
} else if (playerTwoGuess < randomNumber) {
 playerTwoText.innerText = "that's too low";
} else { playerTwoText.innerText = "correct";
}}