// Find maximum and minimum valuse of a list

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input --> Output)
// [4,6,2,1,9,63,-134,566] --> max = 566, min = -134
// [-52, 56, 30, 29, -54, 0, -110] --> min = -110, max = 56
// [42, 54, 65, 87, 0] --> min = 0, max = 87
// [5] --> min = 5, max = 5

// Notes:
// You may consider that there will not be any empty array/vectors.



// P: Will there be strings? Will there be special characters? Will there be an array? Will there be an empty array? Will there be floats? Will there be integers? Will there be negative numbers/ Will there be positive numbers?



// R: Return the minimum and maximum of a given array.



// E: 1. If we are given an array of [4,6,2,1,9,63,-134,566], should return as max = 566, min = -134
// E. 2. If we are given an array of [-52, 56, 30, 29, -54, 0, -110], should return as min = -110, max = 56
// E. 3. If we are given an array of [42, 54, 65, 87, 0], should return as min = 0, max = 87
// E: 4. If we are given an array of [5], should return as min = 5, max = 5



var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}




var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}




var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}




var min = function(list){
    let res = list[0];
       for(let i = 1; i < list.length; i++){
       if(list[i] < res){res = list[i]; }
       }
      return res;
}
    
var max = function(list){
    let res = list[0];
    for(let i = 1; i < list.length; i++){
    if(list[i] > res){res = list[i]; }
    }
    return res;
}