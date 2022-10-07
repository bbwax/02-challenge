//Steps
//When Generate button is pushed then promps pop up with password criteria : length (8-128), upper/lowercase, numbers, special characters 







// Create reference to generate element on HTML
var generateBtn = document.querySelector("#generate");

// Set Variables for password generation

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var special = "~`!@#$%^&*()_-+={}[]\|;:,<>./?";
var number = "0123456789";




// Write password to the #password input
function writePassword() {
  //Create password prompts
  var lengthPrompt = prompt("Select password length between 8 and 128 characters");
  var uppercasePrompt = confirm("Include uppercase letters?");
  var lowercasePrompt = confirm("Include lowercase letters?");
  var specialPrompt = confirm("Include Special Characters?");
  var numberPrompt = confirm("Include numbers?");


  var lengthNumber = +lengthPrompt;



  var password = generatePassword(lengthNumber, uppercasePrompt, lowercasePrompt, specialPrompt, numberPrompt);

  var passwordText = document.querySelector("#password");


  passwordText.value = password;




}

//Generate Password
function generatePassword(lengthNumber, uppercasePrompt, lowercasePrompt, specialPrompt, numberPrompt) {
  var characters = [];
  var finalPassword = [];
 
//populate characters array with values from prompts
  if (uppercasePrompt) {
    characters.push(...uppercase)
  };
  if (lowercasePrompt) {
    characters.push(...lowercase)
  }
  if (specialPrompt) {
    characters.push(...special)
  };
  if (numberPrompt) {
    characters.push(...special)
  }
// populate final password with desired length
  for (i = 0; i < lengthNumber; i++) {

    var random = Math.floor(Math.random() * characters.length - 1)
    finalPassword.push(characters[random])


  }
//return final password and remove commas from array
  console.log(finalPassword.join(""));
  return finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
