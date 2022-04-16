// Gravity flip

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]



// P: Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a new string where if d was === "R", the order of the array would be in order from smallest to largest
// R: Return a new string where if d was === "L", the order of the array would be in order from largest to smallest



// E: 1. If we are given "R", and [3, 2, 1, 2], should return [1, 2, 2, 3]
// E: 2. If we are given "R", and [1, 4, 5, 3, 5 ], should return [5, 5, 4, 3, 1]
// E: 3. If we are given "R", and [1, 4, 5, 3, 5 ], should return [1, 3, 4, 5, 5]
// E: 4. If we are given "L", and [3, 2, 1, 2], should return [3, 2, 2, 1]



const flip=(d, a)=>{
    return a.sort((a, b) => d === "R" ? a-b : b-a)
}



const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
}



const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);



const flip = (direction, arr) => {
    return arr.sort((a, b) => direction === 'R' ? a - b : b - a);
}



const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)



const flip=(d, a)=>{
    if (d=="R")
      a.sort((b,c)=>b-c);
    else
      a.sort((b,c)=>c-b);
    return a;
}