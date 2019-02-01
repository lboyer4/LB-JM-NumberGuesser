var actualNumber
Math.floor(Math.random()*10)+1

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

