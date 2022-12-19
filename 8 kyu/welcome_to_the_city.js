// welcome to the city

// create a method [sayHello]/[say_hello]/[SayHello] that takes as input a name, city, and state to welcome a person. Note that [name] will be an array consisting of one or more values that should be joined together with one space between each, and the length of the [name] array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given arrays? Will we be given an empty array? Will we be given floats? Will we be given an integer?




// Return a new sting where it will welcome a person to the city




// 1. If we were given sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), should return 'Hello, John Smith! Welcome to Phoenix, Arizona!'
// 2. If we were given (sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), shold return 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
// 3. If we were given (sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), should return 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')




function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}





const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`