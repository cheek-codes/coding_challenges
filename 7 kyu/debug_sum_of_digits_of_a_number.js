// debug sum of digits of a number

// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//     for(var ix = 1; ix < digits.length; ix = sum + 1) {
//       sum =+ digits[ix + 1]);
//     }
//     return sum;
//   }






function getSumOfDigits(integer) {
    return integer.toString().split("").reduce((a, c) => a + Number(c), 0)
}






function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}






function getSumOfDigits(integer) {
  
    return Array.from(String(integer), Number).reduce((a,b) => a + b)
}






function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];
    }
    return sum;
}