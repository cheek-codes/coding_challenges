// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// "world" --> "dlrow"
// "vampire" --> "eripmav"



// P: Will we be given strings? Will we be given floats? Will we be given integers? Will we be given uppercase letters? Will we be given lowercase letter? Will we be given special characters?



// R: Return a new string that is reversed from the given string parameter



function solution(str){
    let n = ''
    for(let i of str){
      n = i+n
    }
    return n
}



function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}