// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".

// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

// Note:
// Names given are always valid strings.



// P: Will we be given numbers such as floats and integers? Will we be given empty strings? Will we be given uppercase letters? Will we be given lowercase letters?



// E: 1. If we were given "Randy", should return "Randy plays banjo"
// E: 2. If we were given "randy", should return "randy plays banjo"
// E: 3. If we were given "Sandy", should return "Sandy does not play banjo"
// E: 4. If we were given "sandy", should return "sandy does not play banjo"



function areYouPlayingBanjo(name) {
    // create an if else statement
    // if the given name parameter starts with "R" or "r", return name plays banjo
    // otherwise, return name does not play banjo
    if (name [0] === "R" || name [0] === "r"){
      return `${name} plays banjo`
    }
    else{
      return `${name} does not play banjo`
    }
}



// less lines
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}