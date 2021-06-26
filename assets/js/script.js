// Assignment Code
// set a variable for the generate button
var generateBtn = document.querySelector("#generate");

// set arrays for each class of characters for potential password criteria
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

// sets empty array which will contain one or more of the above
// arrays based on selected criteria. These will be concatenated
// into a single array
var passOptions = [];

// sets empty array which will contain one or more of the above
// arrays based on selected criteria. These will NOT be concatenated
// and will be an array with other arrays as elements.
// This will function to check if the created password has at least
// one character from each class
var passCheck = [];

// sets empty string which the makePassword() function will add
// random characters onto
var madePassword = "";


// this function gets user input to set up the correct
// set of characters to make the password
function generatePassword () {

  passOptions = [];
  passCheck = [];

  var passLen = prompt("Enter password length (must be between 8 and 128):");
  
// if the user presses cancel for the prompt above the function ends
  if (!passLen) {
    return;
  }

  // if the user presses ok but does not input anything the function ends
  if (passLen == undefined ) {
    return;
  }
  passLen = Number(passLen);
  
  if (isNaN(passLen)) {
    alert("Your input was not a number. Please try again.");
    return;
  }

  if (passLen < 8 || passLen > 128) {
    alert("Password length must be between 8 and 128. Please try again.");
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

  // if the user does not select any of the criteria options they are prompted to 
  // try again
  if (passOptions.length == 0) {
    alert("You must select at least one character type. Please try again.");
    return;
  }

  // the function ends by calling the makePassword() function and passing the length to it
  // as a parameter. the other relevant variables are globally scoped and do not need to be passed
  makePassword(passLen);
}

// this function takes 2 arrays as inputs and returns TRUE if at least one element of array1 
// exists in array2 
function findCommon(array1, array2) {
  return array1.some(i => array2.includes(i));
}

// this function chooses random elements from the passOptions array to make a random password
function makePassword(passLen) {
    madePassword = "";


    for (i = 0; i < passLen; i++) {
      madePassword = madePassword.concat(passOptions[Math.floor(Math.random()*passOptions.length)]);
    }
    

    // loops for the number of character classes chosen and runs findCommon for each class
    // to ensure at least one character from each chosen class is in the password
    for (i = 0; i < passCheck.length; i++){
      if(!findCommon(madePassword.split(''), passCheck[i])){
          makePassword(passLen);
          return;
      }
    }
    return madePassword;
  }
   
// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  var password = madePassword;
  if (password) {
    passwordText.value = password;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

