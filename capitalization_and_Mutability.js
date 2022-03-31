// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

/*
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
*/




function capitalizeWord(word) {
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
}



function capitalizeWord(word) {
    let first = word.charAt(0).toUpperCase()
    let others = word.slice(1).toLowerCase()
    return first+others
}




function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}




const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());




const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);




function capitalizeWord(word) {
    const first = word[0].toUpperCase()
    return first + word.slice(1)
}




const capitalizeWord = w => `${w[0].toUpperCase()}${w.slice(1)}`;