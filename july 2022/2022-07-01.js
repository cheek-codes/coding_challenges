// !a == a?!

//You task to pass only this test:

// a == false
// !a == false
// a == !a



// P: Will we be given empty strings? Will we be given strings? Will we be given floats? Will we be given integers? Will we be given special characters?



// R:  Return a falsie



// E: []
// E: [null]
// E: "0"
// E: new Boolean
// E: new Number



const a = [];
function assertEquals(a){

  if(a == false){
  return true;
  }; 
  if(!a == false){
  return true;
  }; 
  if(a == false) {
  return true;
  }; 
}



const a = []



const a = [null]



const a = '0'



const a = new Boolean()



const a = ' '