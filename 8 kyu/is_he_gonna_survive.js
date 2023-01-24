// is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! Each dragon takes 2 bulltes to be defeated, our hero has no idea how many bullets he should carry. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise




// Will we be given a string? Will we be givne special characters? Will we be given floats? Will we be given integers? will we be given negative numbers? Will we be given positive numbers?




// Return true if the hero has enough bullets to kill the dragons, and false if he doesn't




// 1. If we were given hero(10, 5), should return true
// 2. If we were given hero(7, 4), should return false
// 3. If we were given hero(4, 5), should return false
// 4. If we were given hero(100, 40), should return true
// 5. If we were given hero(1500, 751), should return false




function hero(bullets, dragons){
    if (bullets / dragons >= 2){
      return true
    }
    else{
      return false
    }
}






const hero = (bullets, dragons) => (bullets / dragons >= 2) ? true : false






function hero(bullets, dragons){
    return bullets >= dragons * 2
}






const hero = (bullets, dragons) => dragons * 2 <= bullets;






function hero(bullets, dragons){
    //Get Coding!
    return (bullets / 2 >= dragons) ? true : false;
}






const hero = (bullets, dragons) => bullets >= dragons * 2;