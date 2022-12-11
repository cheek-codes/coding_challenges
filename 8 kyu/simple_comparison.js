// Simple Comparison?

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challenge harder and to prompt the challenger to read up about coercion, I have disabled some of the build in methods including .toString(), .join(), .split(), parsinInt, and .Number()




// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// R: Return true if the values are the same regardless of their different data types.
// R: Return false if the values are not the same regardless of their different data types.




// E: 1. If we were given add (1, "1"), should return true
// E: 2. If we were given add ("1", 1), should return true
// E: 3. If we were given add (1, "0"), should return false
// E: 4. If we were given add ("0", 1), should return false





function add(a, b){
	return a == b 
}





const add = (a, b) => a == b





function add(a, b){
    return +a === +b
}





const add = (a, b) => +a === +b





function add(a, b){
	return a + "" === b + "";
}