// Hungarian Vowel Harmony (easy)

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given a float? Will we be given an integer?




// Return the given word with an added ending of -nek if the first vowel is (e, é, i, í, ö, ő, ü, ű)
// Return the given word with an added ending of -nak if the first vowel is (a, á, o, ó, u, ú)




// If we were given dative("ablak"), should retuern "ablaknak"
// If we were given dative("szék"), should return "széknek"
// If we were given dative("otthon"), should return "otthonnak"






function dative(word) {
    const front_vowels = new Set(['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'])
    const back_vowels = new Set(['a', 'á', 'o', 'ó', 'u', 'ú'])
    const vowels = Array.from(word).filter((char) => front_vowels.has(char) || back_vowels.has(char))
    const last_vowel = vowels[vowels.length - 1]
    return front_vowels.has(last_vowel) ? word + 'nek' : word + 'nak'
}






function dative(word) {
    return (/[aáoóuú]/.test(word)) ? word + "nak" : word + "nek";
}






function dative(word){
    var str = word;
    var nekArr = ["e","é","i","í","ö","ő","ü","ű"];
    var nakArr = ["a","á","o","ó","u","ú"];
    for(var i=str.length-1;i>=0;i--){
      if(nekArr.indexOf(str[i])!==-1) return str + "nek";
      if(nakArr.indexOf(str[i])!==-1) return str + "nak";
    }
}






const dative = word =>
  `${word}n${/[eéiíöőüű][^eéiíöőüűaáoóuú]*$/.test(word) ? `e` : `a`}k`;






function dative(word) {
    let lastVowel = word.replace(/[^eéiíöőüűaáoóuú]/gi, '').slice(-1)
    return 'eéiíöőüű'.match(lastVowel) ? word + 'nek' : word + 'nak'
}






function dative(word) {
    let t = "a, á, o, ó, u, ú".split(', ')
    switch(t.some(v=>word.includes(v))){
        case true:
        return word+"nak"
        default:
        return word+"nek"
    }
}






let dative = w => 'eéiíöőüű'.includes(w.match(/[eéiíöőüűaáoóuú][^eéiíöőüűaáoóuú]+$/)[0][0]) ? w+'nek' : w+'nak'






const dative = (word) => word.match(/[aáoóuú]/g) ? word += 'nak' : word += 'nek'






const dative = w => `${w}n${/[aáoóuú][^eéiíöőüű]+$/.test(w)?'a':'e'}k`;






function dative(word) {
    let s = word.match(/[eaáoóuúéiíöőüű]/ig);
    return /[eéiíöőüű]/i.test(s[s.length-1]) ? word + 'nek' : word + 'nak'; 
}