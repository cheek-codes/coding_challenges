// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"




// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given arrays? Will we be given floats? Will we be given integers?




// R: Return a new string where if the last character has an !, it will be removed, or else it will return the given string.




// E: 1. If we were given remove("Hi!"), should return "Hi"
// E: 2. If we were given remove("Hi!!!"), should return "Hi!!"
// E: 3. If we were given remove("!Hi"), should return"!Hi"
// E: 4. If we were given remove("!Hi!"), should return"!Hi"
// E: 5. If we were given remove("Hi! Hi!"), should return"Hi! Hi"
// E: 6. If we were given remove("Hi"), should return"Hi"




function remove (string) {
    if (string.charAt(string.length-1) === "!"){
    return string.slice(0, -1)
    }
    else{
      return string
    }
}




const remove = string => string.charAt(string.length-1) === "!"? string.slice(0, -1): string




const remove = s => s.replace(/!$/, '');





function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}




function remove(s){
    //coding and coding....
    return s = s.replace(/!$/g, '');
    
}




function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}