// Crash Override

// Every budding hacker needs an aliias! [The Phantom Phreak], [Acid Burn], [Zero Cool], and [Crash Override] are some notable examples from the film [Hackers].

// Your task is to create a function taht, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
// If the first character of either of the names given to the function is not a letter from [A-Z], you should return "Your name must start with a letter from A - Z"
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors. 

// Examples:
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// Happy hacking!





// Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers?




const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}