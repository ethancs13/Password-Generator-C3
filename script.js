// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
var passwordText = document.querySelector("#password");

function writePassword() {
  // Initial ask to continue with process
  if (confirm("Welcome to Password Generator" + "\n"
              + "  Ok --> Yes     |     Cancel --> No "
              + "\n\n" + "Would you like to continue?")){

    // Initialize set of acceptable characters
    var newChars = "";
    
    // Store length of password  :  given by user input
    var length = prompt("Enter a length for your password [8-128]" + "\n" + ":leave blank to exit.")
  

    // Check to see if length is between 8 and 128  :  otherwise return
    if(length > 7 && length < 129){var lengthChecked = length;}else{return}


    // If statement block for what characters will be included in the password
    if (confirm("You will now select which character types" + "\n" + " will be included in your password.")){

      if (confirm("Include Lower Case?")){

        // add characters to string
        (newChars) += "abcdefghijklmnopqrstuvwxyz"
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

    // function to create password
    function generatePassword() {
      
      // Initialize password variable
      var password = "";

      // select random character from newChars
      // add to end of password string

      for (var i = 0; i <= lengthChecked; i++) {

        // Get random index based on length of newChars
        var randomNumber = Math.floor(Math.random() * (newChars.length))
        // add
        password += newChars[randomNumber]
      }
      // Set password to the index file text
console.log(newChars)

      passwordText.textContent = password
    }

    // Call the generate password function after asking questions if atleast one option is selected
    if (newChars == ""){
      passwordText.textContent = "must select one option"
      return
    } else {
    var password = generatePassword()
    }
  }

      
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
