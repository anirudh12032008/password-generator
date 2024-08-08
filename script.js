const passwordDisplay = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

generateBtn.addEventListener('click', () => {
    const length = 12;
    const includeUpper = includeUppercase.checked;
    const includeLower = includeLowercase.checked;
    const includeNum = includeNumbers.checked;
    const includeSym = includeSymbols.checked;
    
    const password = generatePassword(length, includeUpper, includeLower, includeNum, includeSym);
    passwordDisplay.value = password;
});

function generatePassword(length, includeUpper, includeLower, includeNum, includeSym) {
    let charCodes = [];
    if (includeUpper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeLower) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    if (includeNum) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSym) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    
    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
