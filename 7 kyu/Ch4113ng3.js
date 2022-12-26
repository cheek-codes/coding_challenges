// Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"




// Will we be given strings? Will we be given an empty strings? Will we be given special characters? Will we be given an array? Will we be given floats? Will we be given integers?




// Return a new string where all the A's are replace with 4, all the E's are replaced with 3, all the I's are replaced with 1.




// 1. If we were given "Fundamentals", should return "Fund4m3nt41s"
// 2. If we were given "Seven", should return "S3v3n"
// 3. If we were given "Los Angeles", should return "Los 4ng313s"




function nerdify(txt){
    return txt.replace(/[aA]/g, 4).replace(/[eE]/g, 3).replace(/[l]/g, 1)
}






const nerdify = txt => txt.replace(/[aA]/g, 4).replace(/[eE]/g, 3).replace(/[l]/g, 1)






const nerdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));






function nerdify(txt) {
    return txt.replace(/[AaEel]/g, c => "44331"["AaEel".indexOf(c)])
}






let nerdify = str => str.replace(/[aAeElL]/g, s =>  s.toLowerCase()=='a' ? 4 : s.toLowerCase()=='e' ? 3 : s=='l' ? 1 : 'L')