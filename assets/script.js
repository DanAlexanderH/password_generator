// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Functions to generate lower/uppercase letters, symbols, and numbers using charset values located in assets/images folder.
// This function returns a random value from 97-123 which is a-z using the charset values.
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// This function returns a random value from 65-91 which is A-Z using the charset values.
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// This function returns a random number from 0-9 using the charset values.
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// This function returns a random symbol using the charset values.
function randomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(randomSymbols())