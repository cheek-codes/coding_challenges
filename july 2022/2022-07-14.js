// Switch it up!

// When provided with a number between 0-9, return it in words.

// Example:
// Input: 1
// Output: "One"

// If your language supports it, try using a switch statement



// P: Will we be given a string? Will we be given an empty string? Will we be given a special character? Will we be given floats? Will we be given integers?



// R: Return a "Zero" if the given parameter is 0
// R: Return a "One" if the given parameter is 1
// R: Return a "Two" if the given parameter is 2
// R: Return a "Three" if the given parameter is 3
// R: Return a "Four" if the given parameter is 4
// R: Return a "Five" if the given parameter is 5
// R: Return a "Six" if the given parameter is 6
// R: Return a "Seven" if the given parameter is 7
// R: Return a "Eight" if the given parameter is 8
// R: Return a "Nine" if the given parameter is 9



// E: 1. If we are given a parameter of 0, should Return a "Zero" 
// E: 2. If we are given a parameter of 1, should Return a "One" 
// E: 3. If we are given a parameter of 2, should Return a "Two" 
// E: 4. If we are given a parameter of 3, should Return a "Three" 
// E: 5. If we are given a parameter of 4, should Return a "Four" 
// E: 6. If we are given a parameter of 5, should Return a "Five" 
// E: 7. If we are given a parameter of 6, should Return a "Six" 
// E: 8. If we are given a parameter of 7, should Return a "Seven" 
// E: 9. If we are given a parameter of 8, should Return a "Eight" 
// E: 10. If we are given a parameter of 9, should Return a "Nine"



function switchItUp(number){
    // create a switch case statement in place of if else statement to create a more readable and ease of coding
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      default:
        return 'Unknown number';
    }
}



// less lines
function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
}



// lesser lines
function switchItUp(number){
    //Write your own Code!
    var a = number;
    var b = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
    };
    return b[a];
}




// even lesser lines
function switchItUp(n){
    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}