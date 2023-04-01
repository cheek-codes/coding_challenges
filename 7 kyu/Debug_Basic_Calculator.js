// Debug Basic Calculator

// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
// Kind of a fork (not steal :)) of Basic Calculator kata by TheDoctor.

// var calculate = function calculate(a, o, b) {
//     var result = 0;
    
//     if(O === "+") { 
//       return a + b;
//       else if(o =!= "-") {
//         return a - b;
//       }
//     if(o !== "/" || b === 0) { 
//       return a / b;
//     if(0 === "*") 
//       return a * b;
//     }
    
//     return result; 
//     }






var calculate = function calculate(a, o, b) {
    var result = 0;
    
     if(o === "+") { 
       return a + b;
     }
     if(o === "-") {
        return a - b;
     }
     if(o === "*"){
      return a * b;
     }  
     if(o === "/") { 
       if (b === 0) {
         return null;
       }
       return a / b;
     }
     if(o != "+" || o != "-" || o != "*" || o != "/"){
       return null
     }
    
     return result; 
}






var calculate = function calculate(a, o, b) {
    var result = 0;
    
     if(o === "+") { 
       return a + b;
     }
     if(o === "-") {
        return a - b;
     }
     if(o === "*"){
      return a * b;
     }  
     if(o === "/") { 
       if (b === 0) {
         return null;
       }
       return a / b;
     }
     else{
       return null
     }
    
     return result; 
}






var calculate = function(a, o, b) {
    if (o === "+") { 
      return a + b;
    }
    if (o === "-") {
      return a - b;
    }
    if (o === "*") {
      return a * b;
    }  
    if (o === "/" && b !== 0) { 
      return a / b;
    }
    return null;
}






const calculate = (a, op, b) => {
	switch (op) {
		case "+": return a + b
		case "-": return a - b
		case "*": return a * b
		case "/": return b ? a / b : null
	}

	return null
}






var calculate = function calculate(a, o, b) {
    var result = null;
    
    if(o === "+") { 
      result = a + b;
    } else if(o === "-") {
      result = a - b;
    } else if(o === "/") { 
      result = (b === 0 ? null : a/b);
    } else if(o === "*") {
      result = a * b;
    }
    
    return result; 
}






var calculate = function calculate(a, o, b) {
    if(o == "+") return a + b;
    if(o == "-") return a - b;
    if(o == "/" && b !== 0)  return a / b;
    if(o == "*") return a * b; 
    return null; 
}






const calculate = (a, o, b) =>
  o === `+` ? a + b : o === `-` ? a - b : o === `*` ? a * b : o === `/` && b ? a / b : null;






const calculate = (a, op, b) => {
    const ops = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b,
      '*' : (a, b) => a * b,
      '/' : (a, b) => b ? a / b : null
    }
    return op in ops ? ops[op](a, b) : null;
}






function calculate(n1, o, n2) {
    if (typeof n1!='number'||typeof n2!='number'||"+-*/".indexOf(o)<0) return null
    switch (o) {
       case '+': return n1+n2;
       case '-': return n1-n2;
       case '*': return n1*n2;
    }
    return n2==0?null:n1/n2
}