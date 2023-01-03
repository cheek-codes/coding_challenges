// Unique string characters

// In this kata, you will be given two strings, a and b, and your task will be to return the characters that are not common in the two strings. 

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 

// Notice also that you return the characters from the first string concatenated with those from the second string.

// Good luck!




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be give integers?




// Return a new string where the letters that do not repeat in each other's arguments, if the letters repeate, delete those




// If we were given "xyab","xzca", should return "ybzc"
// If we were given "xyabb","xzca", should return "ybbzc"
// If we were given "abcd","xyz", should return "abcdxyz"
// If we were given "xxx","xzca", should return "zca"




function solve(a,b){
    let mix = (a+b).split("")
    return mix.filter(x => a.includes(x)^b.includes(x)).join("")
}






function solve(a,b) {
    let setA = new Set(a);
    let setB = new Set(b);
    return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
}






function solve(a,b){
    return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
}






const solve = (a,b) => (a + b).split('').filter(x => a.includes(x) ^ b.includes(x)).join('')