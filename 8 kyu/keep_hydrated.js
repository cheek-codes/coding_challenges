// Keep Hydrated

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5




// Will we be given a string? Will we be given any special characters? Will we be given a float? Will we be given an integer? Will we be given a negative number? Will we be given a positive number?




// Return a number that is rounded down to the nearest whole number after multiplying the time by .5




// If we were given litres(2), should return 1
// If we were given litres(6.7), should return 3
// If we were given litres(11.8), should return 5






function litres(time) {
    let water = time*.5
    return Math.floor(water)
}






function litres(time) {
    return Math.floor(time*.5)
}






const litres = time => Math.floor(time/2)






function litres(time) {
    return (time / 2) | 0;
}






const litres = (t) => t / 2 | 0;