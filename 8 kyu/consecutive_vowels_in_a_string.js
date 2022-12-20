// Consecutive Vowels in a String

// You are given a random string of lower case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from "a". Keep in mind that the consecutive vowel to "u" is "a" and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// 1. You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the "a" and make your way right. The next vowel is an "e" and it is the consecutive vowel, then "i" and so forth until you get to "u". If you keep moving right you find "a" which happens to be the consecutive vowel. Return 6.

// 2. This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the "a", then ignore the rest until you get to the "e", which is the consecutive vowel, and so forth until you get to the "o". Return 4.

// Note:
// For this kata, the vowels are "a", "e", "i", "o", "u", in that order. "y" is not considered a vowel in this kata.




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// Return an integer where it counts all the consecutive vowels starting with "a" while skipping vowels that are not in the consecutive order.




// If we were given "agrtertyfikfmroyrntbvsukldkfa", should return 6
// If we were given "erfaiekjudhyfimngukduo", should return 4




function getTheVowels(word) {
    let vowelSequence = "aeiou"; // correct sequence of vowels
    let currentVowelIndex = 0; // index of vowel in the sequence currentlly being checked
    let consecutiveCount = 0; // how many consecutive vowels are in the word
    
    //  check every letter of the word against current vowel
    for (letter of word) {
      if (letter == vowelSequence[currentVowelIndex]) {
        consecutiveCount++;
        currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
      }
    }
    
    return consecutiveCount;
}





function getTheVowels(word) {
    let vowels = "aeiou"
    let vowelsIndex = 0
    let result = 0
    for (let i=0; i<word.length; i++){
      if (word[i] == vowels[vowelsIndex]){
        result++
        if(vowelsIndex == 4){
          vowelsIndex=0
        }
        else{
          vowelsIndex++
        }
      }
    }
    return result
}





const getTheVowels = (word, vowels = 'aeiou') =>
  word
    .split('')
    .reduce((count, char) => count + (char === vowels[count % vowels.length]), 0)





getTheVowels

    =s=>

        [...s].reduce((r,c)=>r+(c=="aeiou".charAt(r%5)),0)






function getTheVowels(string) {
    let arrayOfVowels = ['a','e','i','o','u'];
    let count = 0;
    let arrayOfLetters = string.split('');
        
        // Iterates through the array of letters
        for (let i = 0; i < arrayOfLetters.length; i++) {
            // If "a" is found 
            if (arrayOfVowels[0] == arrayOfLetters[i]) {    // (really means first index of array)
                // Increment count by one.
                count++;
                // Remove "a" from array of vowels 
                arrayOfVowels.shift();                      // (really means first index of array)
            }
            // If arrayOfVowels is empty
            if (arrayOfVowels.length == 0) {
                // Reload the array of vowels
                arrayOfVowels = ['a','e','i','o','u'];
            }
        }
        return count;
}





function getTheVowels(word) {
    let st = "aeiou", i = 0, n = 0
    for(let x of word){
      if(x != st[i]) continue
      else{
        i = (i + 1) % st.length
        n++
      }
    }
    return n
}





function getTheVowels(word) {
    let output = 0
  
    for (const letter of word) {
      output += letter === 'aeiou'[output % 5]
    }
  
    return output
}





function getTheVowels(word) {
    const vowels = 'aeiou'.split('');
    let count = 0;
    for (let i = 0, pos = 0;
         (pos = word.indexOf(vowels[i], pos)) >= 0;
         i = ++i % vowels.length, ++count)
      ;
    return count;
}





const getTheVowels = (string, vowels = 'aeiou') => Array.from(string).reduce((length, character) => length + (character === vowels.charAt(length % vowels.length)), 0);