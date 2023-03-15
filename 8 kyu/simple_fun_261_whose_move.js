// Simple Fun #261: Whose Move

// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

// Input/Output
// [input] string lastPlayer/$last_player

// "black" or "white" - whose move it was during the previous round.

// [input] boolean win/$win

// true if the player who made a move during the previous round won, false otherwise.

// [output] a string

// Return "white" if white is to move on the next round, and "black" otherwise.

// Example
// For lastPlayer = "black" and win = false, the output should be "white".

// For lastPlayer = "white" and win = true, the output should be "white".




// Will we be given a string? Will we be given an empty string? Will we ebe given special characters? Will we be given a boolean? Will we be given a float? Will we be given an integer?




// Return black if win === false if lastPlayer was white.
// Return black if win === true if lastPlayer was black
// Return white if win === false if lastPlayer was black
// Return white if win === true if lastPlayer was white




// If we were given whoseMove("black",false), should return "white"
// If we were given whoseMove("black",true), should return "black"
// If we were given whoseMove("white",false), should return "black"
// If we were given whoseMove("white",true), should return "black"




function whoseMove(lastPlayer, win) {
    if (win === false && lastPlayer === "black"){
      return "white"
    }
    else if(win === false && lastPlayer === "white"){
      return "black"
    }
    else if (win === true){
      return lastPlayer
    }
}






function whoseMove(lastPlayer, win) {
    switch (lastPlayer + "|" + win){
      case "black|false":
        return "white"
      case "white|false":
        return "black"
      default:
        return lastPlayer
    }
}






const whoseMove = (lastPlayer, win) => {
    return lastPlayer === "black" && win === false ? "white" :
      lastPlayer === "black" && win === true ? "black" :
      lastPlayer === "white" && win === false ? "black" :
      lastPlayer === "white" && win === true ? "white" :
      null
}






function whoseMove(lastPlayer, win) {
    return win?lastPlayer:lastPlayer=="white"?"black":"white"
}






function whoseMove(lastPlayer, win) {
    const opp = lastPlayer === 'black' ? 'white' : 'black';
    return  win ? lastPlayer : opp;
}






whoseMove = (l, w) => w ? l : l === 'black' ? 'white' : 'black';







function whoseMove(lastPlayer, win) {
    return lastPlayer && win ? lastPlayer : {'black':'white','white':'black'}[lastPlayer];
}






function whoseMove(lastPlayer, win) {
    let map = {'black': 'white', 'white': 'black'}
    return win ? lastPlayer : map[lastPlayer]
}