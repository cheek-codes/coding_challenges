// Shifty Closures

// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

// var name = 'Abe';
// var greet_abe = function() {
//   return "Hello, " + name + '!';
// };
// name = 'Ben';
// var greet_ben = function() {
//   return "Hello, " + name + '!';
// };






var greet_abe = function() {
    var name = 'Abe';
    return "Hello, " + name + '!';
  };
  var greet_ben = function() {
    let name = 'Ben';
    return "Hello, " + name + '!';
};






var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
  return function() {
    return "Hello, " + name + '!';
  };
}






const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';







const greet = name =>
  () => `Hello, ${name}!`;
const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);