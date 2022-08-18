// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function randomNumber(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
};
function randomSelection(list) {
  return list [randomNumber(0, list.length - 1)]
}


function generatePassword() {
  var input = window.prompt("How many characters in generated password?");

  var passwordLength = parseInt(input); //parseInt takes input as a value
  if (isNaN(passwordLength)) {
    window.alert("Please enter a valid number between 8 and 128.")
    return
  } 
// ALERT FOR PROPER PASSWORD LENGTH
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid number between 8 and 128.")
    return
  }

// USE window.confirm TO CREATE A WINDOW THAT NEEDS A YES OR NO.
  var lowerCaseConfirm = window.confirm("Include lowercase letters in generated password?")
  var lowerCase = ("a b c d e f g h i j k l m n o p q r s t u v w x y z") // All lowercase characters

  var numberConfirm = window.confirm("Include numeric characters in generated password?");
  var numberCase = ("0 1 2 3 4 5 6 7 8 9"); // All numbers characters

  var symbolsConfirm = window.confirm("Include symbols in generated password?");
  var symbolsCase= ("! @ # $ % ^ & * ( ) _ +"); // All symbols characters

  var upperCaseConfirm = window.confirm("Include uppercase letters in generated password?");
  var upperCase = ("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"); // All uppercase characters

  var passwordOptions = [];
  if (lowerCaseConfirm === true) { // If lowerCaseConfirm is true, then add lowerCase var into passwordOptions var
    passwordOptions.push(lowerCase)
  }
  if (numberConfirm === true) { // If numberConfirm is true, then add numberCase var into passwordOptions var
    passwordOptions.push(numberCase)
  }
  if (symbolsConfirm === true) { // If symbolsConfirm is true, then add symbolsCase var into passwordOptions var
    passwordOptions.push(symbolsCase)
  }
  if (upperCaseConfirm === true) { // If upperCaseConfirm is true, then add upperCase var into passwordOptions var
    passwordOptions.push(upperCase)
  }

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) { //Chooses a random number for password options as long as the length -1 (THE ARRAY STARTS AS 0 SO THE -1 IS NEEDED.)
  var randomList = randomSelection(passwordOptions)
  var randomCharacter = randomSelection(randomList)
  console.log(randomCharacter)
};

  // MAKE SURE TO USE console.log(passwordOptions); EVERY NOW AND THEN TO CHECK THAT THE ARRAYS ARE BEING ADDED TO THE passwordOptions var WHEN THE PROMPTS ARE ANSWERED.
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
