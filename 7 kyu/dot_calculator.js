// Dot Calculator

// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""





// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return a new string of dots where we would add, subtract, multiply, or divide the dots depending of the operator given




// If we were given "..... + ...............", should return "...................."
// If we were given "..... - ...", should return ".."
// If we were given "..... - .", should return "...."
// If we were given "..... * ...", should return "..............."
// If we were given "..... * ..", should return".........."
// If we were given "..... // ..", should return".."
// If we were given "..... // .", should return "....."
// If we were given ". // ..", should return ""
// If we were given ".. - ..", should return ""






function dotCalculator(equation) {
    const [leftDots, operator, rightDots] = equation.split(" ")
    const leftNum = leftDots.length
    const rightNum = rightDots.length
    let result
  
    switch (operator) {
      case "+":
        result = leftNum + rightNum
        break
      case "-":
        result = leftNum - rightNum
        break
      case "*":
        result = leftNum * rightNum
        break
      case "//":
        result = Math.floor(leftNum / rightNum)
        break
    }
  
    return result === 0 ? "" : ".".repeat(result)
}
  
  
  
  
  
  
const dotCalculator = (equation) => {
    const operations = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b,
      '*' : (a, b) => a * b,
      '//': (a, b) => a / b,
    };
    const [left, operator, right] = equation.split(' ');
    return '.'.repeat(operations[operator](left.length, right.length));
}






function dotCalculator (equation) {
	equation = equation.split(' ');
	
	let [a, operator, b] = equation;
	
	switch (operator) {
	  case '+':
	    equation = a.length + b.length;
	    break;
	  case '-':
	    equation = a.length - b.length;
	    break;
	  case '*':
	    equation = a.length * b.length;
	    break;
	  case '//':
	    equation = Math.trunc(a.length / b.length);
	    break;
	}
	a = [];
	for (let i = equation; i > 0; i--) {
	  a.push('.');
	}
	
	return a.join('');
}






function dotCalculator (equation) {
    const arr = equation.split(' ');
    switch ( arr[1] ){
        case '+':
        return '.'.repeat( arr[0].length + arr[2].length )
        case '-':
        return '.'.repeat( arr[0].length - arr[2].length )
        case '*':
        return '.'.repeat( arr[0].length * arr[2].length )
        default:
        return '.'.repeat( arr[0].length / arr[2].length )
    }
}







const dotCalculator = (equation) => {
    const result = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b,
      '*' : (a, b) => a * b,
      '//': (a, b) => a / b,
    };
    const [a, action, b] = equation.split(' ');
    return '.'.repeat( result[action](a.length, b.length) );
}







function dotCalculator(equation) {
	const [first, sign, second] = equation.split(' ');
	switch (sign) {
		case '+':
			return '.'.repeat(first.length + second.length);
		case '-':
			return '.'.repeat(first.length - second.length);
		case '*':
			return '.'.repeat(first.length * second.length);
		default:
			return '.'.repeat(first.length / second.length);
	}
}