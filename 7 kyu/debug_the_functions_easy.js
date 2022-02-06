// debug the functions easy

// should be easy, begiin by looking at the code. debug the code and the functions should work.

// there are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

// function multi(arr) {
//   return arr * arr;
// }
// function add(arr) {
//   return arr + arr;
// }
// function reverse(str) {
//   return str.reverse();
// }






function multi(arr) {
    return arr.reduce((a, c) => a * c, 1)
}

function add(arr) {
return arr.reduce((a, c) => a + c, 0)
}

function reverse(str) {
return str.split("").reverse().join("")
}