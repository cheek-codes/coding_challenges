// The falling speed of petals

// Whe it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that recieves the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:
// 1. the movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// 2. Pay attention to the data types.
// 3. If the initial velocity is non-positive, the return value should be 0.





// Will we be given a string? Will we be given special characters? Will we be given an array? Will we be given a float? Will we be given an integer? Will we be given negative numbers? Will we be given positive numbers?




// Return the velocity with the given speed of fall of the petal if the given number is greater than 0
// Return 0 if the given speed of fall of the petal is less than 0




// 1. If we were given sakuraFall(5), should return 80
// 2. If we were given sakuraFall(10), should return 40
// 3. If we were given sakuraFall(-5), should return 0





function sakuraFall(v) {
    if (v > 0){
      return (5*80/v)
    }
    else{
      return 0
    }
}






const sakuraFall = velocity => velocity > 0 ? 400 / velocity : 0;







function sakuraFall(v) {
    return v < 1 ? 0 : 400 / v;
}