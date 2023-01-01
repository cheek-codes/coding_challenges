// Cat and Mouse - Easy Version

// You will be given a string (x) featuring a cat "C" and a mouse "m". The rest of the string will be make up of  '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return "Escaped!" if there are 4 or more characters between C and m
// Return "Caught!" if there are 3 or less characters between C and m




// If we were given 'C....m', should return "Escaped!"
// If we were given 'C..m', should return "Caught!"
// If we were given 'C.....m', should return "Escaped!"




function catMouse(x){
    if(x.length > 5){
      return "Escaped!"
    }
    else{
      return "Caught!"
    }
}






const catMouse = x => x.length>5? "Escaped!": "Caught!"






function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
}






function catMouse(x) {
    var count = 0;
    for (var i in x) {
        if (x[i] === ".") {
            count++;
        }
    }
    if (count <= 3) {
        return "Caught!";
    } else {
        return "Escaped!";
    }
}






function catMouse(s){
    return Math.abs(s.indexOf('C') - s.indexOf('m'))>4? 'Escaped!':'Caught!'; 
}