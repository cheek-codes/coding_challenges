// vowel one

// Write a function that takes a string and outputs a strings of 1s and 0s where vowels becomem 1s and non-vowels become 0s.

// All non-vowels including non alpha characters(spaces, commas etc.) should be included.

// Examples:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given array? Will we be given floats? Will we be given integers?




// Retrun a new string where vowels are replaced with 1 and everything else is replaced with 0




// 1. If we were given "abceios", should return "1001110"
// 2. If we were given "aeiou, abc", should return "1111100100"





function vowelOne(s){
    return s.replace(/[^aeiouAEIOU]/g, 0).replace(/["aeiouAEIOU"]/g, 1)
}






const vowelOne = s => s.replace(/[^aeiouAEIOU]/g, 0).replace(/["aeiouAEIOU"]/g, 1)






function vowelOne(s){
    return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}






function vowelOne(s){
    return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}






function vowelOne(s){
    s = (s.replace(/[^aeiou]/gi,'0')).replace(/[aeiou]/gi,'1');
    return s;
}






let vowelOne = (s) => [...s].map(c => /[aeiou]/i.test(c) ? '1' : '0').join('')






const vowelOne = s => s.replace(/[^aeiou]/gi,'0').replace(/[aeiou]/gi,'1');






const vowelOne = s => s.replace(/./g, c => +/[aeiou]/i.test(c));






const vowelOne = s => s.replace(/([aeiou])|./gi, (_, v) => v ? 1 : 0);






function vowelOne(s){
    return [...s].map( item => item.match(/[aeiou]/i) ? 1 : 0).join('');
}