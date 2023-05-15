// ******* generate element ******* //
var generateBtn = document.querySelector("#generate");

// ******* variables ******* //
var generatePassword = "";
var generateOutput = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
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

// ******* prompts for variables *repeat for all 4 options******* //
const uppercase = confirm("Include Uppercase Letters? ");
  if (uppercase === true) {
    generatePassword += upperCase;
    // console.log(generatePassword);
  }
const lowercase = confirm("Include lowercase letters? ");
  if (lowercase === true) {
    generatePassword += lowerCase;
    // console.log(generatePassword);
  }
const special = confirm("Include special characters? ");
  if (special === true) {
    generatePassword += specialChars;
    // console.log(generatePassword);
  }
const number = confirm("Include numbers? ");
  if (number === true) {
    generatedPassword += numbers;
    // console.log(generatePassword);
  }

 


// ******* prompts generated password finished ******* //

if (generatePassword.length === 0) {
  return "Sorry, Please selecte types of charcters.";
}
return generateOutput;
}



//  ******* generate button ******* //
generateBtn.addEventListener("click", function (){
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}};
