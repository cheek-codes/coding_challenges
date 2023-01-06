// interview question (easy)

// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using astericks(*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"

// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters(not the dashes, spaces, apostrophes, etc.). There should be no spaces in the output, and the different letters are separated by a comma(,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)




// Will we be given strings? Will we be given an empty string? Will we be given an array? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where each occurance of a letter is counted with an asterisk.




// If we were given "Chicago", should return "c:**,h:*,i:*,a:*,g:*,o:*"
// If we were given "Bangkok", should return "b:*,a:*,n:*,g:*,k:**,o:*"
// If we were given "Las Vegas", should return"l:*,a:**,s:**,v:*,e:*,g:*"





function getStrings(city) {
    city = city.toLowerCase();
    let obj = {};
    let str = '';

    for (let elem of city) {
        if (!(elem in obj)) {
            obj[elem] = '*';
        } else {
            obj[elem] += '*';
        }
    }

    for (let key in obj) {
        if (key !== ' ') {
            str += key + ':' + obj[key] + ',';
        }
    }

    return str.substring(0, str.length - 1);
}






const getStrings = city =>
  (arr => [...new Set(arr)].join(``).match(/[a-z]/g).map(val => `${val}:${`*`.repeat(arr.filter(v => v === val).length)}`).join(`,`))
  ([...city.toLowerCase()]);






function getStrings(city){
    let arr = city.toLowerCase().split('').filter(e => e !== ' ');

    let counter = {};

    for(let c of arr) {
        counter[c] = (counter[c] || 0) + 1;
    }

    let res = [];

    for(let letter in counter) {
        res.push(letter + ":" + '*'.repeat(counter[letter]));
    }

    return res.join(',');  
}






const clean = (str) => str.replace(/[^a-zA-Z]/g, '').toLowerCase();
const counter = (str) => [...str].reduce((obj, char) => (obj[char] = obj[char] ? obj[char] + 1 : 1, obj), {});
const star = ([key, val]) => `${key}:${'*'.repeat(val)}`;
const getStrings = (city) => Object.entries(counter(clean(city))).map(star).join(',');