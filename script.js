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
// Space is for the Uppercase conversion
space = [];
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);
// Choices declared outside the if statement
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};


// Add event listener to generate button
var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});
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
  // 1 positive option
  else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
// 2 positive options 
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}