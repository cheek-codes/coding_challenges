// will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.




// Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? will we be given negative numbers? Will we be given positive number?




// Return true if mpg*fl is greater than or equal to 0
// Return false if mpg*fl is less than 0




// If we were given zeroFuel(50, 25, 2), should return true
// If we were given zeroFuel(100, 50, 1), should return false






function zeroFuel(dtp, mpg, fl){
    let gas = (mpg*fl)
    if (gas >= dtp){
      return true
    }
    else{
      return false
    }
}






const zeroFuel = (dtp, mpg, fl) =>{
    if ((mpg*fl) >= dtp){
      return true
    }
    else{
      return false
    }
}






const zeroFuel = (dtp, mpg, fl) => ((mpg*fl) >= dtp) ? true : false






const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
}






const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;






const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
  };