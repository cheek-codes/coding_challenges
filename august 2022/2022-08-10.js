// Name Shuffler

// Write a function that returns a string in which firsname is swapped with lastname.

// example(input --> output)
// "john McClane" --> "McClane john"



// P: Will I be given special character? Will I be given numbers such as floats and integers? Will there be empty strings? Will I only be given strings?



// R: Return as



// E: 1. If we are given a number of 2, should return 3 because 1 + 2 = 3
// E: 2. If we are given a number of 8, should return 36 because 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
// E: 3. I we are given a number of 4, should return 10 because 1 + 2 + 3 + 4 = 10



var summation = function (num){
    // create a new variable to hold the numbers. let it equal to 0 so it can hold the numbers.
    let math = 0

    // use for loop to loop through all the integers from 1 to the number given. then add all the integers to the variable the i created.
    for(let i = 0; i <= num; i ++){
        math += i
    }

    // return the variable i created to show the total sum.
    return math
}

