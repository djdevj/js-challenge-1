//DOM elements
const lengthEl = document.getElementById('length');
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

// make the buttons work:
// Copy button
copyEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
// Generate button listen
generateEl.addEventListener('click', () => {
    const Length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, Length);
});
// Generate Pass func
function generatePassword (lower, upper, number, symbol, tentacles) {
    // initialize PW variable (var)
    // filter out unchecked
    // loop over the length of the call gen for each type
    // add reulting PW to the PW var then return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;

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
    const symbols = '!@#$%^&*()';
    return symbols [Math.floor(Math.random() * symbols.length)];
}