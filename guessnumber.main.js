var randomNumber = null;

function setDefaults () { 
var min= 1
var max=100
makeRandomNumber(min, max)
}

function makeRandomNumber(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log('what is my random number?' , randomNumber)
return randomNumber
}