// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
var passwordText = document.querySelector("#password");

function writePassword() {

  if (confirm("Welcome to Password Generator" + "\n"
              + "  Ok --> Yes     |     Cancel --> No "
              + "\n\n" + "Would you like to continue?")){

    var newChars = "";
  
    var length = prompt("Enter a length for your password [8-128]" + "\n" + ":leave blank to exit.")
  
    if(length > 7 && length < 129){var lengthChecked = length;}else{return}


    if (confirm("You will now select which character types" + "\n" + " will be included in your password.")){

      if (confirm("Include Lower Case?")){
        newChars += "abcdefghijklmnopqrstuvwxyz"
      } else {}

      if (confirm("Include Upper Case")){
        newChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      } else {}

      if (confirm("Include Numbers?")){
        newChars += "0123456789"
      } else {}

      if (confirm("Include Special Characters?")){
        newChars += "!@#$%^&*()"
      } else {}
    }

    function generatePassword() {
      var password = "";

      for (var i = 0; i <= lengthChecked; i++) {
        var randomNumber = Math.floor(Math.random() * newChars.length)
        password += newChars.substring(randomNumber, randomNumber +1)
      }
      passwordText.textContent = password
    }

    var password = generatePassword()
  }

      
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
