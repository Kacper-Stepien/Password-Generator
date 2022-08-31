'use strict';

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '_', '=', '[',
    ']', '{', '}', ';', ':', "'", '"', '|', ',', '<', '.', '>', '/', '?'];

// DOM elements
const passwordText = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const characterLengthNumber = document.getElementById('character-length-number');
const characterLengthRange = document.getElementById('range-of-characters');
const includeUppercase = document.getElementById('uppercase');
const incudeLowercase = document.getElementById('lowercase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const strengthProgress = document.getElementById('progress-bar');
const generateBtn = document.getElementById('generate-btn');

characterLengthNumber.textContent = characterLengthRange.value; // Set value of character length number to value of input range

function generateNewPassword() {
    let allCharacters = [];
    let newPassword = '';

    if (!isAtLeastOneElementChecked()) {
        updatePassword('...');
        return;
    };

    if (includeUppercase.checked)
        allCharacters = allCharacters.concat(uppercase);

    if (incudeLowercase.checked)
        allCharacters = allCharacters.concat(lowercase);

    if (includeNumbers.checked)
        allCharacters = allCharacters.concat(numbers);

    if (includeSymbols.checked)
        allCharacters = allCharacters.concat(symbols);

    allCharacters.sort(() => Math.random() - 0.5);  // Shuffle the array with chars

    let letters = characterLengthRange.value;

    for (let i = 0; i < letters; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomIndex];
    }

    updatePassword(newPassword);
    updateStrengthOfPassword();

};

function updatePassword(newPassword) {
    passwordText.textContent = newPassword;
}

function copyToClipboard() {
    navigator.clipboard.writeText(passwordText.textContent);
};

function updateStrengthOfPassword() {
    let strength = Number(characterLengthRange.value) / Number(characterLengthRange.max);
    let complicating = 0;
    complicating += includeUppercase.checked ? 0.22 : 0;
    complicating += incudeLowercase.checked ? 0.17 : 0;
    complicating += includeNumbers.checked ? 0.29 : 0;
    complicating += includeSymbols.checked ? 0.32 : 0;
    strengthProgress.style.width = `${strength * 100 * complicating}%`;
};

function isAtLeastOneElementChecked() {
    let checkboxes = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            return true;
    }
    return false;
};

// Event Listeners
copyBtn.addEventListener('click', copyToClipboard);

characterLengthRange.addEventListener('change', function () {
    characterLengthNumber.textContent = characterLengthRange.value;
});

generateBtn.addEventListener('click', generateNewPassword);

