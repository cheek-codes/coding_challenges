// Hungarian Vowel Harmony (easy)

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given a float? Will we be given an integer?




// Return the given word with an added ending of -nek if the first vowel is (e, é, i, í, ö, ő, ü, ű)
// Return the given word with an added ending of -nak if the first vowel is (a, á, o, ó, u, ú)




// If we were given dative("ablak"), should retuern "ablaknak"
// If we were given dative("szék"), should return "széknek"
// If we were given dative("otthon"), should return "otthonnak"