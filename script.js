// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

// Password variable values: 

// Alphabetical characters
// Numeric characters
// Special characters 
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&",, "(", ")", "*", "+", , "-", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
space = [];

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);
// Assignment Code
var get = document.querySelector("#generate");
// Add event listener to generate button
get.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function writePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this include numbers?");
        confirmCharacter = confirm("Will this include special characters?");
        confirmUppercase = confirm("Will this include Uppercase letters?");
        confirmLowercase = confirm("Will this include Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // Determine choices
    // Else if for 1 positive option
        else if (confirmCharacter) {
            choices = character;
        }
        else if (confirmNumber) {
            choices = number;
        }
        else if (confirmLowercase) {
            choices = alpha;
        }
     // Else if for 2 positive options 
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
       // Else if for 3 positive options
       else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }    
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
 // Created space variable to fill uppercase conversion
 else if (confirmUppercase) {
    choices = space.concat(alpha2);
    };

    var password = [];

// Random selection for variables: 
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    };

}