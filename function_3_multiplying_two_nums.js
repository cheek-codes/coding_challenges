// Function 3 - multiplying two numbers

// Implement a function called multiply, which takes two numbers and returns their product:
// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240



// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return the product of the two given numbers




// E: 1. If we are given 2 and 3, should return 6
// E: 2. If we are given 0 and 188, should return 0
// E: 3. If we are given 85 and 144, should return 12240
// E: 4. If we are given -1 and 8893, should return -8893




function multiply(a, b){
    return a*b
}



function multiply(a, b){
    if(typeof a == 'number' && typeof b == 'number')
      return a * b;  
}



let multiply = (a, b) => a * b



const multiply = (a, b) => a * b