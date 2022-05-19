// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.



// P: Will we be given an empty string? Will we be given a string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers/ Will we be given positive numbers?



// R: Return 1 if the given month is Jan, Feb, or March
// R: Return 2 if the given month is Apr, May, June
// R: Return 3 if the given month is July, Aug, Sept
// R: Return 4 if the given month is Oct, Nov, Dec



// E: 1. If we are given month 1, should return 1
// E: 2. If we are given month 2, should return 1
// E: 3. If we are given month 3, should return 1
// E: 4. If we are given month 4, should return 2
// E: 5. If we are given month 5, should return 2
// E: 6. If we are given month 6, should return 2
// E: 7. If we are given month 7, should return 3
// E: 8. If we are given month 8, should return 3
// E: 9. If we are given month 9, should return 3
// E: 10. If we are given month 10, should return 4
// E: 11. If we are given month 11, should return 4
// E: 12. If we are given month 12, should return 4



const quarterOf = (month) => {
    //create an if else statement for each quarters
    if (month === 1 || month === 2 || month === 3){
        return 1
    }
    else if (month === 4 || month === 5 || month === 6){
        return 2
    }
    else if (month === 7 || month === 8 || month === 9){
        return 3
    }
    else{
        return 4
    }
}



const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
}



const quarterOf = (month, quarter = 4) => {
    switch (month) {
      case 1:
      case 2:
      case 3:
        quarter = 1;
        break;
      case 4:
      case 5:
      case 6:
        quarter = 2;
        break;
      case 7:
      case 8:
      case 9:
        quarter = 3;
        break;
    }
    return quarter;
  };



  const quarterOf = (month) => {
    if (month <= 3) {
      quarter = 1; }
    else if (month <=6) {
      quarter = 2; }
    else if (month <=9) {
      quarter = 3; }
    else if (month <=12) {
      quarter = 4; }
    else {
      console.log('month is not valid')
    }
    
    return quarter  
}



const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
}