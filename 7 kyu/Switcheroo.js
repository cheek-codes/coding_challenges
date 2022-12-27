// Switcheroo

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where all of the a's of the original given arguments are replaced with b's and all the b's of the original given arguments are replaced with a's




// If we were given 'acb', should return 'bca'
// If we were given 'aabacbaa', should return 'bbabcabb'




function switcheroo(x){
    return x.replace(/a/g, "y").replace(/b/g, "a").replace(/y/g, "b")
}






const switcheroo = x => x.replace(/a/g, "y").replace(/b/g, "a").replace(/y/g, "b")






const switcheroo = x => x.replace(/[ab]/g, x => x == "a"? "b": "a")






function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
}






const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');






function switcheroo(x){
    return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
  }

  





const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');






const switcheroo = ( $ ) => $.replace(/[ab]/g, x=> x === 'a' ? 'b' : x === 'b' ? 'a' : x)






function switcheroo(x){
    return x.replace(/[ab]/g, function(c) { return c === 'a' ? 'b' : 'a'; });
}