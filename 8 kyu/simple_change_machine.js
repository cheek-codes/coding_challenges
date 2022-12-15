// simple change machine

// Your task is to create a change machine. 

// The machine accepts a range of specified coind and notes, it returns change in 20p and 10p in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example, it will return "10p 10p".

// The machine accepts these coind and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not be broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces and no commas. The values of the string will be descending.





// Will we be given an empty string? Will we be given a string? Will we be given an array? Will we be given special characters? Will we be given floats? Will we be given an integer?





// Return a new string where a change of a mixture of 10p and 20p are given.





// 1. If we were given £5, should     return 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p
// 2. If we were given £2, should     return 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p
// 3. If we were given £1, should     return 20p 20p 20p 20p 20p
// 4. If we were given 50p, should     return 20p 20p 10p
// 5. If we were given 20p, should return 10p 10p