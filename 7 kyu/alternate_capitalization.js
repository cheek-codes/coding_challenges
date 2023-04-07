// alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!




// Will we be given a string? will we be given an empty string? Will we be given special characters? Will we be given floats? will we be given integers?




// Return a new string where it alternates capitalizing letters in two different ways




// If we were given capitalize("abcdef"), should return ['AbCdEf', 'aBcDeF']
// If we were given capitalize("codewars"), should return ['CoDeWaRs', 'cOdEwArS']
// If we were given capitalize("abracadabra"), should return ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// If we were given capitalize("codewarriors"), should return ['CoDeWaRrIoRs', 'cOdEwArRiOrS']






function capitalize(str) {
    let even = ""
    let odd = ""
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        even += str[i].toUpperCase()
        odd += str[i]
      } else {
        even += str[i]
        odd += str[i].toUpperCase()
      }
    }
    return [even, odd]
}






function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};






function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};






function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}






function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};






const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }
    
    return [a, b];
};