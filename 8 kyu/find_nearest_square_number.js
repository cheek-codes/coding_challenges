// Find Nearest square number

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)




// P: Will we be given empty strings? Will we be given strings? Will we be given arrays? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// R: Return the closest integet that is a perfect square.



// E: 1. If we were given 1, should return 1
// E: 2. If we were given 2, should return 1
// E: 3. If we were given 10, should return 9
// E: 4. If we were given 111, should return 121
// E: 5. If we were given 9999, should return 10000




function nearestSq(n){
    return Math.round(Math.sqrt(n))**2
}




const nearestSq = n => Math.round(Math.sqrt(n)) ** 2




nearestSq = n => Math.round(Math.sqrt(n)) ** 2




nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)




function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2)
}




function nearestSq(n){
    return Math.round(n**0.5)**2
}