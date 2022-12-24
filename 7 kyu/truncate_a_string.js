// truncate a string

// Truncate the given string(first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Nothe that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. 

// Examples
// ('codewars', 9)  ==>  'codewars'
// ('codewars', 7)  ==>  'code...'
// ('codewars', 2)  ==>  'co...'




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where it is truncated with a "..." ending if the maximum length is less than or equal to 3 without adding to the string length.
// Return a new string where it is truncated with a "..." ending if the maximum length is more than 3 that will add ... to the total length of the string
// Return the string without "..." ending if the maximum length is the same number of characters as the string.




// If we were given ('codewars', 9), should return 'codewars'
// If we were given ('codewars', 7), should return 'code...'
// If we were given ('codewars', 2), should return 'co...'






function truncateString(str, num) {
    // if num <=3 return str +...
    if (num <= 3){
      return `${str.slice(0, num)}...`
    }
    // if num >= str.length return str
    else if (num >= str.length){
      return `${str}`
    }
    // if num > 3 return str.length -3 + ...
    else if (num > 3){
      return `${str.slice(0, num-3)}...`
    }
}






function truncateString(str, num) {
    if (num <= 3) {
        return str.slice(0, num).concat("...");
    } else if (str.length > num) {
      return str.slice(0, ( num - 3)).concat("...");
    } else {
      return str; 
    }
}






function truncateString(str, num) {
    return str.length > num ? str.slice(0,num>3 ? num-3 : num)+"..." : str
}





const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num - (num > 3) * 3) + `...` : str;






function truncateString(str, num) {
 if (str.length <= num)
    return str;

 return str.substr(0, (num <= 3 ? num : num-3)) + '...';
}






const truncateString=(str, num)=>num>=str.length ? str : num>3 ? str.slice(0,num-3)+'...' : str.slice(0,num)+'...';