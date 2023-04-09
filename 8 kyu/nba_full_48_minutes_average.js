// NBA full 48 minutes average

// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!




// Will we be given a string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given positive numbers? Will we be given negative numbers?




// Return 0, if ppg or mpg is 0
// Return a new number rounded to the nearest .1 after doing math of (ppg/mpg)*48




// If we were given pointsPer48(12, 20), should return 28.8
// If we were given pointsPer48(10, 10), should return 48 
// If we were given pointsPer48(5, 17), should return 14.1 
// If we were given pointsPer48(0, 0), should return 0






function pointsPer48(ppg, mpg){
    let pts = (ppg/mpg)*48
    if (ppg===0 || mpg ===0){
      return 0
    }
    else{
      return Math.round(pts*10)/10
    }
}






function pointsPer48(ppg, mpg){
    if (ppg===0 || mpg ===0){
      return 0
    }
    else{
      return Math.round(((ppg/mpg)*48)*10)/10
    }
}






const pointsPer48 = (ppg, mpg) => ppg === 0 || mpg === 0?0 : Math.round(((ppg/mpg)*48)*10)/10






function pointsPer48(ppg, mpg) {
    return +(ppg/mpg*48).toFixed(1)||0
}






const pointsPer48 = (ppg, mpg) => mpg ? +(ppg*48/mpg).toFixed(1) : 0;






function pointsPer48(ppg, mpg) {
    return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}






function pointsPer48(ppg, mpg) {
    var num = (48/mpg) * ppg
    return +num.toFixed(1) || 0
}






pointsPer48 = (p, m) => +(p * 48 / m).toFixed(1) || 0;






const pointsPer48=(ppg, mpg)=>Math.round(ppg*48/mpg*10)/10 || 0






function pointsPer48(ppg, mpg) {
    const formula = (ppg * 48 / mpg).toFixed(1);
    return Number(formula) || 0;
}