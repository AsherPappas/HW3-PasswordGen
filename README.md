# HW3-PasswordGen

This project was designed as a homework assignment for University of Utah's coding bootcamp for web development.

I used HTML, CSS, and Javascript documents create a random password generator. It allows you to randomly generate a password between 8-128 characters with or without special characters, numbers, uppercase letters, and lowercase letters.

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link.
Pseudo Code
The user will be prompted to choose from the following password criteria: 8 and 128 characters
The user will recieve a confirm for:
Password containing special characters, numbers, and uppercase
4 variables to include special characters, uppercase, lowercase, and numbers.
This will need to randomly generate a selection or randomly select array data, so math.random and math.floor will need to be used.
The application should validate user input and ensure that at least one character type is selected.
If, else if statement
Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
Event listener will determine the password output with function to populate the value into the test area.

This project includes the following features:
A generate button
This will send the user a series of prompts and confirms
After user data is collected, a random password will be generated using Javascript.

A Text area
This text area will display the users password once it is generated

Acceptance criteria for this project:
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Features:
One HTML Pages
Index.html
Contains basic user input items and buttons with divs and ids
One CSS Page
Styles.css
Contains centering and styling for html user input features
Contains media queries
One Javascript Page * Contains: * Variables, including arrays and value placeholders * Two event listeners * Two if/else if statements * One function outside of first event listener
Authors
