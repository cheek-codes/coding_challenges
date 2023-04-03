// Take the Derivative

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0




// Will we be given a string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? will we be given positive numbers?




// Return a string where the two given parameters are multiplied and then subtract 1 from the second parameter.




// If we were given derive(7,8), should return "56x^7"
// If we were given derive(5,9), should return "45x^8"




function derive(c,e) {
    return `${c*e}x^${e-1}`
}







let derive = (c,e) => `${c*e}x^${e-1}`







derive = (c,e) => `${c*e}x^${e-1}`