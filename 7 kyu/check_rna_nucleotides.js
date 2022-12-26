// check RNA nucleotides

// RNA Nucleotides are represented by four letter: "A", "G", "C" and "U". Any other letters are onsidered invalid for nucleotides of an RNA sequence.

// Create a function to check the given sequence of letters to ensure there are no invalid Nucleotides.

// Return the message "Valid Sequence: (letters sequence)" if it is true.

// return the message "There is an invalid letter: (letter). At position: (position in sequence)" for the first occurance of an invalid letter.

// For example:
// Given the sequence"AUAUA", the result should return "Valid Sequence: AUAUA".
// Given the sequence "GAUAB", the result should return "There is an invalid letter: B. At position: 5".

// The reported position of the first invalid letter should be using real world counting, counting from 1 not 0, e.g. from sequence AADF, D = position 3.
// All inputs will be in uppercase and only letter A-Z

// Good luck!




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given array? Will we be given floats? Will we be given integers?




// Return "Valid Sequence: (letters sequence)" if the letters of the given nucleotides are valid
// Return "There is an invalid letter: (letter). At position: (position in sequence"




// 1. If we were given "AUAUA", should return "Valid Sequence: AUAUA".
// 2. If we were given "GAUAB", should return "There is an invalid letter: B. At position: 5".




function checkNucleotides(sequence) {
    for(let i = 0; i < sequence.length; i++){
      if (!["A", "G", "C", "U"].includes(sequence[i]))
        return`There is an invalid letter: ${sequence[i]}. At position: ${i + 1}`
    } 
    return "Valid Sequence: " + sequence
}  






const checkNucleotides = r => (i=r.search(/[^AGCU]/)) == -1 ? `Valid Sequence: ${r}` : `There is an invalid letter: ${r[i]}. At position: ${i+1}`