// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// For example:
// "GCAT"  =>  "GCAU"



// P: Will we be given numbers such as floats and integers? Will we be given empty strings? Will we be given uppercase letters? Will we be given lowercase letters?



// R: Return a new string that has replaced T with U



// E: 1. If we are given "GCAT", should return "GCAU"



function DNAtoRNA(dna){
    // using .replace() method. replace all global "T" with an "U"
    return dna.replace(/T/g, 'U');
}



// another way
function DNAtoRNA(dna) {
    // using the .split() method, take out the "T", then using the .join() method to rejoin the string with "U"
    return dna.split("T").join("U");
}



//long way
function DNAtoRNA(dna) {
    // create a new variable hold to hold the new string
    var hold = ''

    // create a new for loop to loop through the given parameter.
    // create an if else statement to see if the given parameter has a "T", if true, replace it with "U"
    for(var i =0;i<dna.length;i++) {
       if(dna[i]=="T") {
          hold+="U"
  }
  else{hold+=dna[i]}
  }

  // return the variable hold with new string
  return hold;
}