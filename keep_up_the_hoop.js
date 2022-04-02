// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input(n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks"
// If he doesn't get 10 hoops, return the string "Keep at it until you get it"



// P: Will we be given strings? Will we be given ekmpty strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return "Great, now move on to tricks" if Alex was able to make 10 or more hoops
// R: Return "Keep at it unitl you get it" if Alex makes less than 10 hoops



// E: 1. If we are given 10, should return "Great, now move on to tricks"
// E: 2. If we are given 20, should return "Great, now move on to tricks"
// E: 3. If we are given 1, should return "Keep at it unitl you get it"
// E: 4. If we are given 9, should return "Keep at it unitl you get it"



function hoopCount (n) {
    // create an if else statement   
   if (n >= 10){
     return "Great, now move on to tricks"
   }
   else {
     return "Keep at it until you get it"
   }
}



const hoopCount = n => n>=10? "Great, now move on to tricks" : "Keep at it until you get it"



function hoopCound (n) {
    return (n < 10) ? "Keep at it until you get it" : "Great, now move on to tricks"
}



function hoopCount (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
      ? 'Great, now move on to tricks'
      : 'Keep at it until you get it';
}