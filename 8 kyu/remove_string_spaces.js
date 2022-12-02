// Remove String Spaces

// Simple, remove the spaces fromt he string, then return the resultant string.



// P: Will we be given a float? Will we be given an integer? Will we be given an empty string? Will we be given captial letters? Will we be given lower case letters? 



// R: Return a new string that has removed the given string parameter's spaces



// E: 1. If we are given a string parameter of "Interview with a vampire", should return "Interviewwithavampire"
// E: 2. If we are given a string parameter of "nine perfect strangers", should return "nineperfectstrangers"
// E: 3. If we are given a string parameter of "Harry Potter and the Half Blood Prince", should return "HarryPotterandtheHalfBloodPrince"



function noSpace(x){
    // create a new variable called result that holds an empty string for now
    var result = ""

    // create a for loop that loops through the given string parameter
    for(var index = 0; index < x.length; index++){
        // create an if else statement to see if there are any spaces, it there are, remove them, and add the result to the variable result
        if(x[index] !== " "){
            result += x[index];
        }
    }
    // return the final result from the variable result
    return result;
}



// less lines
// using the .spilt() method and the .join() method. get rid of the space and then rejoin it. return the final result
function noSpace(x){return x.split(' ').join('')}



// lesser lines
function noSpace(x){
    return x.replace(/ /g, "")
}



// even lesser lines
const noSpace = x => x.replace(/ /g, "");
