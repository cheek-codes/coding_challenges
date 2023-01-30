// apparently-modifying strings.

// For every string, after every occurence of "and" and/or "but", insert the substring "apparently" direcely fter the occurence(s).

// If input does not contain "and" or "but", return the same string. If a blanck string, return "".

// If substring "apparently" is already direclty afte an "and" and/or "but", do not add another. (Do not add duplicates).

// Examples:
// Input 1:
// 'It was great and I've never been on live television before but sometimes I don't watch this.'
// output 1:
// 'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'


// input 2
// "but apparently"
// output 2
// "but apparently"

// (no changes because "apparently" is already directly after "but" and there should not be a duplicate.)

// An occurence of "and" and/or "but" only counts when it is at least one space separeted. For example "andd" and "bbut" do not count as occurences, whereas "b but" and "and d" does count. 

// reference that may help: https://www.youtube.com/watch?v=rz5TGN7eUcM




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// Return a new string where "apparently" is placed right after "and" and/or "but" in the given parameter. However if there is already "apparently", do not add another one




// 1. If we were given apparently('A fast-food resteraunt down the street was grumbling my tummy but I could not go.'), should return 'A fast-food resteraunt down the street was grumbling my tummy but apparently I could not go.'




function apparently(string) {
    return string.replace(/(and|but\b)(?!\s+apparently\b)/g, '$1 apparently')
}






const apparently = str => str.replace(/\b(and|but)\b(\sapparently\b)?/g, '$1 apparently');






function apparently(string) {
    return string.split(' ').reduce((o,c,i,a)=>{
      o.push(c);
      if(c === 'and' || c === 'but')
       {
         if(a[i+1] !== 'apparently')
         { o.push('apparently') }
       }
       return o;
     },[]).join(' ');
}






const apparently = require('ramda').replace(/\b(and|but)\b(?! apparently\b)/g, `$& apparently`)






apparently=a=>a.replace(/(\band\b|\bbut\b)(?! apparently\b)/g,'$1 apparently')