// Assignment code here
// to improve: add var generatePassword =  ... return final password, change final pass to generate password
alert("Choose your attributes.");

var chooseNow = function() {
  var passwordLength = prompt("How many characters?");

  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Hey, wrong stuff! Between 8 and 128 characters please")
  }

  var specialChar = confirm("Do you want special characters?")

  var lowerCase = confirm ("Do you want lower case?")
  
  var numberChar = confirm ("Do you want numbers?")

  var upperCase = confirm ("Do you want upper case?")

  var dictionary = {specialChar, lowerCase, numberChar, upperCase, passwordLength}
  return dictionary
}

var userSelections = chooseNow()

function randomElement(arr) {
  var random = Math.random();
  var index = Math.floor(random*arr.length);
  return arr[index];
}

var finalPassword = ''; 
var char1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var char2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','14','15','16','17','18','19','20','21','22','23','24','25','26']
var char3 = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var char4 = ['!', '@', '#','$','%','^','&','*','(',')','-','=','+','`','~',';',':','"',"'",'/','>','<','.',',','?']

var characterPool = [];
if (userSelections.lowerCase) {
  characterPool = characterPool.concat(char1)
}

if (userSelections.upperCase) {
  characterPool = characterPool.concat(char3)
}

if (userSelections.specialChar) {
  characterPool = characterPool.concat(char4)
}

if (userSelections.numberChar) {
  characterPool = characterPool.concat(char2)
}

for (var i = 0; i < userSelections.passwordLength; i++) {
  finalPassword = randomElement(characterPool)+finalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);