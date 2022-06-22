// Sum the strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 --> Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)



// P: Will we be given a float? Will we be given an integer? Will we be given special characters? Will we be given a string? Will we be given an empty string?



// R: Return a new string where the given string that has a number added together. 



// E: 1. If we are given "4", "5", should return "9"
// E: 2. If we are given "34", "5", should return "39"
// E: 3. If we are given "", "", should return "0"
// E: 4. If we are given "2", "", should return "2"
// E: 5. If we are given "-5", "3", should return "-2"
// E: 6. If we are given "-5", "-5", should return "-10"



function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
}




function sumStr(a,b) {
    let sum = Number(a) + Number(b)
    return sum.toString()
}



function sumStr(a,b) {
    return String(Number(a)+Number(b));
}



function sumStr(a,b) {
    return (+a+ +b)+''  
}



sumStr = (a,b) => String(+a + +b);