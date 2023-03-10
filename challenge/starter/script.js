/** @format */

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var useLowercase = confirm("Include lowercase letters in the password?");
  var useUppercase = confirm("Include uppercase letters in the password?");
  var useNumeric = confirm("Include numeric characters in the password?");
  var useSpecial = confirm("Include special characters in the password?");
  while (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    useLowercase = confirm("Include lowercase letters in the password?");
    useUppercase = confirm("Include uppercase letters in the password?");
    useNumeric = confirm("Include numeric characters in the password?");
    useSpecial = confirm("Include special characters in the password?");
  }
  console.log(useUppercase, useSpecial, useNumeric, useLowercase);

  if (useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    return "Just lowercase";
  } else if (useLowercase && useUppercase && !useNumeric && !useSpecial) {
    return "Just lowercase & uppercase";
  } else if (useLowercase && useUppercase && useNumeric && !useSpecial) {
    return "Just lowercase & uppercase & numeric";
  } else if (useLowercase && useUppercase && !useNumeric && useSpecial) {
    return "Just lowercase & uppercase & special";
  } else if (useLowercase && !useUppercase && useNumeric && !useSpecial) {
    return "Just lowercase & numeric";
  } else if (useLowercase && useUppercase && !useNumeric && useSpecial) {
    return "Just lowercase && special";
  } else if (!useLowercase && useUppercase && !useNumeric && !useSpecial) {
    return "Just uppercase";
  } else if (!useLowercase && useUppercase && useNumeric && !useSpecial) {
    return "Just uppercase & numeric";
  } else if (!useLowercase && useUppercase && !useNumeric && useSpecial) {
    return "Just uppercase & special";
  } else if (!useLowercase && useUppercase && useNumeric && useSpecial) {
    return "Just uppercase & numeric & special";
  } else if (!useLowercase && !useUppercase && useNumeric && !useSpecial) {
    return "Just numeric";
  } else if (!useLowercase && !useUppercase && useNumeric && useSpecial) {
    return "Just numeric & special";
  } else if (!useLowercase && !useUppercase && !useNumeric && useSpecial) {
    return "Just special";
  } else if (useLowercase && useUppercase && useNumeric && useSpecial) {
    return "All";
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input

function generatePassword() {
  var passwordLength = prompt(
    "Enter the desired length of your password (between 10 and 64 characters):"
  );
  while (passwordLength < 10 || passwordLength > 64) {
    alert("Invalid password length! Please enter a value between 10 and 64.");
    passwordLength = prompt(
      "Enter the desired length of your password (between 10 and 64 characters):"
    );
  }
  var option = getPasswordOptions();
  var pass = [];
  while (pass.length < Number(passwordLength)) {
    if (option === "Just lowercase") {
      pass += getRandom(lowerCasedCharacters);
    } else if (option === "Just uppercase") {
      pass += getRandom(upperCasedCharacters);
    } else if (option === "Just numeric") {
      pass += getRandom(numericCharacters);
    } else if (option === "Just special") {
      pass += getRandom(specialCharacters);
    } else if (option === "Just lowercase & numeric") {
      pass += getRandom(lowerCasedCharacters);
      pass += getRandom(numericCharacters);
    } else if (option === "Just lowercase & special") {
      pass += getRandom(specialCharacters);
      pass += getRandom(lowerCasedCharacters);
    } else if (option === "Just lowercase & uppercase ") {
      pass += getRandom(lowerCasedCharacters);
      pass += getRandom(upperCasedCharacters);
    } else if (option === "Just uppercase & numeric") {
      pass += getRandom(upperCasedCharacters);
      pass += getRandom(numericCharacters);
    } else if (option === "Just uppercase & special") {
      pass += getRandom(specialCharacters);
      pass += getRandom(upperCasedCharacters);
    } else if (option === "Just numeric & special") {
      pass += getRandom(specialCharacters);
      pass += getRandom(numericCharacters);
    } else if (option === "Just lowercase & uppercase & numeric") {
      pass += getRandom(lowerCasedCharacters);
      pass += getRandom(numericCharacters);
      pass += getRandom(upperCasedCharacters);
    } else if (option === "Just lowercase & uppercase & special") {
      pass += getRandom(specialCharacters);
      pass += getRandom(lowerCasedCharacters);
      pass += getRandom(upperCasedCharacters);
    } else if (option === "Just uppercase & numeric & special") {
      pass += getRandom(specialCharacters);
      pass += getRandom(numericCharacters);
      pass += getRandom(upperCasedCharacters);
    } else if (option === "All") {
      pass += getRandom(specialCharacters);
      pass += getRandom(upperCasedCharacters);
      pass += getRandom(numericCharacters);
      pass += getRandom(lowerCasedCharacters);
    }
  }
  if (pass.length != passwordLength) {
    var myPass = pass.substr(0, passwordLength);

    console.log(myPass, myPass.length);
    return myPass;
  } else {
    console.log(pass, pass.length);
    return pass;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
