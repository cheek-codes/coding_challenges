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




function multiply(number){
    // create a variable that turns an integer into a string and see how many characters are in it
    let num = number.toString().length

    // create an if else statement. if the given number is greater than or equal to 0 aka does not have a negative sign, return number * (5**num)
    if (number >= 0){
      return number * (5**num)
    }

    // if the given number is negative aka has an extra character because of the negative sign, take away that extra character
    else if (number < 0){
      num = num -1
      return number * (5**num)
    }
}  




function multiply(number){
    let num = number.toString().length
    if (number >= 0){
      return number * (5**num)
    }
    else{
      num = num -1
      return number * (5**num)
    }
}  




function multiply(number){
    let num = number.toString().length
    if (number < 0){
      num = num -1
      return number * (5**num)
    }
    else{
      return number * (5**num)
    }
} 