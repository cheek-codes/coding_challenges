// alphabet symmetry

// // consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy thier positions in the alphabet for each word.

// Example:
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

// See test cases for more examples.
// Input will consist of alphabet characters, both uppercase and lowecase. No spaces.

// Good luck!




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will ew be given floats? Will we be given integers? Will we be given uppercase letters? Will we be given lowercase letters?




// Return a new array that shows how many characters of the given are in the same positions of the alphabet



// If we are given solve(["abode","ABc","xyzD"]), should return [4, 3, 1]





function solve(arr){  
    let alphabets = ["A","B","C","D","E", "F", "G", "H", "I","J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U", "V", "W","X", "Y", "Z"]
    let positionArr = []
  
    for ( let i = 0; i < arr.length; i++) { 
      let incr = 0
      for (let j = 0; j < arr[i].length; j++ ) { 
        for (let n = 0; n < alphabets.length; n++) { 
          if (arr[i][j].toUpperCase()  === alphabets[j] ) { 
            incr++
            break
            }
          }
        }
        positionArr.push(incr)
      }
    return positionArr
}







function solve(arr){  
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    return arr.map(x => x.toLowerCase().split("").filter((y, i) => i == alpha.indexOf(y)).length)
}






function solve(arr){  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    let final = []
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].toLowerCase() === alphabet[j]) {
          count++;
        }
      }
      final.push(count); 
    }
    return final
};






function solve(arr) {  
    return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}







function solve(arr){  
    return arr.map(s => s.toUpperCase().split('').filter((c, i) => c.charCodeAt() - 'A'.charCodeAt() === i).length)
};






function solve(arr, abc = 'abcdefghijklmnopqrstuvwxyz'){
    arr = arr.map(el => el.toLowerCase());
    return arr.map(el => [...el].map((e, i)=> e === abc[i] ? 1 : 0).reduce((a, b) => a+b, 0))
};






const solve = a => {  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return a.map(e => e.toLowerCase().split``.reduce((s, e, i) => s + (i === alphabet.indexOf(e) ? 1 : 0), 0));
};