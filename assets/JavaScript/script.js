// Array of special characters to be included in password - 23
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password - 10
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password - 26
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password - 26
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const characterMix = [];
const passwordChars = [];

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

// Function to prompt user for password length, and type of characters. Then generate random character for each of the sets selected by the user. One character of each type is pushed into the 'passwordChars' array. The remaining number of characters is chosen from the 'characterMix' array, which is all the selected character set arrays, joined into one.
function getPasswordOptions() {
  lengthString = prompt(`How long would you like your password to be? Please choose between 8 and 128 characters, inclusive.`)

  if (lengthString < 8 || lengthString > 128) {
    alert(`You must select a length betwen 8 and 128, inclusive. Please try again.`);
    return;
  } else {
    lengthNum = parseInt(lengthString);
  }
  const lowercaseConfirm = confirm(`Do you want lowercase characters?`);
  const uppercaseConfirm = confirm(`Do you want uppercase characters?`);
  const numericConfirm = confirm(`Do you want numeric characters?`);
  const specialConfirm = confirm(`Do you want special characters?`);
  if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialConfirm) {
    alert(`You must select at least one character type, please try again.`);
    return; 
  } else {
    if (lowercaseConfirm) {
      randomLower = (getRandom(lowercaseCharacters));
      passwordChars.push(randomLower)
      characterMix.push(lowercaseCharacters)
    } if (uppercaseConfirm) {
      randomUpper = (getRandom(uppercaseCharacters));
      passwordChars.push(randomUpper)
      characterMix.push(uppercaseCharacters);
    } if (numericConfirm) {
      randomNum = (getRandom(numericCharacters));
      passwordChars.push(randomNum);
      characterMix.push(numericCharacters);
    } if (specialConfirm) {
      randomSpecial = (getRandom(specialCharacters));
      passwordChars.push(randomSpecial)
      characterMix.push(specialCharacters);
  }
}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

// Function to generate password with user input. First generate a flat array made up of all the types of character selected by the user.
function generatePassword() {
let characterArray = characterMix.flat();
  for (let i = passwordChars.length; i < lengthNum; i++) {
    let partTwo = (getRandom(characterArray));
    passwordChars.push(partTwo)
  }
  return passwordChars.join("")
}

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
