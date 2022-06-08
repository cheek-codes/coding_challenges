// Closest elevator

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"



// P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return the name of the elevator closest to the called floor.
// R: Return the elevator to the right if both elevators are equally distant form the called floor.



// E: 1. If we were given elevator(0, 1, 0), should return "left"
// E: 2. If we were given elevator(0, 1, 1), should return "right"
// E: 3. If we were given elevator(0, 1, 2), should return "right"
// E: 4. If we were given elevator(0, 0, 0), should return "right"
// E: 5. If we were given elevator(0, 2, 1), should return "right"



function elevator(left, right, call){

    if (call === 0 && left === 0 && right != 0){
      return "left"
    }
    else if (call === 1 && left === 1 && right != 1){
      return "left"
    }
    else if (call === 2 && left === 2 && right != 2){
      return "left"
    }
    else if (call === 0 && left === 1 && right === 2){
      return "left"
    }
    else if (call === 2 && left === 1 && right === 0){
      return "left"
    }
    else if (call === 0 && right === 0 && left != 0){
      return "right"
    }
    else if (call === 1 && right === 1 && left != 1){
      return "right"
    }
    else if (call === 2 && right === 2 && left != 2){
      return "right"
    }
    else {
      return "right"
    }
}





const elevator = (left, right, call) => Math.abs(call-left) < Math.abs (call-right) ? "left" : "right"




function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}




function elevator(left, right, call){
    if(left === 0 && right === 1 && call === 0 ||
       left === 0 && right === 2 && call === 0 ||
       left === 1 && right === 0 && call === 1 ||
       left === 1 && right === 0 && call === 2 ||
       left === 1 && right === 2 && call === 0 ||
       left === 1 && right === 2 && call === 1 ||
       left === 2 && right === 0 && call === 2 ||
       left === 2 && right === 1 && call === 2) {
      return 'left';
    } else {
      return 'right';
    }
  }