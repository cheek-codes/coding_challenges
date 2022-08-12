// Abbreviate a two word name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters witha  dot spearating them.

// It should look like this:
// [Sam Harris] --> [S.H]
// [patrick feeney] --> [P.F]



// P: Will I be given a special character? Will there be numbers such as floats and integers? Will there be an empty string? Will we only be given strings?



// R: Return with capital first initial, [.], and capital last initial case insensitive



// E: 1. If we are given "john doe", should return "J.D"
// E: 2. If we are given "donald duck", should return "D.D"
// E: 3. If we are given "princess bubblegum", should return "P.B"



function abbrevName(name){
    // separate the first name and last name via the space in between the two
    let separate = name.split(" ")

    // change the firstname and lastname into all upper case and create a new variable for them both
    let first = separte[0].toUpperCase()
    let last = separate[1].toUpperCase()

    // take the first letter of the firstname and the first letter of the lastname and create a new variable for them both
    let firstAb = first[0]
    let lastAb = last[0]

    // return the first initial as a capital letter, a [.], and last initial as a capital letter using template literals
    return `${firstAb}. ${lastAb}` 
}