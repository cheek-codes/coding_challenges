// Twice as old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.



// P: Will we be given empty strings? Will we be given strings/ Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return an integer where the father was twice as old as the son or will be twice as old as the son



// E: 1. If we are given 36 for the father and 7 for the son, should return 22
// E: 2. If we are given 55 for the father and 30 for the son, should return 5
// E: 3. If we are given 42 for the father, and 21 for the son, should return 0
// E: 4. If we are given 22 for the father, and 1 for the son, should return 20
// E: 5. If we are given 29 for the father, and 0 for the son, should return 29



function twiceAsOld(dadYearsOld, sonYearsOld){
    // let's do some maths
    let son = sonYearsOld * 2
    let dad = dadYearsOld - son
    return Math.abs(dad)
}



function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}



function twiceAsOld(a, b) {
    return a>2*b ? a-2*b : 2*b-a;
}



const twiceAsOld = (d, s) => Math.abs(d - 2 * s);



function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld*2)-dadYearsOld)
}