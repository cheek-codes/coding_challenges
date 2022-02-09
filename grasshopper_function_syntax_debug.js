// Grasshopper - Function syntax debugging

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

/*
function main [verb, noun]
  return verb + noun
}
*/




// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given empty strings? Will we be given uppercase letters? Will we be given lower case letters?



// R: Return a concatinated string with the given verb and noun



// E: 1. If we are given a verb of "take" and a noun of "item", should return "take item"
// E: 2. If we are given a verb of "use" and a noun of "sword", should return "used sword"



function main (verb, noun){
    return verb + noun
}



const main = (verb, noun) => verb + noun;




function main(verb, noun) {
    if(arguments.length > 1)
      return verb.trim() + ' ' + noun.trim();
}