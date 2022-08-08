// Barender, drinks!

// Complete the function that recieves as input a string, and produces outputs according to the following:

// input --> output
// "Jabroni" --> "Patron Tequila"
// "School Counselor" --> "Anything with Alcohol"
// "Programmer" --> "Hipster Craft Beer"
// "Bike Gang Member" --> "Moonshine"
// "Politician" --> "Your tax dollars"
// "Rapper" --> "Cristal"
// anything else --> "Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, the the return value should be ["Beer"]

// Make sure you cover the cases where certain words do no show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


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