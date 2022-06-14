// Convert a string to a number!

// We need a function that can transform a string into a number. What wyas of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.



// P: Will we be given integers? Will we be given floats? Will we be given negative numbers? Will we be given positive numbers? Will we be given special characters? Will we be given an array? Will we be given a string? Will we be given an empty string?



// R: Return a digit that was converted form a string.



// E: 1. If we are given "1234", should return 1234
// E: 2. If we are given "605", should return 605
// E: 3. If we are given "-1234", should return -1234
// E: 4. If we are given "-605", should return -605



var stringToNumber = function(str){
    return Number(str);
}



var stringToNumber = function(str){
    return parseInt(str);
}



const stringToNumber = str => Number(str)