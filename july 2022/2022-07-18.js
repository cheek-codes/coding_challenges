// String repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input->output)
// 6, "I"->"IIIIII"
// 5, "Hello"->"HelloHelloHelloHelloHello"



// P: Will we be given strings? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given special characters? Will we be given empty strings? Will we be given arrays?



// R: Return a new string where a parameter of a string is repeated as many times as the given parameter of a number.



// E: 1. If we are given a number parameter of 6, and a string parameter of "I", should return "IIIIII"
// E: 2. If we are given a number parameter of 5, and a string parameter of "Hello", should return "HelloHelloHelloHelloHello"
// E: 3. If we are given a number parameter of 2, and a string parameter of "9", should return "99"
// E: 4. If we are given a number parameter of 8, and a string parameter of "fuCK", should return "fuCKfuCKfuCKfuCKfuCKfuCKfuCKfuCK"



function repeatStr(n, s) {
    // create a new variable of str to hold new string
    let str = ""

    // create a for loop to loop through n so the program knows how many times to print s
    for (let i=0; i<n; i++){
        // add the newly printed s to the variable that you made called str
        str += s
    }

    // return the variable str
    return str
}