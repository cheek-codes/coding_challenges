// The Baby Years I - Baby Counting

// You've had a baby.

// Well done. Nice isn't it? Life destroying... but in a good way.

// Part of your new routine is lying awake at night worrying that you've either lost the baby... or that you have more than 1!

// Given a string of words (x), you need to calculate how many babies are in it. To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.

// Examples:

// "baby" = 1
// "abby" = 1
// "babybaby" = 2
// "Why the hell are there so many babies?!" = 1
// "Anyone remember life before babies?" = 1
// "Happy babies boom ba by?" = 2
// If there are no babies in the string - you lost the baby!! Return a different value, as shown below:

// 'none here' = "Where's the baby?!" '' = "Where's the baby?!"





// Will we be given strings? Will we be given an empty string? Will we be given special characters? Wll we be given an array? Will we be given a float? Will we be given integer?





// Return the number of times where there is a full set of "baby" in the given string, case and order does not matter.
// Return "Where's the baby?!", if no complete set of "baby" is found or if given an empty string, or if "none here" is given.





// 1. If we were given "baby", should return 1
// 2. If we were given "abby", should return 1
// 3. If we were given "babybaby", should return 2
// 4. If we were given "Why the hell are there so many babies?!", should return 1
// 5. If we were given "Anyone remember life before babies?", should return 1
// 6. If we were given "Happy babies boom ba by?", should return 2






function babyCount(x) {
    let chars = x.split('').filter((char) => { return /[aby]/i.test(char) }); 
    let bs = chars.filter((char) => { return /b/i.test(char) })
    let as = chars.filter((char) => { return /a/i.test(char) })
    let ys = chars.filter((char) => { return /y/i.test(char) })
    
    let count = Math.min(Math.floor(bs.length / 2), as.length, ys.length)
    return count > 0 ? count : "Where\'s the baby?!"
}






function babyCount(x) {
    const { b, a, y } = [...x.toLowerCase()].reduce((acc, char) => (
      { ...acc, [char]: (acc[char] || 0) + 1 }
    ), {});
    return Math.min(~~(b / 2), a, y) || "Where's the baby?!";
}






function babyCount(x) {
    const { b, a, y } = [...x.toLowerCase()].reduce((acc, char) => (
      { ...acc, [char]: (acc[char] || 0) + 1 }
    ), {});
    return Math.min(~~(b / 2), a, y) || "Where's the baby?!";
}






function babyCount(x) {
    var b=0, a=0, y=0;
    for (var i=0; i<x.length; ++i)
    {
      if (x[i].toLowerCase()=='b')
        b++;
      if (x[i].toLowerCase()=='a')
        a++;
      if (x[i].toLowerCase()=='y')
        y++;
    }
    var arr=[a,Math.floor(b/2),y];
    arr.sort((n,m)=>n-m);
    return arr[0]==0?"Where\'s the baby?!":arr[0];
}







function babyCount(x) {
    const re = /a(.*)bb(.*)y/
    const {ascend} = require('ramda') 
    let str = [...x.toLowerCase``].sort(ascend(Buffer)).join``
    return function f(){
      return +re.test(str) && 1 + f(str = str.replace(re, '$1$2'))  
    }`` || `Where's the baby?!`  
}






function babyCount(x) {
    console.log(x);
      let arr = x.toLowerCase().split``;
      let a = 0;
      let b = 0;
      let y = 0;
      let counter = 0;
      while(arr.length){
        let currentChar = arr.shift();
        if(currentChar==='a') a++;
        if(currentChar==='b') b++;
        if(currentChar==='y') y++;
      if(a>=1 && b >=2 && y>=1) { 
          counter++
          a-=1;
          b-=2;
          y-=1;
        };
    
      }
      
      return counter === 0 ? 'Where\'s the baby?!' : counter;
}






function babyCount(x) {
    let arr = [...Array.from(x)];

    let bCount = 0;
    for(let b of arr){
        if(b.toLocaleLowerCase() === 'b')
            bCount++;
    }
        
    let aCount = 0;
    for(let a of arr){
        if(a.toLocaleLowerCase() === 'a')
            aCount++;
    }

    let yCount = 0;
    for(let y of arr){
        if(y.toLocaleLowerCase() === 'y')
            yCount++;
    }
    
    let babies = Math.min(Math.floor(bCount/2), aCount, yCount);
    if(babies > 0)
      return babies;

    return 'Where\'s the baby?!';
}






function babyCount(x) {
    let chars = x.split('').filter((char) => { return /[aby]/i.test(char) }); 
    let bs = chars.filter((char) => { return /b/i.test(char) })
    let as = chars.filter((char) => { return /a/i.test(char) })
    let ys = chars.filter((char) => { return /y/i.test(char) })
    
    let count = Math.min(Math.floor(bs.length / 2), as.length, ys.length)
    return count > 0 ? count : "Where\'s the baby?!"
}







function babyCount(x) {
    let bs = 0;
    let as = 0;
    let ys = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i].toLowerCase() == 'b') {
        bs++;
      }
      if (x[i].toLowerCase() == 'a') {
          as++;
          }
      if (x[i].toLowerCase() == 'y') {
        ys++;
      }
      }
      let count = 0;
      if (bs <= as * 2 && bs <= ys * 2) {
        count = Math.floor(bs / 2);
      }
    if (as * 2 <= bs && as <= ys) {
      count = Math.floor(as);
    }
    if (ys * 2 <= bs && ys <= as) {
      count = Math.floor(ys);
    }
        if (count < 1) {
        return `Where's the baby?!`
      } else {return count;
             }
}