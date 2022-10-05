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
  var lengthPrompt = prompt ("Select password length between 8 and 128 characters");
  var uppercasePrompt = prompt ("Include uppercase letters? Type yes or no.");
  var lowercasePrompt = prompt ("Include lowercase letters? Type yes or no.");
  var specialPrompt = prompt ("Include Special Characters? Type yes or no.");
  var numberPrompt = prompt ("Include numbers? Type yes or no.");

  var upperBool = uppercasePrompt.toLowerCase() == "yes";
  var lowerBool = lowercasePrompt.toLowerCase() == "yes";
  var specialBool = specialPrompt.toLowerCase() == "yes";
  var numberBool = numberPrompt.toLowerCase() == "yes";
  var lengthNumber = +lengthPrompt;



  var password = generatePassword(lengthNumber,upperBool,lowerBool,numberBool, specialBool);

  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;




}

//Generate Password
function generatePassword(lengthNumber,upperBool,lowerBool,numberBool, specialBool){
 var finalPassword = []; 
 
  for (i = 0; i < lengthNumber; i++ ) {
    if (upperBool) {
      finalPassword.push (uppercase[Math.floor(math.random()*uppercase.length)])
     };
    if (lowerBool) {
      finalPassword.push (lowercase[Math.floor(math.random()*lowercase.length)])
     };
    if (specialBool) {
      finalPassword.push (special[Math.floor(math.random()*special.length)])
     };
    if (numberBool) {
      finalPassword.push (special[Math.floor(math.random()*special.length)])
     };
    else ();
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
