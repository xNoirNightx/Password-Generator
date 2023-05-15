// ******* generate element ******* //
var generateBtn = document.querySelector("#generate");

// ******* variables ******* //
var generatePassword = "";
var generateOutput = "";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "{[!@#$%^&*()_+=-~`<>?/]}";
const numbers = "0987654321";



// *******code to start , password length , error message min not met ******* //
function generatePassword() {
 generatePassword = "";
 generateOutput = "";
 var PasswordLength = parseInt(
 prompt("Password length? (Between 8 - 128) ") );
 //console.log(PasswordLength);
 //console.log (typeof PasswordLength);

 while (
  PasswordLength < 8 ||
  PasswordLength > 128 ||
  isNaN(PasswordLength) ) {
  lengthOfPassword = parseInt(
    prompt( "Sorry , Password Length must be (Between 8 - 128)"));
  // console.log(PasswordLength);
  // console.log(typeof PasswordLength);
}

// ******* prompts for variables ******* //





 


// ******* prompts generated password finished ******* //





}

//  ******* generate button ******* //
generateBtn.addEventListener("click", writePassword);
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;