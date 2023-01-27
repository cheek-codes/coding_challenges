// USD => CNY

// Create a function that converst US dollars (USD) to Chines Yuan (CNY). The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by "Chinese Yuan"

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")




// Will we be given a string? Will we be given special characters? Will we be given an array? Will we be given a float? Will we be given an integer? Will we be given negative numbers? Will we be given positive numbers?




// When given a number in usd, return a converted amount in cny




// 1. If we were given usdcny(15), should return "101.25 Chinese Yuan"
// 2. If we were given usdcny(465), should return "3138.75 Chinese Yuan"




function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}






const usdcny = usd => {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}






const usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`






usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;