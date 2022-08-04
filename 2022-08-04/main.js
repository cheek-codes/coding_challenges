// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

// P: Will I be given special characters? Will there be an empty string?

// R: Return true if it is palindrome. Else, return false

// E: 1. If we are given "tacocat", should return true
// E: 2. If we are given "water", should return false
// E: 3. If we are given 12345, should return false


// take parameter apart and reverse it
// turn everything into a string, incase there's an integer
// store it as a variable for ease of use
let back = line.split("").reverse().join("").toString()

// check if parameter is the same as the variable. If it is the same, return true, else return false.
if(line.toString() === back){
    return true
  }
  else{
    return false
  }


