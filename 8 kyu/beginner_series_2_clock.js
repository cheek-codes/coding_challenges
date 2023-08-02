// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59




// Will we be given a string? Will we be given any special characters? will we be given a float? Will we be given an integer? Will we be given a negative number? Will we be given a positive number? Will we be given any hours greater than 23? Will we be given any minutes greater than 59? Will we be given any seconds greater than 59?




// Return how many milliseconds there are in the given hours, minutes, and seconds.




// If we were given past(0, 1, 1), should return 61000
// If we were given past(1, 1, 1), should return 3661000
// If we were given past(0, 0, 0), should return 0
// If we were given past(1, 0, 1), should return 3601000
// If we were given past(1, 0, 0), should return 3600000






function past(h, m, s){
    let sec = s*1000
    let min = m*60000
    let hour = h*3.6e+6
    return sec+min+hour
}