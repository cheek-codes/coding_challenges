// Return negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples:
// makeNegative(1);    --> return -1
// makeNegative(-5);   --> return -5
// makeNegative(0);    --> return 0
// makeNegative(0.12); --> return -0.12

// Notes:
// The number can be negative already, in which case no change is required.
// Zero(0) is not checked for any specific sign. Negative zeros make no mathematical sense.



// P: Will we be given strings? Will we be given empty strings? Will we be given floats? Will we be given positive integers? Will we be given negative integers?



// R: Return a negative number if the given integer is a positive number.
// R: Return a negative number if the given integer is a negative number. So no change is needed to this given number
// R: Return zero(0) if the given integer is a zero(0)



// E: 1. If we are given makeNegative(1), should return -1
// E: 2. If we are given makeNegative(-5), should return -5
// E: 3. If we are given makeNegative(0), should return 0
// E: 4. If we are given makeNegative(0.12), should return -0.12
// E: 5. If we are given makeNegative(-0.8), should return -0.8



function makeNegative(num){
    // set up an if else statement
    if(num > 0){
        // if num is > 0, should return as a negative number by multiplying it by -1
        return (-1 * num)
    }
    else{
        // return the number just the way it was
        return num
    }
}