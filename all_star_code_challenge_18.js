// All star code challenge #18

// This kata is intended as a small challenge for my students

// All star code challenge #18

// Create a function that accepts 2 stsring arguments and returns an integer of the count of occurences the 2nd argument is found in the first one. 

// If no occurences can be found, a count of 0 should be returned. 

// Examples:
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1




// P: Will we be given empty strings? Will we be given strings? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// R: Return the number of occurences of the given letter in the given string.




// E: 1. If we were given ("Hello", "o"), should return 1
// E: 2. If we were given ("Hello", "l"), should return 2
// E: 3. If we were given ("", "z"), should return 0




function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i ++){
      if (str.charAt(i) === letter){
        count ++
      }
    }
    return count
}





function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i ++){
      if (str.charAt(i) === letter){
        count += 1
      }
    }
    return count
}




function strCount(str, letter){  
    return str.split(letter).length-1
}




function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}




const strCount = (str, letter) => str.split(letter).length - 1;





function strCount(str, letter){  
    return str.split('').filter(a => a==letter).length;
}




const strCount = (str, letter) =>  
  --str.split(letter).length;




function strCount(str, letter) { 
    let count = 0;

    [...str].forEach(char => char == letter ? count++ : count);

    return count;
}




const strCount = (str, letter) => str.split("").filter(i=>i===letter).length;





const strCount = (str, letter) =>
  [...str].reduce((a, b) => a + letter.includes(b), 0);