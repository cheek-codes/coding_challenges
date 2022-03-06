// Grasshopper - Degub sayHello

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:
// Hello, Mr. Spock




// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given strings? Will we be given empty strings?



// R: Return a new string that greets everyone that comes aboard



// E: 1. If we are given a name of "Mr. Spock", should return "Hello, Mr. Spock"
// E: 2. If we are given a name of "Captain Kirk", should return "Hello, Captain Kirk"
// E: 3. If we are given a name of "Liutenant Uhura", should return "Hello, Liutenant Uhura"
// E: 4. If we are given a name of "Dr. McCoy", should return "Hello, Dr. McCoy"



function sayHello(name) {
    return `Hello, ${name}`
}