// 101 Dalmatians - squash the bugs, not the dogs!

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!



/*
function howManyDalmations(numer :
  
  var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
return respond
*/




function howManyDalmatians(number){
    if (number <= 10){
      return "Hardly any"
    }
    else if(number <= 50){
      return "More than a handful!"
    }
    else if (number === 101){
      return "101 DALMATIANS!!!"
    }
    else {
      return "Woah that's a lot of dogs!"
    }
}




const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

const howManyDalmatians = number  => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));




function howManyDalmatians (number) {
    let dogs = [
      'Hardly any',
      'More than a handful!',
      'Woah that\'s a lot of dogs!',
      '101 DALMATIANS!!!'
    ]
    let respond = number <= 10 ? dogs[0]
                  : number <= 50 ? dogs[1]
                  : number == 101 ? dogs[3]
                  : dogs[2]
    return respond
}




const howManyDalmatians = number =>
  number <= 10 ? `Hardly any` : number <= 50 ? `More than a handful!` : number === 101 ? `101 DALMATIANS!!!` : `Woah that's a lot of dogs!`;




let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
howManyDalmatians = number => {
switch (true) {
    case number <= 10:
    return dogs[0];
    case number <= 50:
    return dogs[1];
    case number <= 100:
    return dogs[2];
    case number === 101:
    return dogs[3];  
    default:
    return ``;  
}
}




const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = (n) => {
  return n <= 10   ? dogs[0]
       : n <= 50   ? dogs[1]
       : n === 101 ? dogs[3] : dogs[2];
};




function howManyDalmatians(number) {
  
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
    
  return respond;
}