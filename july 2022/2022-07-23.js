// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



// P: Will we be given numbers such as floats and integers? Will we be given empty strings? Will we be given uppercase letters? Will we be given lowercase letters?



// R: Return a new string that will return a new string where the first and last character of the given parameter is removed.



// E: 1. If we are given "wooden", should return "oode"
// E: 2. If we are given "chips", should return "hip"
// E: 3. If we are given "penis", should return "eni"
// E: 4. If we are given "moon", should return "oo"



function removeChar(str){
    // using .slice() method, remove the first and last character of the given parameter. first letter being 1, and last letter being -1
    return str.slice(1, -1)
}



// less lines
const removeChar = str => str.slice(1, -1)



// lesser lines
removeChar = str => str.slice(1, -1)