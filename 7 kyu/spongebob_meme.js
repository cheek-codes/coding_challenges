// spongebob meme

// Remember the spongebob meme that is meant ot make fun of people by repetaing what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string except there is a pattern of uppercase and lowecase letters.

// Examples:
// input: "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"





// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string where every other letter is capitalized




// If we were given "stop Making spongebob Memes!", should return "StOp mAkInG SpOnGeBoB MeMeS!"




function spongeMeme(sentence) {
    return sentence.split('').map((v,i)=>i%2!==0?v.toLowerCase():v.toUpperCase()).join('')
}






const spongeMeme = sentence => sentence.split('').map((v,i)=>i%2!==0?v.toLowerCase():v.toUpperCase()).join('')






const spongeMeme = sentence => 
  sentence.split('').map((letter, i) => 
    i % 2 ? letter.toLowerCase() : letter.toUpperCase()
  ).join('')






const spongeMeme = $ => $.replace(/./gi, (x,i)=> i%2 ? x.toLowerCase() : x.toUpperCase() )






function spongeMeme(sentence) {
    let s = sentence.split('');
    let arr = '';
    for(let i = 0; i < s.length; i++){
      if(i % 2 !== 0){ arr += s[i].toLowerCase();}
      else {arr += s[i].toUpperCase();}
    }
    return arr;
}






spongeMeme = s => s.split('').map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join('');






function spongeMeme(str) {
	return str.replace(/\w/g, (s, i) => 
  	s[`to${i & 1 && 'Lower' || 'Upper'}Case`]()
  );
}