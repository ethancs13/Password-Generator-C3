// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
var passwordText = document.querySelector("#password");

function writePassword() {
  var password = generatePassword();
  


if (confirm("Select your criteria")){

  var newChars = "";

  var length = prompt("Enter Length [8-128] or Nothing")

  if(length > 7 && length < 129){
    var lengthChecked = length;
  }

  let charFunc = () => {
    if (confirm("Would you like to exclude any characters?")){
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
  }

  charFunc()
  // if (!newChars == 0){
      var password = "";

      for (var i = 0; i <= lengthChecked; i++) {
        var randomNumber = Math.floor(Math.random() * newChars.length);
        password += newChars.substring(randomNumber, randomNumber +1);
      }
      alert(password)
      passwordText.textContent = password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
