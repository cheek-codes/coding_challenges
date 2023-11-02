// double char

// Given a string, you have to return a string in which each character(case-sensitive)is repeated once. 

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!




// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// return a new string where every character is doubled.




// 1. If we were given "String", should return "SSttrriinngg"
// 2. If we were given "Hello World", should return "HHeelllloo  WWoorrlldd"
// 3. If we were given "1234!_ ", should return"11223344!!__  "





function doubleChar(str) {
    let dbl= ""
    for (i=0; i<str.length; i ++){
      dbl += str[i]+str[i]
    }
    return dbl
}