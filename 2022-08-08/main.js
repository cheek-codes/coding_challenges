// ES6 string addition

// It is easy to join two string together like this [string1 + string2]

// Another way to get the desired result would be with [string1.concoat(string2)]

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings

// [+], [.concat()], and [.join()] will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string. 

// P: Will I be given special characters? Will there be an empty strings? Will it only be strings? Will there be numbers? 


// R: Return a concatinated string using ES6, without [.concat()], [+], [.join()], and other methods


// E: 1. If we are given "cat", and "dog", should return [cat dog]
// E: 2. If we are given "software", and "engineer", should return [software engineer]
// E: 3. If wer are given "fuck", and "you", should return [fuck you]
// E: 4. If we are given "hakuna", and "matata", should return [hakuna matata]


// use template literals to allow variables in the string

function joinStrings(string1, string2){
    // code here
   return `${string1} ${string2}`
 }