// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example:
// [1,-4,7,12] => 1 + 7 + 12 = 20

// Note if there is nothing to sum, the sum is default to 0.



// P: Will we be given a string? Will we be given an empty string? Will we be given a float? Will we be given a negative number? Will we be given an empty array?



// R: Return a sum of all only the positive numbers from the given array.



// E: 1. If we are given the array [1,-4,7,12], should return 20 because 1 + 7 + 12 = 20
// E: 2. If we are given the array [2,4,6,0], should return 12 because 2 + 4 + 6 + 0 = 12
// E: 3. If we are given the array [-9393,5,2,3], should return 10 because 5 + 2 + 3 = 10



function positiveSum(arr){
    // set up a variable where numbers can be added
    var sum = 0

    // set up a loop to go through array of any given length
    for(let i=0; i<arr.length; i++){
        // only add positive/numbers greater than zero from the array
        if(arr[i] > 0){
            // add the positive/numbers greater than zero to the variable sum
            sum += arr[i]
        }
    }
    // return the variable sum
    return sum
}