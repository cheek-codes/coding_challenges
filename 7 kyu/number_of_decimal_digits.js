// Number of Decimal Digits

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.





// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given integers?




// Return an integer where it counts the number of digits in the given n




// If we were given 9, should return 1
// If we were given 666, should return 3
// If we were given 123456, should return 6




function digits(n) {
    return (''+n).length
}






const digits = n => ("" + n).length






function digits(n) {
    let count = 0
    let str = n.toString()
    for(let i=0; i<str.length; i++){
      count ++
    }
    return count
}






function digits(n) {
    return n.toString().length;
}






function digits(n) {
    return String(n).length
}






function digits(n) {
    return `${n}`.length;
}






const digits = n => n.toString().length;






const digits = function ( n ) { return String(n).length }







function digits(n) {
    return (Math.log10(n) | 0) + 1;
}






const digits = n => n < 10 ? 1 : digits(n / 10) + 1;






function digits(n) {
    if (n === 0) return 1;
    return Math.ceil(Math.log(n+1) / Math.log(10));
}






const digits = (n) => `${n}`.length