// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



// P: Will we be given an empty string? Will we be given a string? Will we be given floats? Will we be given a negative integer? Will we be given a positive integer?



// R: Return a new number that was multiplied by 8 if that given number was even
// R: Return a new number that was multiplied by 9 if that given number was odd.



// E: 1. If we are given 2, should return 16 because 2 * 8 = 16
// E: 2. If we are given 1, should return 9 because 1 * 9 = 9



function simpleMultiplication(number){
    // set up if else statement
    // using a modulus, if the given number is divisible by 2, with no remainders, multiply it by 8 and return a new number that was multiplied by 8
    if (number % 2 === 0){
        return number * 8
    }
    // otherwise, if the given number is not divisible by 2, with remainders, multiply it by 9 and return a new number that was multiplied by 9
    else{
        return number * 9
    }
}