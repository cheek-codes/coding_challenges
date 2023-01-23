// Third angle of a triangle

// fYou are given ttwo interior angles(in degrees) of a triangle.

// Write a function to return the third.

// Note: only poitive integers will be tested.




// Will we be given a string? Will we be given any special characters? Will we be given an array? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?





// With the given arguments of two interior angles of a triangle, return the thrid angle




// 1. If we were given otherAngle(30, 60), should return 90
// 2. If we were given otherAngle(60, 60), should return 60
// 3. If we were given otherAngle(43, 78), should return 59)
// 4. If we were given otherAngle(10, 20), should return 150




function otherAngle(a, b){
    // the total of the interior angles of a triangle is 180. so 180 - the two given angles.
    return 180 - (a+b)
}






const otherAngle = (a, b) => 180-(a+b)






function otherAngle(a, b) {
    return 180 - a - b;
}