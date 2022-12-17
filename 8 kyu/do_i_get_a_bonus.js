// Do I get a bonus?

// It's bonus time in the big city! the fatcats are rubbing their paws in anticipation... but whos is going to make the most moeny?

// Build a function that takes in two arguments(salary, bonus). Salery will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplies by 10. If bonus is false, the fatcat did not make enough money and must recieve only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3"





// Will we be given strings? Will we be given empty strings? Will we be given booleans? Will we be given arrays? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// If bonus is true, return salary * 10
// If bonus is false, return salary




// 1. If we were given bonusTime(10000, true), should return £100000
// 2. If we were given bonusTime(25000, true), should return£250000
// 3. If we were given bonusTime(10000, false), should return £10000
// 4. If we were given bonusTime(60000, false), should return£60000
// 5. If we were given bonusTime(2, true), should return £20
// 6. If we were given bonusTime(78, false), should return £78
// 7. If we were given bonusTime(67890, true), should return £678900




function bonusTime(salary, bonus) {
    if (bonus === true){
      return `£${salary * 10}`
    }
    else{
      return `£${salary}`
    }
}





const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`





function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}





const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;





function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}