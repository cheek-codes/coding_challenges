// Convert a boolean to a string

// Implement a function which convert the given boolean value into its string representation.



// P: Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given booleans?



// R: Return a converted boolean value into as a string



// E: 1. If we are given true, should return as "true"
// E: 2. If we are given false, should return as "false"
// E: 3. If we are given "2 === 3", should return "false"
// E: 4. If we are givne "2 === 2", should return "true"



function booleanToString(b){
    // create an if else statement
    // if b is true, return it as a string of "true"
    if(b === true){
      return "true";
    }
    
    // if b is false, return it as string "false"
    else{
      return "false";
    }
}