// century from year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second centur spans form the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20




// Will we be given a string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers?




// Return the century from the given year




// 1. If we were given century(1705), should return 18
// 2. If we were given century(1900), should return 19
// 3. If we were given century(1601), should return 17
// 4. If we were given century(2000), should return 20





const century = year => Math.ceil(year/100)