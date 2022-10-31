// Find the smallest integer in the array


// Given an array of integers your solution should find the smallest integer. 

// For example:
// Given [34, 15, 88, 2] your solution will return [2]
// Given [31, -345, -1, 100] your solution will return [-345]

// You can assume, for the purpose of this kata, that the supplies array will not be empty.



// P: Will we be given special characters? Will we be given strings? Will we be given an empty array? Will we be given floats? Will we be given only integers?



// R: Return the lowest integer in the array which includes negative integers



// E: 1. If we are given an array of [34, 15, 88, 2], should return 2
// E: 2. If we are given an array of [34, -345, -1, 100], should return -345
// E: 3. If we are given an array of [78, 56, 232, 412, 228], should return 56
// E: 4. If we are given an array of [1, -56, 232, 12, 8], should return -56



class SmallestIntegerFinder {
    findSmallestInt(args) {
        // to find the smallest integer using Math.min as well as a spread operator to expand the array
        return Math.min(...args)
    }
  }

  