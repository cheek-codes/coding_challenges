// for twins: 1. types

// Prolog:
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// task:
// Write a function that will accept two parameters: variable and type. Check if type of variable is matching type. Return true if types match or false if not.

// Example:
// 42, "number"   --> true
// "42", "number" --> false




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given an array? Will we be given a float? Will we be given an integer? Will we be given a negative number? Will we be given a positive number?




// Return true if the given parameters of variable and type matches in types.
// Return false if they do not match in type




// 1. If we were given typeValidation(42, "number"), should return true
// 2. If we were given typeValidation("42", "number"), should return false





function typeValidation(variable, type) {
    if (typeof(variable) === type){
      return true
    }
    else {
      return false
    }
}






const typeValidation = (variable, type) => {
    if (typeof(variable) === type){
      return true
    }
    else {
      return false
    }
}






const typeValidation = (variable, type) => (typeof(variable) === type)?true:false






function typeValidation(variable, type) {
    return typeof variable === type; 
}






const typeValidation = (variable, type) => typeof variable === type






function typeValidation(variable, type) {
    return typeof variable == type ? true : false;
}