// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer form 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// PS You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the formate, look at the sample tests.



// P: Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a string of multiplication table of the given parameter number.
// R: Return the following if the given parameter is 5:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50



// E: 1. If we are given a parameter of 5, should return:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// E: 2. If we are given a parameter of 2, should return:
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 4 * 2 = 8
// 5 * 2 = 10
// 6 * 2 = 12
// 7 * 2 = 14
// 8 * 2 = 16
// 9 * 2 = 18
// 10 * 2 = 20
// E: 3. If we are given a parameter of 10, should return:
// 1 * 10 = 10
// 2 * 10 = 20
// 3 * 10 = 30
// 4 * 10 = 40
// 5 * 10 = 50
// 6 * 10 = 60
// 7 * 10 = 70
// 8 * 10 = 80
// 9 * 10 = 90
// 10 * 10 = 100



let multiTable = n => {
    // create a template literal for every number from 1 - 10 for a multiplication table. #brootle
    return `1 * ${n} = ${1*n}
    2 * ${n} = ${2*n}
    3 * ${n} = ${3*n}
    4 * ${n} = ${4*n}
    5 * ${n} = ${5*n}
    6 * ${n} = ${6*n}
    7 * ${n} = ${7*n}
    8 * ${n} = ${8*n}
    9 * ${n} = ${9*n}
    10 * ${n} = ${10*n}`
}



// better. less lines
const multiTable = (number) => {
    // create a new variable named table to hold the final string
    let table = ""

    // create a for loop to loop through the given number starting at 1 all the way through the given number
    for(let i=1; i<=10; i++){
        // using a template literal, create a new string with the muliplication table of the given number
        table += `${i} * ${number} = ${i * number}${i<10 ? "\n" : ""}`
    }
    return table
}



// try
function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}



// less lines
function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}



// lesser lines
const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')
