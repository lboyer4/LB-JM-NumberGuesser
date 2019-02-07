var cardOne = document.querySelector('.card-one');
var challengerNameOne = document.querySelector('#challenger-one');
var nameInputOne = document.querySelector('#name-input-one');
var nameInputTwo = document.querySelector('#name-input-two');
var challengerNameTwo = document.querySelector('#challenger-two');
var challengerOne = nameInputOne.value;
var challengerTwo = nameInputTwo.value;
var clearButton = document.querySelector('.clear-game');
var closeButton = document.querySelector('.close-button');
var currentGuessOne = document.querySelector('#current-guess-one');
var currentGuessTwo = document.querySelector('#current-guess-two');
var error = document.querySelector(".error-hidden");
var guessButton = document.querySelector('#guess-button');
var guessInputOne = document.querySelector('.guess-one');
var guessInputs = [nameInputOne, nameInputTwo, guessInputOne, guessInputTwo];
var guessInputs = document.querySelectorAll('.guess-input');
var guessInputTwo = document.querySelector('.guess-two');
var highRange = document.querySelector('.high-range')
var lowRange = document.querySelector('.low-range');
var maxInput = document.getElementById('max');
var minInput = document.getElementById('min');
var nameInputs = document.querySelectorAll('.name-input');
var playerOneText= document.getElementById('guesser-one-text')
var playerTwoText= document.getElementById('guesser-two-text')
var randomNumber = null;
var resetButton = document.querySelector('.reset-game')
var rightSide = document.querySelector(".right-side");
var tooSomethingOne = document.querySelector("#guesser-one-text");
var tooSomethingTwo = document.querySelector("#guesser-two-text");
var updateButton = document.querySelector(".update");


// closeButton.addEventListener('click', closeCard);
updateButton.addEventListener('click', buttonSetRange);
updateButton.addEventListener('click', sadSetRange);
updateButton.addEventListener('click', buttonSetRange);
guessButton.addEventListener('click', renameFunction);
guessButton.addEventListener('click', blankInput);
guessButton.addEventListener('click', outOfRange);
guessButton.addEventListener('click', currentGuess);
guessButton.addEventListener('click', increaseNumber);
guessButton.addEventListener('click', createCard);
clearButton.addEventListener('click', clear);
clearButton.addEventListener('click', disableClear);
resetButton.addEventListener('click', reset)

function sadSetRange() {
  if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
    alert("Min range needs to be lower.");
  } else if (parseInt(maxInput.value) < parseInt(minInput.value)) {
    alert("Max range needs to be higher.");
  }
}

for (var i = 0; i < nameInputs.length; i++) {
  nameInputs[i].addEventListener('keydown', checkAlphaNumeric);
}
function checkAlphaNumeric(e) {
var re = /[\W]/i;
  if (re.test(e.key)) {
  e.preventDefault();
  }
}

function renameFunction() {
  challengerNameOne.innerText = nameInputOne.value;
  challengerNameTwo.innerText = nameInputTwo.value;
  challengerOneWin();
  challengerTwoWin();
}

function blankInput() {
  for (var i = 0; i < guessInputs.length; i++) {
  console.log(guessInputs[i].parentNode.querySelector('.error'))
  if (guessInputs[i].value == "") {
    // guessInputs[i].classList.add("empty");
    guessInputs[i].parentNode.querySelector('.error').classList.remove("error-hidden");
    guessInputs[i].parentNode.querySelector('.error').classList.add("error-shown");
  } else {
    guessInputs[i].classList.remove("empty");
    guessInputs[i].parentNode.querySelector('.error').classList.remove("error-shown");
    guessInputs[i].parentNode.querySelector('.error').classList.add("error-hidden");
    }
  }
 }

function clear() {
  document.getElementById("name-input-one").value = "";
  document.getElementById("guess-one").value = "";
  document.getElementById("name-input-two").value = "";
  document.getElementById("guess-two").value = "";
}

function reset() {
  clear();
  lowRange.innerText = minInput.value;
  highRange.innerText = maxInput.value;
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  currentGuessOne.innerText = "--";
  currentGuessTwo.innerText = "--";
  playerOneText.innerText = "that's too";
  playerTwoText.innerText = "that's too";
  makeRandomNumber();
} 

function disableClear() {
  if (guessInputs.value == "") {
    document.querySelector('.clear-game').disabled = true;
  } else {
    document.querySelector('.clear-game').disabled = false;
  }
}

guessButton.addEventListener('click', currentGuess);
function currentGuess () {
  currentGuessOne.innerText = guessInputOne.value;
  currentGuessTwo.innerText = guessInputTwo.value;
}

function challengerOneWin() {
 if (parseInt(guessInputOne.value) > randomNumber){
  tooSomethingOne.innerText = "that's too high";
 } else if (parseInt(guessInputOne.value) < randomNumber){
  tooSomethingOne.innerText = "that's too low";
 } else {
  tooSomethingOne.innerText = "winner!"
  createCard();
 }
}

function challengerTwoWin() {
 if (parseInt(guessInputTwo.value) > randomNumber){
  tooSomethingTwo.innerText = "that's too high";
 } else if (parseInt(guessInputTwo.value) < randomNumber){
  tooSomethingTwo.innerText = "that's too low";
 } else {
  tooSomethingTwo.innerText = "winner!";
  increaseNumber();
 }
}

function createCard() {
 var card = document.createElement('div');
 card.innerHTML =
 `<div class="card-one">
    <p class="little-text"><span class="bold" id="challenger-one">CHALLENGER 1 NAME</span> vs <span class="bold" id="challenger-two">CHALLENGER 2 NAME</span></p>
    <div class="card-divider"></div>
    <p class="challenger-name-text bold">CHALLENGER 2 NAME</p>
    <p class="winner-text light">WINNER</p>
    <div class="card-divider"></div>
    <p class="number-of-guesses"><span class="bold">47</span> <span class="light">GUESSES</span></p> 
    <p class="minutes-played"><span class="bold">1.35</span> <span class="light">MINUTES</span></p>
    <button class="close-button" name="close">X</button>
    </div>`
 rightSide.prepend(card);
}

function outOfRange() {
  if (parseInt(guessInputOne.value) > parseInt(maxInput.value)) {
    alert("Guess too high.");
  } else if (parseInt(guessInputTwo.value) > parseInt(maxInput.value)) {
    alert("Guess too high.");
  } else if (parseInt(guessInputOne.value) < parseInt(minInput.value)) {
    alert("Guess too low.");
  } else if (parseInt(guessInputTwo.value) < parseInt(minInput.value)) {
    alert("Guess too low.");
  }
}

closeButton.addEventListener('click', closeCard);
function closeCard() {
  cardOne.classList.add("cards-hidden")
  cardOne.classList.remove("card-one")
  cardOne.classList.remove("cards")
}

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

function increaseNumber() {
  var number = randomNumber.value;
  number = maxInput.value + 10;
  highRange.innerText = number.value;
}

function buttonSetRange(evt) {
  var minInput = document.getElementById('min');
  var maxInput = document.getElementById('max');
  if (min != null && max != null) {
    outOfRange();
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
}

function trackGuesses() {
  guessCount = guessCount + 2;
  console.log('guess total', guessCount);
}
 