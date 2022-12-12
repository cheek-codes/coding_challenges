// polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels, and 23 consonants.

// Your task is to change the letter with diacritics and print out the string without the use of the Polish letters:
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// for example:
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"




// P: Will we be given and empty string? Will we be given strings? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// R: Return a new string that replaces Polish letters with English letters




// E: 2. If we were given "Jędrzej Błądziński", should return "Jedrzej Bladzinski"
// E: 2. If we were given "Lech Wałęsa", should return "Lech Walesa"





function correctPolishLetters (string) {
    return string.replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o").replace(/ś/g, "s").replace(/ź/g, "z").replace(/ż/g, "z")
}





var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");}





function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}





function correctPolishLetters(s) {
    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}





const c1="ąćęłńóśźż",c2="acelnoszz",correctPolishLetters =s=>s.replace(/./g,x=>(y=c1.indexOf(x))+1?c2[y]:x)






const correctPolishLetters = s =>
  s.replace(/[ąćęłńóśźż]/g, val => `acelnoszz`[`ąćęłńóśźż`.indexOf(val)]);