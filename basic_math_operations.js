// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



// P: Will we be given an empty string? will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: With the given 2 sets of numbers and an operation sign, return a new number where the math is done with the given information



// E: 1. If we are given an operation of "+", a value1 of 4, and value2 of 7, should return 11
// E: 2. If we are given an operation of "-", a value1 of 15, and value2 of 18, should return -3
// E: 3. If we are given an operation of "*", a value1 of 5, and value2 of 5, should return 25
// E: 4. If we are given an operation of "/", a value1 of 49, and value2 of 7, should return 7



function basicOp(operation, value1, value2){
    if (operation === "+"){
      return (value1 + value2)
    }else if (operation === "-"){
      return (value1 - value2)
    }else if (operation === "*"){
      return (value1 * value2)
    }else if (operation === "/"){
      return (value1 / value2)
    }
}



function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
          return (value1 + value2)
        case "-":
          return (value1 - value2)
        case "*":
          return (value1 * value2)
        case "/":
          return (value1 / value2)
    }
}



function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}



function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}



basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )
