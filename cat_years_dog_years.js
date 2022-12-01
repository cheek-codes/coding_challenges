// Cat years, Dog years

// I have a cat and a dog.
// I got them at the same times as kitten/puppy. That was [humanYears] years ago.
// Retrun their respective ages now as [humanYears, catYears, dogYears]

// Notes:
// humanYears >= 1
// humanYears are whole numbers only

// Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that




// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return the ages of the human, cat, and dog in the given amount of years



// E: 1. If we were given 1 humanYears, should return [1, 15, 15]
// E: 2. If we were given 2 humanYears, should return [2, 24, 24]
// E: 3. If we were given 10 humanYears, should return [10, 56, 64]





var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1){
      return [ 1, 15, 15 ]
    }
    else if (humanYears === 2){
      return [ 2, 24, 24]
    }
    else {
      return [ humanYears, 24+(4*(humanYears-2)), 24+(5*(humanYears-2))]
    }
}




var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}




const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
}




const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
]




function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
}




var humanYearsCatYearsDogYears = function(humanYears) {
    var catYears = 0;
    var dogYears = 0;
    
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears > 2) {
      catYears = 24 + (humanYears - 2) * 4;
      dogYears = 24 + (humanYears - 2) * 5;
    }
  
    return [humanYears, catYears, dogYears];
}




var humanYearsCatYearsDogYears = x => x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x , 24 + ( 4 * (x-2)), 24 + (5 * (x-2))];




const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h];




const humanYearsCatYearsDogYears = humanYears =>
  [humanYears, (--humanYears ? 20 : 15) + 4 * humanYears, (humanYears ? 19 : 15) + 5 * humanYears];





var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears >= 2) {
      return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
    }
    return [humanYears, 15, 15];
}




const humanYearsCatYearsDogYears = $ => 
      $ == 1 ? [1, 15, 15] : 
      $ == 2 ? [2, 24, 24] : 
      [$ , 24 + ( 4 * ($ - 2)), 24 + (5 * ($ - 2))];




const humanYearsCatYearsDogYears = hYears => {
    if (hYears === 1) return [1, 15, 15]
        return [hYears, (hYears - 2) * 4 + 24, (hYears - 2) * 5 + 24]
}