// is this my tail?

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument(body) - other wise the tail won't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.



/*
function correctTail(bod, tail ;
  
  sub = body.substr(bodylength-(tail.length)
  
  if sub = tail) ;
    return true
  }
  else 
    return false
*/



// P: Will we be given floats? wWill we be given integers? Will we be given special characters? Will we be given strings? Will we be given empty strings?



// R: Return true if the argument(tail) is the same letter as the last letter of the argument(body)
// R: Return false if the argument(tail) is a different letter as the last letter of the argument(body)



// E: 1. If we are given a body of "fox", and tail of "x", should return true
// E: 2. If we are given a body of "rhino", and tail of "o", should return true
// E: 3. If we are given a body of "meerkat", and tail of "t", should return true
// E: 4. If we are given a body of "fox", and tail of "o", should return false
// E: 5. If we are given a body of "rhino", and tail of "x", should return false
// E: 6. If we are given a body of "meerkat", and tail of "o", should return false



function correctTail(body, tail){
    sub = body.substr(body.length-(tail.length))
    if (sub === tail){
      return true
    }
    else {
      return false
    }
}



let correctTail = (body, tail) => body.substr(body.length - (tail.length)) === tail ? true: false



function correctTail(bod, tail){
    return bod[bod.length-1] === tail
}