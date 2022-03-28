// calculate bmi

// Write function bmi that calculates body mass index (bmi = weight/height^2)

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



// P: Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return "Underweight" if bmi <= 18.5
// R: Return "Normal" if bmi <= 25.0
// R: Return "Overweight" if bmi <= 30.0
// R: Return "Obese" if bmi > 30



// E: 1. If we are given a bmi of 12, should return "Underweight"
// E: 2. If we are given a bmi of 22, should return "Normal"
// E: 3. If we are given a bmi of 29, should return "Overweight"
// E: 4. If we are given a bmi of 33, should return "Obese"



function bmi(weight, height) {
    // create a new variable called math to do some math using the formula that was given to calculate the bmi
    let math = (weight/(height**2))

    // create if else statements to check the bmis
    if (math <= 18.5) {
      return "Underweight"
    }
    else if (math <= 25.0) {
      return "Normal"
      }
    else if (math <= 30.0) {
      return "Overweight"
    }
    else{
      return "Obese"
    }
}



function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
}