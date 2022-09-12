// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



// P: Will we be given floats? Will we be given integers? Will we be given special characters? Will we be given a string? Will we be given an empty string? Will we be given uppercase letters? Will we be given lowercase letter?



// R: Return true if the beast and dish both start and end with the same letter.
// R: Return false if the beast and dish do no start and end with the same letter.



// E: 1. If we are given a beast called "great blue heron", and a dish called "garlic naan", should return true.
// E: 2. If we are given a beast called "chickadee", and a dish called "chocolate cake", should return true
// E: 3. If we are given a beast called "brown bear", and a dish called "bear claw", should return false
// E: 4. If we are given a beast called "marmot", and a dish called "mulberry tart", should return true



function feast(beast, dish) {
    // create an if else statement to test if the first letter are the same in beast and dish, as well as the last letter are the same in beast and dish. return true, if they are the same
    if (beast[0]=== dish[0] && beast[beast.length -1]=== dish[dish.length -1]){
        return true
    }
    
    // otherwise, return false
    else{
        return false
    }
}