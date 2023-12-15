// PSEUDOCODE

// Generate a password when the button is clicked
// Button --> onclick --> call function that generates password

// Present a series of prompts for password criteria
  // Prompt(Select how many characters you would like in your password, between 8 and 128 inclusive.) - will need ParseInt
    // Confirm(Would you like lowercase?)
    // Confirm(Would you like uppercase?)
    // Confirm(Would you like numeric characters?)
    // Confirm(Would you like special characters?)

// need to store each answer in a variable
// !number in prompt 1 needs to be length of password
// if confirm1 true, select 1 random element from array lowercaseCharacters. (var 1)
// if confirmt2 true, select 1 random element from array uppercaseCharacters (var 2)
// if confirm3 true, select 1 random element from array numericCharacters (var 3)
//if confirm4 true, select 1 random element from array specialCharacters. (var 4)
//if confirm1, 2, 3, 4 all false, alert user they must have at least one character type must be selected

  // Length of password
    // At least 8 characters but no more than 128.
  // Character types
    // Lowercase
    // Uppercase
    // Numeric
    // Special characters($@%&*, etc)

// Code should validate for each input and at least one character type should be selected

// Once prompts are answered then the password should be generated and displayed in an alert or written to the page
  // alert(Your password is: [var1][var2][var3][var4])

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowercaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var uppercaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
lengthString = prompt(`How long would you like your password to be? Please choose between 8 and 128 characters, inclusive.`)
lengthNum = parseInt(lengthString);

lowercaseConfirm = confirm(`Do you want lowercase characters?`)

uppercaseConfirm = confirm(`Do you want uppercase characters?`)

numericConfirm = confirm(`Do you want numeric characters?`)

specialConfirm = confirm(`Do you want special characters?`)
return userResponses = [lengthNum, lowercaseConfirm, uppercaseConfirm, numericConfirm]
}

getPasswordOptions()
// console.log(userResponses)

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

// Process for 
  if (lowercaseConfirm === true) {
    randomLower = (getRandom(lowercaseCharacters))
  } if (uppercaseConfirm === true) {
    randomUpper = (getRandom(uppercaseCharacters))
  } if (numericConfirm === true) {
    randomNum = (getRandom(numericCharacters))
  } if (specialConfirm === true) {
    randomChar = (getRandom(specialCharacters))
}

let characterMix = [randomLower, randomUpper, randomNum, randomChar]

// start process again if user doesn't select at least one character type
if (lowercaseConfirm === false && uppercaseConfirm === false & numericConfirm === false && specialConfirm === false) {
alert(`You must select at least one character type.`);
getPasswordOptions()}


// Function to generate password with user input
function generatePassword() {
  console.log(`Your password is ${characterMix}`)
}

generatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);