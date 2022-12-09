// reversing words in a string

// You need to write a function that reveres the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

//As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.

// Example (input --> output)
// "Hello world" --> "world Hello"
// "I am an expert at this" --> "this at expert an am I"
// "CodeWars" --> "CodeWars"





// P: Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// R: Return a new string where the given string has all the words reversed in order.




// E: 1. If we were given "Hello World", should return "World Hello"
// E: 2. If we were given "Hi There.", should return "There. Hi"
// E: 3: If we were given "I am an expert at this", should return "this at expert an am I"
// E: 4. If we were given "This is so easy", should return "easy so is This"
// E: 5. If we were given "", should return ""
// E: 6. If we were given "CodeWars", should return "CodeWars"





function reverse(string){
    return string.split(" ").reverse().join(" ")
}




const reverse = string => string.split(" ").reverse().join(" ")