// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 throught the function, 81181 will come out because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and retruns an integer



// P: Will we be gvien empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a single integer where the square of every digit of a given number is squared and concatenated.



// E: 1. If we are given 9119, should return 811181
// E: 2. If we are given 3212, should return 9414
// E: 3. If we are given 2112, should return 4114
// E: 4. If we are given 0, should return 0



function squareDigits(num){
    // create a new variable, where I can turn the number into a string and split it into separate characters
    let split = ("" + num).split("");

    // create a for loop to loop through those numbers and ^2 them
    for (let i = 0; i < split.length; i ++){
        split[i] = split[i]**2
    }
    return parseInt(split.join(""))
}



function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
}



function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}



function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}



function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
}



function squareDigits(num){
    var string = num.toString()
    var results = []
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i]
    }
    return Number(results.join(''))
}



function squareDigits(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
}