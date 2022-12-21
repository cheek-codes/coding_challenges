// Template Strings

// Template strings, this kata is mainly aimed at the new JS ES6 update introducing template strings.

// Your task is to return the correct string using the template string feature.

// Input:
// Two Strings, no validation is needed.

// Output:
// You must output a string containing the two strings with the word ```' are '```

// Reference:
//  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings





// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string using template literals




// 1. If we were given TempleStrings("Animals","Good"), should return 'Animals are Good'
// 2. If we were given TempleStrings("you", "lame"), should return "you are lame"




var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}





const TempleStrings = (obj, feature) => `${obj} are ${feature}`





var TempleStrings = function(obj, feature) {
    return obj + " are " + feature;
}