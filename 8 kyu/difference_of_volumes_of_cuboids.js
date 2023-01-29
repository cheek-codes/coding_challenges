// Difference of volumes of cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger. 

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8

// Your function will be tested with pre-made examples as well as random ones. 

// If you can, try writing it in one line of code.




// Will we be given strings? Will we be given an array? Will we be given an empty array? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return the difference of volumes with the given parameters in a cuboid



// 1. If we were given findDifference([3, 2, 5], [1, 4, 4]), should return 14
// 2. If we were given findDifference([9, 7, 2], [5, 2, 2]), should return 106
// 3. If we were given findDifference([11, 2, 5], [1, 10, 8]), should return 30





function findDifference(a, b) {
    let aa = a[0]
    let bb = b[0]
    for(let i = 1; i < a.length; i ++){
      aa *= a[i]
    }
    for(let i = 1; i < b.length; i ++){
      bb *= b[i]
    }
    return Math.abs(aa - bb)
}






function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}






function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}






function volume(c) {
    return c.reduce((x, y) => x * y);
  }
  
  function find_difference(a, b) {
    return Math.abs(volume(a) - volume(b));
}






function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
}






function findDifference(a, b) {
    return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);
}






function find_difference(a, b) {
    return Math.abs(a.reduce(function(x,y){return x*y;}) - b.reduce(function(x,y){return x*y;}))
}






function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
}






find_difference=(a, b)=>(c=(a,b)=>a*b,Math.abs(a.reduce(c) - b.reduce(c)))