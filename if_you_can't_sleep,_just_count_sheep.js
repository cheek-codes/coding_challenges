// If you can't sleep, just count sheep

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



// P: Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a new string where it will be counting the number of sheeps that was given



// E: 1. If we are given 3, should return "1 sheep...2 sheep...3 sheep..."
// E: 2. If we are given 2, should return "1 sheep...2 sheep..."



var countSheep = function (num){
    // create a new variable that holds an empty string
    let str = "";

    // create a for loop to loop through the number that was given so it will print the loops. add the loops to a string using template literals
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }

    // return the new string
    return str;
}



const countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')



countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``



var countSheep = function (n){
    return [...Array(n)].map((_,i)=>i+1+' sheep...').join``
}



const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');
