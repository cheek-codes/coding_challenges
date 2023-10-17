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