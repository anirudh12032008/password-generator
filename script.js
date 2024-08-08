const pwdDisplay = document.getElementById('password');
const genBtn = document.getElementById('generateBtn');
const upperChk = document.getElementById('includeUppercase');
const lowerChk = document.getElementById('includeLowercase');
const numChk = document.getElementById('includeNumbers');
const symChk = document.getElementById('includeSymbols');

const UPPER = getCharCodes(65, 90);
const LOWER = getCharCodes(97, 122);
const NUMBERS = getCharCodes(48, 57);
const SYMBOLS = getCharCodes(33, 47).concat(getCharCodes(58, 64)).concat(getCharCodes(91, 96)).concat(getCharCodes(123, 126));

genBtn.addEventListener('click', () => {
    const length = 12;
    const upper = upperChk.checked;
    const lower = lowerChk.checked;
    const num = numChk.checked;
    const sym = symChk.checked;
    
    pwdDisplay.value = createPwd(length, upper, lower, num, sym);
});

function createPwd(len, upper, lower, num, sym) {
    let chars = [];
    if (upper) chars = chars.concat(UPPER);
    if (lower) chars = chars.concat(LOWER);
    if (num) chars = chars.concat(NUMBERS);
    if (sym) chars = chars.concat(SYMBOLS);
    
    let pwd = [];
    for (let i = 0; i < len; i++) {
        const code = chars[Math.floor(Math.random() * chars.length)];
        pwd.push(String.fromCharCode(code));
    }
    return pwd.join('');
}

function getCharCodes(low, high) {
    let arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}
