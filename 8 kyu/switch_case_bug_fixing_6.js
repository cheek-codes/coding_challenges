// Switch/Case - Bug Fixing #6

// oh no! timmy's evalObject function doesn't work. He uses Swithc/Cases to evaluate the given properties of an objec, can you fix timmy's function?

/*
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}*/




function evalObject(value){
  var result = 0
  switch(value.operation){
    case'+': result = value.a + value.b
      break
    case'-': result = value.a - value.b
      break
    case'/': result = value.a / value.b
      break
    case'*': result = value.a * value.b
      break
    case'%': result = value.a % value.b
      break
    case'^': result = Math.pow(value.a, value.b)
      break
  }
  return result
}






function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}






const evalObject = value => {
  return {
    '+': v => v.a + v.b,
    '-': v => v.a - v.b,
    '/': v => v.a / v.b,
    '*': v => v.a * v.b,
    '%': v => v.a % v.b,
    '^': v => v.a ** v.b,
  }[value.operation](value);
}