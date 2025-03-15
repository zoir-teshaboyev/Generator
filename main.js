var _a;
document.getElementById('generate').addEventListener('click', function () {
    var length = 12;
    var numbers = document.getElementById('numbers').checked;
    var lowerCase = document.getElementById('lowercase').checked;
    var upperCase = document.getElementById('uppercase').checked;
    var symbols = document.getElementById('symbols').checked;
    var spaces = document.getElementById('spaces').checked;
    var numberChars = '0123456789';
    var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbolChars = '!@#$%^&*()_+-\[]{}<>?/';
    var spaceChar = ' ';
    var allChars = '';
    if (numbers)
        allChars += numberChars;
    if (lowerCase)
        allChars += lowerChars;
    if (upperCase)
        allChars += upperChars;
    if (symbols)
        allChars += symbolChars;
    if (spaces)
        allChars += spaceChar;
    if (allChars === '') {
        alert('parametr toplmadi.');
        return;
    }
    var password = '';
    for (var i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    document.getElementById('password').textContent = password;
});
(_a = document.getElementById('copy')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    alert('Parol nusxalandi!');
});
;
