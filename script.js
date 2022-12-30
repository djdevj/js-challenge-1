// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

// random function identifiers
const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

}
// generate event listener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol,
        length
        );

    // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
})

// copy to clipboard 
copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied!');
})

// generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('typeCount: ', typesCount);

    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    // console.log('typesArray ', typesArray);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0];
            // console.log('functionName: ', functionName);

            generatePassword += randomFunction[functionName]();
        });
    }

    const finalPassword = generatePassword.slice(0, length);

    return finalPassword;

    // console.log(generatePassword.slice(0, length));
}

//generator functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbol = '!@#$%^&*()';
    return symbol[Math.floor(Math.random() * symbol.length)]
}