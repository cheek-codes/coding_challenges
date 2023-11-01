// do you speak "english"?

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.




// Will we be given string? Will we be givne special characters? Will we be given an array? Will we be given float? Will we be given integer?




// Return true if the given string contains exactly "english" in any case form.
// Return false if the given string does not contain exactly "english" in any case form




// 1. If we were given spEng("english"), should return true
// 2. If we were given spEng("englsih"), should return false
// 3. If we were given spEng("eNgLiSh"), should return true
// 4. If we were given spEng("123english$%^"), should return true
// 5. If we were given spEng("93oeidkfjenglsh"), should return false





function spEng(sentence){
    let english = "english".toLowerCase()
    let pos = sentence.toLowerCase().indexOf(english)
    if(pos != -1){
      return true
    }
    else{
      return false
    }
}