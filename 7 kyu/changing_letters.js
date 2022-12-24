// changing letters

// When provided with a string, capitalize all vowels

// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.





// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?





// Return a new string where we will capitalize all the vowels. Y is not a vowel here




// 1. If we were given "Hello World", should return "HEllO WOrld!"
// 2. If we were given "abracadabra", should return "AbrAcAdAbrA"
// 3. If we were given "AbrAcAdAbrA", should return "AbrAcAdAbrA"






function swap (string) {
  return string.replace(/a/g, "A").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U")
}





const swap = string => string.replace(/a/g, "A").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U")






function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}






const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');






function swap(st){
    return st.replace(/[aeiou]/g, function(x) {
      return x.toUpperCase();
    });
}






function swap(str) {
    return str.replace(/[aeiou]/g, c => "AEIOU"["aeiou".indexOf(c)])
}






function swap(st){
    var letters = st.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < letters.length; i++){
      var char = letters[i];
      if (vowels.indexOf(char) >-1)
        letters[i] = char.toUpperCase();
    }
    return letters.join("");
}