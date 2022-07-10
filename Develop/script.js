var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "~`!@#$%^&*()-_=+[]{}|/;:'<>.,?"
// var passwordLength; 
// var lowercaseOpt; 
// var uppercaseOpt; 
// var numberOpt; 
// var specialOpt; 
// var password; (password output)

// Function used to determine length of password
function determineLength(){
  passwordLength = prompt("Decide password Length - Choose between 8-128 characters:");

  if (passwordLength<8){
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else {
    alert("The following prompts will ask you to provide further specifications in order to generate your password. Press 'OK' to continue.");
  }
  return passwordLength;
} 

// Function used to determine inclusion of lowercase letters in password
function chooseLowercase(){
  lowercaseOpt = prompt("Include lowercase letters in your password? \nYes or No?");
  
  if (lowercaseOpt === null){
    determineLength();
  } else if (lowercaseOpt === "yes"){
    lowercaseOpt = true;
    return lowercaseOpt;
  } else if (lowercaseOpt === "no"){
    lowercaseOpt = false;
    return lowercaseOpt;
  } else {
    alert("Must answer Yes or No.");
    chooseLowercase();
  }
  return lowercaseOpt;
}

// Function used to determine inlcusion of uppercase letters in password
function chooseUppercase(){
  uppercaseOpt = prompt("Include uppercase letters in your password? \nYes or No?");
  
  if (uppercaseOpt === null){
    determineLength();
  } else if (uppercaseOpt === "yes"){
    uppercaseOpt = true;
    return uppercaseOpt;
  } else if (uppercaseOpt === "no"){
    uppercaseOpt = false;
    return uppercaseOpt;
  } else {
    alert("Must answer Yes or No.");
    chooseUppercase();
  }
  return uppercaseOpt;
}

// Function used to determine incusion of numbers in password
function chooseNumbers(){
  numberOpt = prompt("Include numbers in your password? \nYes or No?");

  if (numberOpt === null){
    determineLength();
  } else if (numberOpt === "yes"){
    numberOpt = true;
    return numberOpt;
  } else if (numberOpt === "no"){
    numberOpt = false;
    return numberOpt;
  } else {
    alert("Must answer Yes or No.");
    chooseNumbers();
  }
  return numberOpt;
}

// Function used to determine inclusion of special characters in password
function chooseSpecial(){
  specialOpt = prompt("Include special characters in your password? \nYes or No?");

  if (specialOpt === null){
    determineLength();
  } else if (specialOpt === "yes"){
    specialOpt = true;
    return specialOpt;
  } else if (specialOpt === "no"){
    specialOpt = false;
    return specialOpt;
  } else {
    alert("Must answer Yes or No.")
    chooseSpecial();
  }
  return specialOpt;
}

// Function used to call previous prompt functions and generate a password based on the users answers
function generatePassword(){
  determineLength();
  chooseLowercase();
  chooseUppercase();
  chooseNumbers();
  chooseSpecial();
    
  var output = "";
  password = "";

  if (lowercaseOpt && uppercaseOpt && numberOpt && specialOpt){
    output += lowercase + uppercase + number + special;
  
  } else if (lowercaseOpt && uppercaseOpt && numberOpt){
    output += lowercase + uppercase + number;
  
  } else if (lowercaseOpt && specialOpt && numberOpt){
    output += lowercase + special + number;

  } else if (uppercaseOpt && specialOpt && numberOpt){
    output += uppercase + special + number;

  } else if (lowercaseOpt && uppercaseOpt){
    output += lowercase + uppercase;

  } else if (lowercaseOpt && numberOpt){
    output += lowercase + number;

  } else if (lowercaseOpt && specialOpt){
    output += lowercase + special;

  } else if (uppercaseOpt && numberOpt){
    output += uppercase + number;

  } else if (uppercaseOpt && specialOpt){
    output += uppercase + special;

  } else if (numberOpt && specialOpt){
    output += number + special;

  } else if (lowercaseOpt){
    output += lowercase;

  } else if (uppercaseOpt){
    output += uppercase;

  }else if (numberOpt){
    output += number;

  } else if (specialOpt){
    output += special;

  } else {
    output === null;
    alert ("Must answer 'Yes' to a minimum of 1 prompt in order to generate password.");
    determineLength();
  }
    // charAt function below used to generate a random password
    for(var i= 0; i < passwordLength; i++){
    password += output.charAt(Math.floor(Math.random() * output.length))
    }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
