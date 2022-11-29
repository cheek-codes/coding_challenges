// Total amount of points

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4




// P: Will we be given an empty string? Will we be given strings? Will we be given an empty array? Will we be given arrays? Will we be given special characters? Will we be given floats? will we be given integers? Will we be given negative numbers ? Will we be given positive number?




// R: Return a new number where the a new variable "scores" have added up all the match points (x: y)
// R: If x > y, add 3 points to the scores
// R: If x < y, add 0 points to the scores
// R: If x = y, add 1 point to the scores



// E: 1. If we are given ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"], should return 30
// E: 2. If we are given ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"], should return 10
// E: 3. If we are given ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"], should retrun 0
// E: 4. If we are given ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"], should retrun 15