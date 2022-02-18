// grasshopper grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score -->Letter Grade
// 90 <= score <= 100 --> 'A'
// 80 <= score < 90 --> 'B'
// 70 <= score < 80 --> 'C'
// 60 <= score < 70 --> 'D'
// 0 <= score < 60 --> 'F'

// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.



// P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given numbers above 100?



// R: Return "A", if grades are greater than or equal to 90, but less than 100
// R: Return "B", if grades are greater than or equal to 80, but less than 90
// R: Return "C", if grades are greater than or equal to 70, but less than 80
// R: Return "D", if grades are greater than or equal to 60, but less than 70
// R: Return "F", if grades are greater than or equal to 0, but less than 60



// E: 1. If we are given 98, should return "A"
// E: 2. If we are given 84, should return "B"
// E: 3. If we are given 72, should return "C"
// E: 4. If we are given 69, should return "D"
// E: 5. If we are given 10, should return "F" 



function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3)/3
    
    if (avg >= 90 && avg <= 100){
      return "A"
    }
    else if (avg >= 80 && avg < 90){
      return "B"
    }
    else if (avg >= 70 && avg < 80){
      return "C"
    }
    else if (avg >= 60 && avg < 70){
      return "D"
    }
    else if (avg >= 0 && avg < 60){
      return "F"
    }
}



function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
}



function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}