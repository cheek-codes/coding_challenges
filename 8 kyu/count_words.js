// count words

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:
// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// ... and so on

// What kind of test we made for your code:
// 1. Function have to count words and not spaces. You have to be sure that you doing it right.
// 2. Empty string has no words.
// 3. String with spaces around should be trimmed.
// 4. Non-whitespace(ex. breakspace, unicode chars) should be treated as a delimiter.
// 5. Double check that words with chars like -, ', ` are counted right.





// Will we be strings? Will we be given empty strings? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// Return an integer where it counts how many words are in the given parameter




// 1. If we were given countWords("Hello"), should return 1
// 2. If we were given CountWords("Hello, World!"), should return 2
// 3. If we were given countWords("No results for search term `s`"), should return 6
// 4. If we were given countWords(" Hello"), should return 1




const countWords = str => str.split(/\s+/).filter(x => x).length
