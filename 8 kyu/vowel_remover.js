// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// don't worry about uppercase vowels

// y is not considered a vowel for this kata

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"



// P: Will we be given numbers such as floats and integers? Will we be given empty strings? Will we be given uppercase letters? Will we be given lowercase letters? Will y be considered vowels?



// R: Return a new string that does not have a lowercase vowel. Y is not considered a vowel in this case.



// E: 1. If we are given "hello", should return "hll"
// E: 2. If we are given "codewars", should return "cdwrs"
// E: 3. If we are given "goodbye", should return "gdby"
// E: 4. If we are given "HELLO", should return "HELLO"



function shortcut (string) {
    // using .replace() method. replace all global a, e, i, o, u with an empty character
    return string.replace(/a|e|i|o|u/g, "")
}