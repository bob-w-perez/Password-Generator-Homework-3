// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = [ 'a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r',
                  's','t','u','v','w','x','y','z' ];

var upperLetters = [];

for (i=0; i < lowerLetters.length; i++) {
    upperLetters.push(lowerLetters[i].toUpperCase())
}


var numList = ['1','2','3','4','5','6','7','8','9','0'];

var specChars = [' ', '!','"','#','$','%','&',"'",'(',')','*','+',',','-',
                  '.','/',':',';','<','=','>','?','@','[', '\\',  
                  ']', '^','_','`','{','|','}','~'];

var passOptions = [];
var passCheck = [];
var madePassword = "";




function generatePassword () {

  passOptions = [];
  passCheck = [];

  var passLen = prompt("Enter password length (must be between 8 and 128):");
  

  if (!passLen) {
    return;
  }
  if (passLen == undefined ) {
    return;
  }

  passLen = Number(passLen);
  if (isNaN(passLen)) {
    alert("Your input was not a number. Please try again.");
    generatePassword();
    return;
  }

  if (passLen < 8 || passLen > 128) {
    alert("Password length must be between 8 and 128. Please try again.");
    generatePassword();
    return;
  }

  if (confirm("Include lower case letters?")) {
    passOptions = passOptions.concat(lowerLetters);
    passCheck.push(lowerLetters);
  }

  if (confirm("Include upper case letters?")) {
    passOptions = passOptions.concat(upperLetters);
    passCheck.push(upperLetters);

  }

  if (confirm("Include numbers?")) {
    passOptions = passOptions.concat(numList);
    passCheck.push(numList);

  }

  if (confirm("Include special characters? ")) {
    passOptions = passOptions.concat(specChars);
    passCheck.push(specChars);

  }

  if (passOptions.length == 0) {
    alert("You must select at least one character type. Please try again.");
    generatePassword();
    return;
  }

  makePassword(passLen);
}

function findCommonElements(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

function makePassword(passLen) {
    var newLen = passLen;
    madePassword = "";
    for (i = 0; i < passLen; i++) {
      madePassword = madePassword.concat(passOptions[Math.floor(Math.random()*passOptions.length)]);
    }
    
    console.log(madePassword)

    for (i = 0; i < passCheck.length; i++){
      if(!findCommonElements(madePassword.split(''), passCheck[i])){
          makePassword(newLen);
          return;
      }
    }
    return madePassword;
  }
   
function resetVal() {
  console.log("TESTING");
  document.querySelector("#password").value = '';
  document.querySelector("#password").blur();
}

// Write password to the #password input
function writePassword() {
  resetVal();
  
  generatePassword();
  var passwordText = document.querySelector("#password");
  var password = madePassword;
  if (password) {
    passwordText.value = password;
  }
  
}
var testClick = document.querySelector(".card-header");
testClick.addEventListener("click", resetVal);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

