//DOM elements
const tentaclesEl = document.getElementById('tentacles');
const lowercaseEl = document.getElementById('result');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('result');
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');


// place fucntions in object
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// gen functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*()";
    return symbols [Math.floor(Math.random() * symbols.length)];
}