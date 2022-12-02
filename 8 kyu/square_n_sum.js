// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9



// P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given an empty array?



// R: Return a new integer where the given array has all the number squared and added together.



// E: 1. If we were given [1, 2, 2], should return 9
// E: 2. If we were given [1, 2], should return 5
// E: 3. If we were given [0, 3, 4, 5], should return 50
// E: 4. If we were given [], should return 0
// E: 5. If we were given [-1, -2], should return 5
// E: 6. If we were given [-1, 0, 1], should return 2




function squareSum(numbers){
    let maths = 0
    for (let i = 0; i < numbers.length; i ++){
      maths += numbers[i]**2
    }
    return maths
}



function squareSum(number){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum
    }, 0)
}



function squareSum(number){
    return numbers.reduce((sum, num) => sum + (num*num), 0)
}



function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
}



const squareSum = number => numbers.reduce((a, b) => a+b**2, 0)



function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}



function squareSum(numbers) {
    return numbers.reduce((s,a)=>s+a*a,0);
}