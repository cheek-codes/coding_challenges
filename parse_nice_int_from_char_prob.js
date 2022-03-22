// Parse nice int from char problem

// You ask a small girl, "How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that return sthe girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old", or "5 years old". The first character in the string is always a number.



// P: Will we be given a string? Will we be given an empty string? Will we be given  special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return the first character in the string as an integer



// E: 1. If we are given "1 year old", should return 1
// E: 2. If we are given "5 years old", should return 5
// E: 3. If we are given "8 years old", should return 8
// E: 4. If we are given "9 years old", should return 9



function getAge(inputString){
    // using parseInt() to change string to integer of the first character by using .charAt()
    return parseInt(inputString.charAt(0))
}