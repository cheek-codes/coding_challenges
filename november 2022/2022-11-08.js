// Super Duper Easy

// Make a function that returns the value multiplies by 50 and increased by 6. If the value entered is a string it should return "Error"



// P: Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given postitive number?



// R: Return a new integer that was multiplied by 50 and increased by 6. Otherwise, return "Error" if it is a string. 



// E: 1. If we are given 1, should return 56
// E: 2. If we are given -1, should return -56
// E: 3. If we are given "1", should return "Error"



function problem(x){
    // create an if else statement
    // check if parameter (x) is a number using typeof(x) === "number"
    if (typeof(x) === "number"){
        return (x*50) + 6
    }

    // otherwise if the given parameter is not a number and is of the string type, return "Error"
    else{
        return "Error"
    }
}



//less lines
function problem(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
}



