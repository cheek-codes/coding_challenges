// Is n divisible by x and y?

// create a function that checks if a number n is divisible by two numbers x and y. all inputs are positive, non-zero numbers.Is

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5




// Will we be given a string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return  true if n is divisibe by both x and y
// Return false if n is divisible by only x or y, or if it divisible by neither x nor y.




// If we were given n = 3, x = 1, y = 3, should return true because 3 is divisible by 1 and 3
// If we were given n = 12, x = 2, y = 6, should return true because 12 is divisible by 2 and 6
// If we were given n = 100, x = 5, y = 3, should return false because 100 is not divisible by 3
// If we were given n = 12, x = 7, y = 5, should return false because  12 is neither divisible by 7 nor 5




function isDivisible(n, x, y) {
    // use % because it gives you remainders. if the remainder is 0, then it is divisible
    return true?n%x==0 && n%y==0 : false
}






function isDivisible(n, x, y) {
    if (n%x == 0 && n%y == 0){
      return true
    }
    else{
      return false
    }
}






const isDivisible = (n, x, y) => true ? n%x == 0 && n%y == 0 : false






isDivisible = (n, x, y) => true ? n%x == 0 && n%y == 0 : false