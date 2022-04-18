// powers of 2

// Complete the function that takes a non-negative integer [n] as input, and returns a list of all the powers of [2] with the exponent ranging from 0 to n (inclusive).

// Examples:
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]



// P: Will we be given strings? Will we be given an empty string? Will we be given an array? Will we be given an empty array? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return an array of all the powers of 2 with the exponent ranging from 0 to the given number



// E: 1. If we are given 0, should return [2^0]
// E: 2. If we are given 1, should return [2^0, 2 ^1]
// E: 3. If we are given 2, should return [2^0, 2 ^1, 2^2]



function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
}



function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
}



function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
}



var powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i));



const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )