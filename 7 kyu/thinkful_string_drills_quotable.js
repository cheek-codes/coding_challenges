// Thinkful - String Drills: Quotable

// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'
// For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

// 'Grae said: "Practice makes perfect"'
// Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.

// Click the "Train" button to get started, and be careful with your quotation marks.




// Will we be given a string? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return [name] said: "[quote]"




// If we were given quotable('Grae', 'Practice makes perfect'), should return 'Grae said: "Practice makes perfect"'
// If we were given quotable('Darrell', 'What the heck is this thing?'), should return 'Darrell said: "What the heck is this thing?"'




function quotable(name, quote){
    return `${name} said: "${quote}"`
}






const quotable = (name, quote) =>
  `${name} said: "${quote}"`






const quotable = (_, __) => `${_} said: "${__}"`






quotable=(name, quote)=>name+ " said: \"" + quote+"\""