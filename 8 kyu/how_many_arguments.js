// How many arguments?

// Create a function called args_count that returns the number of arguments provided

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4



// P: Will we be given empty strings? Will we be given strings? Will we be given empty arrays? Will we be given arrays? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a number of arguments that is given



// E: 1. If we are given args_count(1, 2, 3), should return 3
// E: 2. If we are given args_count(1, 2, 3, 10), should return 4
// E: 3. If we are given args_count(), should return 0
// E: 4. If we are given args_count("a", "b", "c"), should return 3
// E: 5. If we are given args_count(["blah", "food"]), should return 1




function args_count(){
    return arguments.length
}



const args_count = (...args) => args.length



function args_count(...args){
    return args.length
}



const args_count = (...number) => number.length
