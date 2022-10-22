// Student's final grade

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

// Examples(Inputs-->Output):
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 85, 5 --> 90
// 55, 3 --> 75
// 55, 0 --> 0
// 20, 2 --> 0

// Note:
// Use comparison and logical operators



// P: Will we be given an empty string? Will we be given a string? Will we be given floats? Will we be given integers?



// R: Return a grade of 100 if the exam grade is more than 90 or if the number of completed projects is more than 10.
// R: Return a grade of 90 if the exam grade is more than 75 and if the number of completed projects is 5 or more.
// R: Return a grade of 75 if the exam grade is more than 50 and if the number of completed projects is 2 or more.
// R: Return a grade of 0 if the exam grade is less than 50 and if the number of completed projects is less than 2.




function finalGrade (exam, projects) {
    // create an if else statement
    // if exam grade is greater than 90 or number of completed projects is greater than 10, return a final grade of 100
    if(exam > 90 || projects > 10){
      return 100
    }

    // if exam grade is greater than 75 and number of completed projects is greater than or equal to 5, return a final grade of 90
    else if(exam > 75 && projects >= 5){
      return 90
    }

    // if exam grade is greater than 50 and number of completed projects is greater than or equal to 2, return a final grade of 75
    else if(exam > 50 && projects >= 2){
      return 75
    }

    // other wise, return the final grade of 0
    else {
      return 0
    }
}