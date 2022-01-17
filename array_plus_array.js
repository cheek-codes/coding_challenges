// Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// PS Each array includes onl integer numbers. Output is a number too.

/*
function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}
*/




// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// R: Return an integer with the sum of all the elements of the array




// E: 1. If we are given [1, 2, 3], [4, 5, 6], should return 21
// E: 2. If we are given [-1, -2, -3], [-4, -5, -6], should return -21
// E: 3. If we are given [0, 0, 0], [4, 5, 6], should return 15
// E: 4. If we are given [100, 200, 300], [400, 500, 600], should return 2100



function arrayPlusArray(arr1, arr2){
    let sum = 0
    for (let i = 0; i < arr1.length; i ++){
        sum += arr1[i]
    }
    for (let i = 0; i < arr2.length; i ++){
        sum += arr2[i]
    }
    return sum
}



function array(arr1, arr2){
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur)
}



function arrayPlusArray(arr1, arr2){
    let arr = [...arr1, ...arr2]
    return arr.reduce((a, b) => a + b)
}



function arrayPlusArray(...arrays){
    return [].concat(...arrays).reduce((a, b)=> a +b , 0)
}