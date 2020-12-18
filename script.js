// Input Variables
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;
// Alphabet 
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Number 
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special  
character = ["!", "#", "$", "%", "&", "*", "+", "=", " ? ", "@", "_", "~"];

// User input if and else's
function writePassword() {
  
  enter = parseInt(prompt("How many characters would you like your password? Anywhere between 8 and 128"));
  // user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates
      enter = parseInt(prompt("Choose between 8 and 128"));

  } else {
      // prompts
      confirmNumber = confirm("Will this include numbers?");
      confirmCharacter = confirm("Will this include special characters?");
      confirmUppercase = confirm("Will this include Uppercase letters?");
      confirmLowercase = confirm("Will this include Lowercase letters?");
  };

// Add event listener to generate button
get.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});
