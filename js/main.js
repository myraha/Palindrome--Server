// Listens for the click button, when the button is click it will run the checkPalindrome function
document.getElementById('check').onclick = checkPalindrome;
// checkPalindrome function
function checkPalindrome() {
  // Take the user string value and assigns it to the variable text
  // Also uses the method 'toLowerCase' to account for words spelled in uppercase and converts to lower case
  var text = document.getElementById('word').value.toLowerCase()
  //console.log(text)
  // Assigns the variable str to be the same value as our variable text
  var str = text;
  // Our conditional statement
  // If the condition of our variable str is the same as taking the string value from variable text
  // Taking the value from the variable text, splitting it into substrings, reserving it, then joining together as one word
    if( str == text.split('').reverse().join('') ){
      // If str == text, then it is a Palindrome
      // Will run the function message and pass the string "Its a Palindrome" as an arguement
      message("It's a Palindrome!")
    }else{
      // If str !== text, or if str doen't not equal text then it is not a Palindrome
      // Will run the function message and pass the string "Not a Palindrome" as an arguement
      message("It's not a Palindrome!")
    }
}
// message function
// Uses msg as a parameter in the function
function message(msg){
// Takes the parameter msg and uses it as an arguement to display the message in the DOM
  document.getElementById('msg').innerHTML = msg;
}
