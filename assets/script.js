// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  const passLength = window.prompt(`Input character length between 8 - 128.`)
  
  if (passLength < 8 || passLength > 128) {
    alert(`Enter a value within the specified criteria.`);
  } else {
    const passNumber = window.confirm(`Would you like to include numbers in your password?`);
    const passSymbols = window.confirm(`Would you like to include symbols in your password?`);
    const passUpper = window.confirm(`Would you like to include upper case letters in your password?`);
    const passLower = window.confirm(`Would you like to include lower case letters in your password?`);
    

    if (!passNumber && !passSymbols && !passUpper && !passLower) {
      window.alert(`You must select at least one of the specified criteria.`)
    } else {
          // Functions to generate lower/uppercase letters, symbols, and numbers using charset values located in assets/images folder.
          // This function returns a random value from 97-123 which is a-z using the charset values.
          function randomLowerCase() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          }

          // This function returns a random symbol using the charset values.
          function randomSymbols() {
            return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
          }

          // This function returns a random value from 65-91 which is A-Z using the charset values.
          function randomUpperCase() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          }

          // This function returns a random number from 0-9 using the charset values.
          function randomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
          } 
          const endPassword = parseInt(passLength.length);

          for (i = 0; i < 1000; i++) {
            if (passNumber) {
              randomNumber();
            }

            if (passSymbols) {
              randomSymbols();
            }

            if (passUpper) {
              randomUpperCase();
            }

            if (passLower) {
              randomLowerCase();
            }

            return endPassword;

          }
    }
  } 
}



// Add event listener to generate button


console.log(randomUpperCase())