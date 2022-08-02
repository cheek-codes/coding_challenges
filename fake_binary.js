// Fake binary

// Given a string of digits, you should replace any digit below 5 with0 and any digit 5 and above with 1. Return the resulting string.

// Not: input will never be an empty string



// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given strings? Will we be given an empty string?



// R: Return a new string where if a digit is less than 5, it will be replaced with 0, while if a dig is greater than or equal to 5, it will be replaced with 1



// E: 1. If we were given "45385593107843568", should return "01011110001100111"
// E: 2. If we were given "366058562030849490134388085", should return "011011110000101010000011011"



function fakeBin(x){
    return x.split("").map(x => x < 5 ? 0 : 1).join("")
}



const fakeBin = x => (x.split("").map(x => x < 5 ? 0 : 1).join(""))



function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}