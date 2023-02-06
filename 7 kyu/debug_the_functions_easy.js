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







function multi(arr) {
    return arr.reduce((n, x) => n * x, 1)
}

function add(arr) {
return arr.reduce((n, x) => n + x, 0)
}

function reverse(str) {
return [...str].reverse().join("")
}






function multi(arr) {
    var answer = 1;
    for(var i = 0; i < arr.length; i++){
        answer *= arr[i];  
}
return answer;
}
function add(arr) {
var answer = 0;
for(var i = 0; i<arr.length; i++){
    answer += arr[i];
}
return answer;
}
function reverse(str) {
return str.split("").reverse().join("");
}






const multi = arr => arr.reduce((a,b)=> a*b);

const add = arr=> arr.reduce((a,b)=> a+b);

const reverse = str => str.split('').reverse().join('');