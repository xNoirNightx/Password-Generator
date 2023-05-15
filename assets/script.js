// generate element
var generateBtn = document.querySelector("#generate");

// variables
var generatePassword = "";
var generateOutput = "";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "{[!@#$%^&*()_+=-~`<>?/]}";
const numbers = "0987654321";



// code to start 
function generatePassword() {
 var generatePassword = "";
 var generateOutput = "";



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;








}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
