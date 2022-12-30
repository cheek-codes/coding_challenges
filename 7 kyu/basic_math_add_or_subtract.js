// basic math (add or subtract)

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string. 
// Note: the input will not be empty.

// Examples: 
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"




// Will we be given strings? Will we be given an empty string? Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given negative numbers? Will we be given positive numbers?




// Return a new string where math is done according to the given argument




// If we were given "1plus2plus3plus4", should return "10"
// If we were given "1plus2plus3minus4", should return "2"





function calculate(str) {
    return eval(str.replace(/plus/g, "+").replace(/minus/g, "-")).toString()
}






const calculate = str => eval(str.replace(/plus/g, "+").replace(/minus/g, "-")).toString()






function calculate(str) {
    let result = '';
    
    result = str.split('plus').join(' ')
              .split('minus').join(' -')
              .split(' ').reduce((a,c)=> +a + +c)  
    return result+'';
}