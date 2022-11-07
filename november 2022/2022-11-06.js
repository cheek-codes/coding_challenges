// Opposites Attract

// Timmy and Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals, and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and retrun true if they are in love and false if they aren't. 



// P: Will we be given a string? Will we be given a float? Will we be given an empty string? Will we only be given an integer? Will we be given a negative integer?



// R: Return true if one of the picked flower has an even number of petals, while the other picked flower has an odd number of petals.
// R: Return false if both picked flowers has an even number petals.
// R: Return false if both picked flowers has an odd number of petals.



// E: 1. If we are given 5 petals for flower1, and 8 petals for flower2, should return true
// E: 2. If we are given 8 petals for flower1, and 5 petals for flower2, should return true
// E: 3. If we are given 8 petals for flower1, and 6 petals for flower2, should return false
// E: 4. If we are given 7 petals for flower1, and 3 petals for flower2, should return false
// E: 5. If we are given 4 petals for flower1, and 4 petals for flower2, should return false
// E: 6. If we are given 7 petals for flower1, and 7 petals for flower2, should return false



function loverfunc(flower1, flower2){
    // use if else statements to test if both flowers are even/odd, or if one of the flower is odd while the other is even and vice versa.
    // use a modulus to find the remainder.
    // if remainder is equal to 0, then the number is even, while if the remainder is not equal to 0, then the number is odd.
    if (flower1 % 2 === 0 && flower2 % 2 != 0 || flower2 % 2 === 0 && flower1 % 2 != 0){
        return true
      }
      else{
        return false
      }
}