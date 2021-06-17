// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = [ 'a','b','c','d','e','f','g','h','i','j',
                    'h','i','j','k','l','m','n','o','p','q','r',
                  's','t','u','v','w','x','y','z' ];

var upperLetters = [];

for (i=0; i < lowerLetters.length; i++) {
    upperLetters.push(lowerLetters[i].toUpperCase())
}


var numList = ['1','2','3','4','5','6','7','8','9','0'];

var specChars = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-',
                  '.','/',':',';','<','=','>','?','@','[', '\\',  
                  ']', '^','_','`','{','|','}','~'];




console.log(lowerLetters);
console.log(upperLetters);
console.log(numList);
console.log(specChars);
console.log(specChars[23]);

function generatePassword () {
  var passLen = prompt("Enter password length (must be between 8 and 128):");
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
  console.log(typeof passLen);
  console.log(passLen)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
