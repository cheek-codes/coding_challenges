// Multiply the number

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹




// P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? 



// R: Return a new number that was raised by 5 to the number of digits of each number times the number given



// E: 1. If we are given 3, should return 15 because 3 * 5^1
// E: 2. If we are given 10, should return 250 because 10 * 5^2
// E: 3. If we are given 200, should return 25000 because 200 * 5^3
// E: 4. If we are given 0, should return 0 because 0 * 5^1
// E: 5. If we are given -3, should return -15 because -3 * 5^1