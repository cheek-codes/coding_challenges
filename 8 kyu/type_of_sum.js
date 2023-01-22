// type of sum

// Return the type of the sum of the two arguments.





// Will we be given a string? Will we be given an empty stsring? Will we be given arrays? Will we be given booleans? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return the type of the sume of the given two arguments.




// 1. If we were given typeOfSum(12, 1), should return "number"
// 2. If we were given typeOfSum("d", 1), should return "string"
// 3. If we were given typeOfSum(12, "a"), should return "string"
// 4. If we were given typeOfSum("james", "sandy"), should return "string"
// 5. If we were given typeOfSum(12, false), should return "number"




function typeOfSum(a, b){
    return typeof(a+b)
}






const typeOfSum = (a, b) => typeof(a + b);






typeOfSum = (a, b) => typeof(a + b);






function typeOfSum(a, b) {
    return typeof a != 'string' && typeof b != 'string' ? 'number' : 'string';
}