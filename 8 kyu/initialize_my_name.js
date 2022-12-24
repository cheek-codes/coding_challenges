// Initialize my name


// Some people just have a first name; some people have first and last names, and some people have first, middle, and last names.

// Your task is to initialize the middel names (if there are any)

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'





// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where the middle name(s) are initialized





// If we were given 'Jack Ryan', should return 'Jack Ryan'
// If we were given 'Lois Mary Lane', should return 'Lois M. Lane'
// If we were given 'Dimitri', should return 'Dimitri'
// If we were given 'Alice Betty Catherine Davis', should return 'Alice B. C. Davis'





function initializeNames(name){
  let names = name.split(" ")
  for (let i = 1; i < names.length -1; i++){
    names[i] = names[i].charAt(0) + "."
  }
  return names.join(" ")
}





const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')






function initializeNames(name){
    return name.split(' ').map((e,i,a) => i == 0 || i == a.length-1 ? e : e[0]+'.').join(' ');
}





function initializeNames(name){
    return name.split(' ').map((x,i) => (i==0||i==name.split(' ').length-1) ? x : x.slice(0,1).toUpperCase()+'.').join(' ')
}





function initializeNames(name){
    let names = name.split(' '), last = names.pop(), first = names.shift();
    return [first].concat( names.map( n => n[0]+"."), [last] ).join(' ').trim()
}