var randomNumber = null;
var guessCount = 0;
var startTime = null;
var endTime = null;
var timeElapsed = 0;
// NAME VARIABLES
var nameInputs = document.querySelectorAll('.name-input');
var nameInputOne = document.querySelector('#name-input-one');
var nameInputTwo = document.querySelector('#name-input-two');
var challengerNameOne = document.querySelector('#challenger-one');
var challengerNameTwo = document.querySelector('#challenger-two');

// GUESS VARIABLES
var guessInputs = [nameInputOne, nameInputTwo, playerOneGuess, playerTwoGuess];
var guessInputs = document.querySelectorAll('.guess-input');
// ^^ WHICH OF THESE 'guessInputs' IS THE CORRECT ONE??
var playerOneGuess = document.querySelector('#guess-one');
var playerTwoGuess = document.querySelector('#guess-two');

// GUESS FEEDBACK TEXT
var playerOneText= document.getElementById('guesser-one-text');
var playerTwoText= document.getElementById('guesser-two-text');

//BUTTON VARIABLES
var guessButton = document.querySelector('#guess-button');
var updateButton = document.querySelector(".update");
var closeButton = document.querySelector('.close-button');
var clearButton = document.querySelector('.clear-game');

// HTML VARIABLES
var cardOne = document.querySelector('.card-one')
var rightSide = document.querySelector(".right");

var error = document.querySelector(".error-hidden");

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

// input validation
for (var i = 0; i < nameInputs.length; i++) {
  nameInputs[i].addEventListener('keydown', checkAlphaNumeric);
}
function checkAlphaNumeric(e) {
var re = /[\W]/i;
  if (re.test(e.key)) {
  e.preventDefault();
}
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
updateButton.addEventListener('click', buttonSetRange);

function setPlayerNames() {
  challengerNameOne.innerText = nameInputOne.value;
  challengerNameTwo.innerText = nameInputTwo.value;
}
guessButton.addEventListener('click', setPlayerNames);

function currentGuess () {
  start()
  var guessOneDisplay = document.querySelector('#current-guess-one');
  var guessTwoDisplay = document.querySelector('#current-guess-two');

  guessOneDisplay.innerText = playerOneGuess.value;
  guessTwoDisplay.innerText = playerTwoGuess.value;

  trackGuesses();
}
guessButton.addEventListener('click', currentGuess);

function outOfRange(guessValue) {
  var minInput = document.getElementById('min');
  var maxInput = document.getElementById('max');

  if (parseInt(guessValue) < parseInt(minInput.value) ||
      parseInt(guessValue) > parseInt(maxInput.value)) {
        return true
  } else return false
}

function trackGuesses() {
  guessCount = guessCount + 2
  console.log('guess total', guessCount)
}

//WIP - tracking time elapsed
function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  timeElapsed = seconds;
  console.log(seconds + "seconds");
}

function evaluateGuesses() {
  let oneOutOfRange = outOfRange(playerOneGuess.value)
  let twoOutOfRange = outOfRange(playerTwoGuess.value)

  if (oneOutOfRange) {
    return playerOneText.innerText = "Guess out of Range";
  }

  if (parseInt(playerOneGuess.value) > randomNumber) {
    playerOneText.innerText = "that's too high";
  } else if (parseInt(playerOneGuess.value) < randomNumber) {
    playerOneText.innerText = "that's too low";
  } else { challengerOneWin()
  }

  if(twoOutOfRange) {
    return playerTwoText.innerText = "Guess out of Range";
  }

  if (parseInt(playerTwoGuess.value) > randomNumber) {
    playerTwoText.innerText = "that's too high";
  } else if (parseInt(playerTwoGuess.value) < randomNumber) {
    playerTwoText.innerText = "that's too low";
  } else { challengerTwoWin()
  }
}
guessButton.addEventListener('click', evaluateGuesses);

function challengerOneWin() {
  end()
  playerOneText.innerText = "BOOM!"
  console.log('CHALLENGER ONE WINS! ')
  createCard(nameInputOne.value);
}

function challengerTwoWin(){
  end()
  playerTwoText.innerText = "BOOM!";
  console.log('CHALLENGER TWO WINS!')
  createCard(nameInputTwo.value);
}

function createCard(winner) {
  var challengerOne = nameInputOne.value
  var challengerTwo = nameInputTwo.value
  var newCard =
  `
  <div class=" cards card-two">
  <p class="little-text"><span class="bold" id="challenger-one">${challengerOne}</span> vs <span class="bold" id="challenger-two">${challengerTwo}</span></p>
  <div class="card-divider"></div>
  <p class="challenger-name-text bold">${winner}</p>
  <p class="winner-text light">WINNER</p>
  <div class="card-divider"></div>
  <p class="number-of-guesses"><span class="bold">${guessCount}</span> <span class="light">GUESSES</span></p>
  <p class="minutes-played"><span class="bold">${timeElapsed}</span> <span class="light">SECONDS</span></p>
  <button class="close-button" name="close">X</button>
    </div>
  `
  rightSide.innerHTML = newCard + rightSide.innerHTML;
}

function closeCard() {
  cardOne.classList.add("cards-hidden")
  cardOne.classList.remove("card-one")
  cardOne.classList.remove("cards")
}
closeButton.addEventListener('click', closeCard);

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
 guessButton.addEventListener('click', blankInput);

function clear() {
  document.getElementById("name-input-one").value = "";
  document.getElementById("guess-one").value = "";
  document.getElementById("name-input-two").value = "";
  document.getElementById("guess-two").value = "";
  guessCount = 0;
  timeElapsed = 0;
}
clearButton.addEventListener('click', clear);

function disableClear() {
  if (guessInputs.value == "") {
    document.getElementByClass('.clear-game').disabled = true;
  } else {
    document.getElementByClass('.clear=game').disabled = false;
  }
}