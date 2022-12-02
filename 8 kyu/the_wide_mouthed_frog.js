// The wide-mouthed frog!

// The wide-mouth frog is particularly interested in the eating habits of other creatures

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator rwho just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the [mouth_size] method this method takes one argument [animal] which corresponds to the animal encountered by the frog. If this one is an [alligator] (case insensitive) return [small] otherwise return [wide]


// P: Will I be given special characters? Will there be an empty string? Will there be numbers?

// R: Return [small] if it is "alligator". Else, return [wide].

// E: 1. If we are given "alligator", should return [small]
// E: 2. If we are given "cat", should return [wide]
// E: 3. If we are given "platypus", should return [wide]
// E: 4. If we are given "Alligator", should return [small]


// use if else
// use .toLowerCase() for case
// if the animal is an alligator, return small
// if the animal is not alligator, return wide

function mouthSize(animal) {
    // code here
    if (animal.toLowerCase() === "alligator"){
      return "small"
    }
    else{
      return "wide"
    }
  }