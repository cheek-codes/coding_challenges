// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.




// Will we be given an empty string? Will we be given a string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// Return a new string where all the ! are removed




// 1. If we were given "Hello World!", should return "Hello World"
// 2. If we were givne "ouajsf!ljkaefih", should return "ouajsfljkaefih"
// 3. If we were given "!!bitch!!", should return "bitch"





function removeExclamationMarks(s) {
    return s.replace(/!/g, "")
}





const removeExclamationMarks = s => s.replace(/!/g, "")





function removeExclamationMarks(s) {
    return s.split('!').join('');
}





const removeExclamationMarks = (s) => {
    return s.split('').filter((letter) => letter !== '!').join('')
}