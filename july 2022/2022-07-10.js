// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// our deck is preloaded:
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



// P: Will we be given strings? Will we be given an empty string? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given special characters?



// R: Return "clubs" if "♣" is in the given string.
// R: Return "diamonds" if "♦" is in the given string.
// R: Return "hearts" if "♥" is in the given string.
// R: Return "spades" if "♠" is in the given string.



// E: 1. If we are given '3♣', should return 'clubs'
// E: 2. If we are given '10♦', should return 'diamonds'
// E: 3. If we are given 'J♥', should return 'hearts'
// E: 4. If we are given 'Q♠', should return 'spades'



function defineSuit(card) {
    // create an if else statement for each of the card suits
    if (card.includes('♣')) {
      return "clubs"
    }
    else if (card.includes('♦')) {
      return "diamonds"
    }
    else if (card.includes('♥')) {
      return "hearts"
    }
    else if (card.includes('♠')) {
      return "spades"
    }
}



function defineSuit(card) {
    switch (card.slice(-1)){
      case '♣': return 'clubs'
      case '♦': return 'diamonds'
      case '♥': return 'hearts'
      case '♠': return 'spades';   
    }
}