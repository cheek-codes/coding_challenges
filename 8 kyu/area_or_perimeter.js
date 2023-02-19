// area or perimeter

// You are given the length and width of a 4 sided polygon. The polygon can either be a rectangle or a square.

// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.





// Will we be given a string? Will we be given an array? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given a negative number? Will we be given positive numbers?




// Return the area of the polygon if the two given numbers are the same, so a square.
// Return the perimeter of the polygon if the two given numbers are not the same, so a rectangle.




// 1. If we were given 3, and 3, should return 9 because it is a square
// 2. If we were given 6, and 10, should return 32, because it is a rectangle




const areaOrPerimeter = function(l , w) {
    if (l === w){
      return l*w
    }
    else{
      return l+l+w+w
    }
}






const areaOrPerimeter = (l , w) => l === w ? l * w : l+l+w+w






areaOrPerimeter = (l , w) => l === w ? l * w : l+l+w+w