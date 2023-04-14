// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!




// Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return 0 if n or m is less than or equal to 0
// Return a new number where n*m




// If we were given paperwork(5, 5), should return 25
// If we were given paperwork(-5, 5), should return 0
// If we were given paperwork(5, -5), should return 0
// If we were given paperwork(0, -5), should return 0
// If we were given paperwork(-5, 0), should return 0
// If we were given paperwork(0, 0), should return 0
// If we were given paperwork(-5, -5), should return 0
// If we were given paperwork(4, 4), should return 16






function paperwork(n, m) {
    if(n<=0 || m <=0){
      return 0
    }
    else{
      return n*m
    }
}






const paperwork = (n, m) => n <= 0 || m <= 0 ? 0 : n*m






function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}






function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}






paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m






const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);







paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;