// Dot Calculator

// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""





// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string of dots where we would add, subtract, multiply, or divide the dots depending of the operator given




// If we were given "..... + ...............", should return "...................."
// If we were given "..... - ...", should return ".."
// If we were given "..... - .", should return "...."
// If we were given "..... * ...", should return "..............."
// If we were given "..... * ..", should return".........."
// If we were given "..... // ..", should return".."
// If we were given "..... // .", should return "....."
// If we were given ". // ..", should return ""
// If we were given ".. - ..", should return ""