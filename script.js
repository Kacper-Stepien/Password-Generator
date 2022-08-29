'use strict';

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '_', '=', '[',
    ']', '{', '}', ';', ':', "'", '"', '|', ',', '<', '.', '>', '/', '?'];

const passwordText = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const characterLengthNumber = document.getElementById('character-length-number');
const characterLengthRange = document.getElementById('range-of-characters');
const includeUppercase = document.getElementById('uppercase');
const incudeLowercase = document.getElementById('lowercase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
