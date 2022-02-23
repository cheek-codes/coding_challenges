// Grasshopper-Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: [name] and [owner].

// Use conditionals to return the proper message:


// case --> return
// name equals owner --> 'Hello boss'
// otherwise --> 'Hello guest'




// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given strings? Will we be given empty strings?



// R: Return "Hello boss" if [name] === [owner]
// R: Return "Hello guest" if [name] != [owner]



// E: 1. If we are given a name of "Daniel", and owner of "Daniel", should return "Hello boss"
// E: 2. If we are given a name of "Samuel", and owner of "James", should return "Hello guest"
// E: 3. If we are given a name of "Watermelon-Andrea", and owner of "Watermelon-Andrea", should return "Hello boss"
// E: 4. If we are given a name of "Christopher", and owner of "James", should return "Hello guest"



function greet (name, owner) {
    // Add code here
    if(name === owner){
      return "Hello boss"
    }else {
      return "Hello guest"
    }
}



const greet = (name, owner) => (name === owner)? "Hello boss": "Hello guest"



function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest';
}



function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
}