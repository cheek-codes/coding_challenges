// Highest and lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string
// Output string must be separated by a single space, and highest number is first




// P: Will we be given empty strings/ Will we be given strings? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a string of number separated by a space with the highest number first and the lowest number second



// E: 1. If we were given highAndLow("1 2 3 4 5"), should return "5 1"
// E: 2. If we were given highAndLow("1 2 -3 4 5"), should return "5 -3"
// E: 3. If we were given highAndLow("1 9 3 4 -5"), should return "9 -5"




function highAndLow(numbers){
    // split the string
    let split = numbers.split(" ")
    // find max and min 
    let max = Math.max(...split)
    let min = Math.min(...split)
    // return
    return `${max} ${min}`
}





function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}





const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;





function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}




function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
}




function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
}




function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}




function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
    return [numbers[numbers.length-1], numbers[0]].join(' ')
}




function highAndLow(numbers){
    numbers = numbers.split(' ');
    
    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}




function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
}