// Find out whether the shape is a cube.

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g. volume or side is less than or equal to 0).

// Note: the sides must be integers




// Will we be given strings? Will we be given special characters? Will we be given an array? Will we be givcen floats? Will we be given integers? Will we be given negative numbers? Will we be given postive numbers?




// Return true if the sides are equal and equals the volume
// Return false if the given sides or the given volume is less than or equal to zero
// Return false if the given sides are not equal




// 1. If we were given cubeChecker(56.3, 1), should return false
// 2. If we were given cubeChecker(-1, 2), should return false
// 3. If we were given cubeChecker(8, 3), should return false
// 4. If we were given cubeChecker(8, 2), should return true
// 5. If we were given cubeChecker(-8, -2), should return false
// 6. If we were give cubeChecker(0, 0), should return false
// 7. If we were given cubeChecker(1, 5), should return false
// 8. If we were given cubeChecker(125, 5), should return true
// 9. If we were given cubeChecker(125, -5), should return false




var cubeChecker = function(volume, side){
    if (side <= 0 || volume <= 0) {
      return false
    }
    else if (side**3 == volume){
      return true
    }
    else {
      return false
    }
}






function cubeChecker (volume, side){
    if (side <= 0 || volume <= 0) {
      return false
    }
    else if (side**3 == volume){
      return true
    }
    else {
      return false
    }
}






const cubeChecker = (volume, side) => (side <=0 || volume <=0) ? false : (side **3 == volume) ? true : false






var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0
}






var cubeChecker = function(volume, side){
    if (side<=0 || volume<=0){
      return false;
    }else if(Math.pow(side,3)!==volume){
      return false;
    }else{
      return true;
    }
};






const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);






var cubeChecker = function(volume, side){
    return volume > 0 ? side*side*side === volume : false;
};