var randomNumber = null;
function setDefaults() { 
	makeRandomNumber();
}

function makeRandomNumber(min = 1, max = 100) {
	var min = Math.ceil(min);
	var max = Math.floor(max);
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

function makeGuesses () {
	var changeThis = document.getElementById('current-guess-one').value;
	return changeThis = 5;
}

function makeGuesses() {
	var playerOneGuess = document.getElementById('guess-one').value;
	var playerTwoGuess = document.getElementById('guess-two').value;

	var playerOneText= document.getElementById('guesser-one-text').innerText;
	var playerTwoText= document.getElementById('guesser-two-text').innerText;

	console.log(playerOneText);
	console.log(playerTwoText);
	// var playerOneText.innerText = playerOneGuess;
 //  var playerTwoText.innerText = playerTwoGuess;

	if (playerOneGuess > randomNumber) {
		playerOneText.innerText = 'Too High';
	} else if (playerOneGuess < randomNumber) { 
		playerOneText = 'Too Low';
	} else { playerOneText.innerText = 'Correct!';
	}

	if (playerTwoGuess > randomNumber) {
		playerTwoText.innerText = 'Too High';
	} else if (playerTwoGuess < randomNumber) {
	 playerTwoText ='Too Low';
	} else { playerTwoText.innerText = 'Correct!';
	}
}



// var nameInputOne = document.querySelector('#name-input-one');
// var nameInputTwo = document.querySelector('#name-input-two');
// var nameButton = document.querySelector('#guess-button');
// var challengerNameOne = document.querySelector('#challenger-one');
// var challengerNameTwo = document.querySelector('#challenger-two');

// nameButton.addEventListener('click', renameFunction);

// function renameFunction() {
//   challengerNameOne.innerText = nameInputOne.value;
//   challengerNameTwo.innerText = nameInputTwo.value;
// }

