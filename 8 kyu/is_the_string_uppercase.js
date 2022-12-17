// Is the string uppercase?

// create a method to see whether the string is in ALL CAPS. 

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return true if given string is in all caps 
// Return false if given string is not in all caps




// 1. If we were given "c", should return False
// 2. If we were given "C", should return True
// 3. If we were given "hello I AM DONALD", should return False
// 4. If we were given "HELLO I AM DONALD", should return True
// 5. If we were given "ACSKLDFJSgSKLDFJSKLDFJ", should return False
// 6. If we were given "ACSKLDFJSGSKLDFJSKLDFJ", should return True





String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
}





String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
