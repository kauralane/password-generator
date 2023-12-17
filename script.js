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
// number in prompt 1 needs to be length of password
// MAYBE - if confirm = true, add that array to a new array. Then, you will have one array containing all the different characters that can be used. Select characters at random from this new array, based on the 'length' input. (But how to ensure that at least one type of each character is taken? Something to do with index numbers?) 

// Perhaps - nested array. Then you can select to choose x characters from each array subset?

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

// Array of special characters to be included in password - 23
var specialCharacters = ['@', '%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password - 10
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password - 26
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password - 26
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordLength() {
  lengthString = prompt(`How long would you like your password to be? Please choose between 8 and 128 characters, inclusive.`)
  lengthNum = parseInt(lengthString);

  if (lengthString < 8 || lengthString > 128) {
    alert(`You must select a length betwen 8 and 128, inclusive. Please try again.`);
    getPasswordLength()
    // each time you do this wrong, when you then do it right, it asks you the prompts as many times as you got this wrong
  }}

  function getPasswordOptions() {
  lowercaseConfirm = confirm(`Do you want lowercase characters?`);

  uppercaseConfirm = confirm(`Do you want uppercase characters?`);

  numericConfirm = confirm(`Do you want numeric characters?`);

  specialConfirm = confirm(`Do you want special characters?`);

  if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
    alert(`You must select at least one character type, please try again.`);
    getPasswordOptions()
  }

  return lengthNum, lowercaseConfirm, uppercaseConfirm, numericConfirm 
  }

getPasswordLength()
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

const characterMix = [];
const passwordChars = [];

// Process for generating random character for each of the sets selected by the user. One character of each type is pushed into the 'passwordChars' array. The remaining number of characters is chosen from the 'characterMix' array, which is all the selected character set arrays, joined into one.
if (lowercaseConfirm === true) {
  randomLower = (getRandom(lowercaseCharacters));
passwordChars.push(randomLower)
characterMix.push(lowercaseCharacters)
} if (uppercaseConfirm === true) {
  randomUpper = (getRandom(uppercaseCharacters));
  passwordChars.push(randomUpper)
  characterMix.push(uppercaseCharacters);
} if (numericConfirm === true) {
  randomNum = (getRandom(numericCharacters));
  passwordChars.push(randomNum);
  characterMix.push(numericCharacters);
} if (specialConfirm === true) {
  randomSpecial = (getRandom(specialCharacters));
  passwordChars.push(randomSpecial)
  characterMix.push(specialCharacters);
}

// Generate one large (flat) array made up of the types of characters selected by the user. This will be used to choose the remaining number of characters.
let characterArray = characterMix.flat();

// Function to generate password with user input
function generatePassword() {
  for (let i = passwordChars.length; i < lengthNum; i++) {
    partTwo = (getRandom(characterArray));
    passwordChars.push(partTwo)}
    return passwordChars.join("")
}

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