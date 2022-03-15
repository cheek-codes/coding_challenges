// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.



// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given strings? Will we be given empty strings?



// R: Return true, if the given is a palindrome, case insensitive
// R: Return false, if the given is not a palindrome, case insensitive



// E: 1. If we are given "abba", should return true
// E: 2. If we are given "Abba", should return true
// E: 3. If we are given "apple", should return false
// E: 4. If we are given "snack", should return false



function isPalindrome(x) {
    // create a new variable where it will split, reverse, and rejoin x and change it to lower case so it will be case insensitive
    let pal = x.split("").reverse().join("").toLowerCase()

    // create a new variable to change x to lower case
    let xx = x.toLowerCase()

    // create an if else statement to check if pal and xx are palindromes. return true if yes. return false if no
    if (pal === xx){
      return true
    }
    else{
      return false
    } 
}