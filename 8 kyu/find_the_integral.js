// find the integral

// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"




// Will we be given a string? Will wew be given any special characters? Will we be given a float? Will we be given an integer? Will we be given a negative number? Will we be given a positive number?




// Return a new string "(coefficient/(exponent+1))x^(exponent+1)"




// If we were given integrate(3,2), should return "1x^3"
// If we were given integrate(12,5), should return "2x^6"
// If we were given integrate(20,1), should return "10x^2"
// If we were given integrate(40,3), should return "10x^4"
// If we were given integrate(90,2), should return "30x^3"