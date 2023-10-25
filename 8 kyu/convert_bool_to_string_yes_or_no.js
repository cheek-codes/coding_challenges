// Convert boolean values to string "Yes" or "No"

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. 



// P: Will we be given a string? Will we be given an empty string? Will we be given a number such as a float or a n integer? Will we only be given a boolean?



// R: Return "Yes" in place of true.
// R: Return "No" in place of false.



// E: 1. If we are given true, should return "Yes"
// E: 2. If we are given false, should return "No"
// E: 3. If we are given 0 > 1, should return "No"
// E: 4. If we are given 0 < 1, should return "Yes"



function boolToWord(bool){
    // set up if else statements
    if (bool === true){
        // if bool is === true, return as yes    
        return "Yes"
    }
    // or else return "No" in place of false
    else{
        return "No"
    }
} 