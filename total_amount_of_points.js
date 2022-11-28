// Total amount of points

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4




// P: Will we be given an empty string? Will we be given strings? Will we be given an empty array? Will we be given arrays? Will we be given special characters? Will we be given floats? will we be given integers? Will we be given negative numbers ? Will we be given positive number?




// R: Return a new number where the a new variable "scores" have added up all the match points (x: y)
// R: If x > y, add 3 points to the scores
// R: If x < y, add 0 points to the scores
// R: If x = y, add 1 point to the scores



// E: 1. If we are given ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"], should return 30
// E: 2. If we are given ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"], should return 10
// E: 3. If we are given ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"], should retrun 0
// E: 4. If we are given ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"], should retrun 15



function points(games) {
    // create a variable where it will store accumulate points
    let point = 0

    // create a for loop  that goes through the array of games to get scores
    for(let i = 0; i < games.length; i ++){

        // create newvariables to assign the scores, since the array of games is an array of strings, we must use Number() function to turn the string scores into number
        let x = Number(games[i].charAt(0))
        let y = Number(games[i].charAt(2))

        //using if else statements, add the points up depending on the values of x vs y
        if (x > y){
            point += 3
            }
        else if (x < y){
            point += 0
        }
        else if (x === y){
            point += 1
        }
    }

    // return the accumulated points
    return point
}
  
  
  
  
function points(games) {
  // totalPoints will store the accumulated points
  let totalPoints = 0;
    
    // loop through the games array to get the scores
    for(i=0; i<games.length; i++) {
   
     // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
      let xScore = Number(games[i].charAt(0)); 
      let yScore = Number(games[i].charAt(2));
      
      // Add points depending on the values of xScore compared to yScore
      if (xScore > yScore) { totalPoints += 3; }
      if (xScore < yScore) { totalPoints += 0; }
      if (xScore === yScore) { totalPoints += 1; }
    }
    return totalPoints
}




const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }




function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
}



const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)




function points(games) {
    return games.reduce((current, element) => {
      let arraySplit = element.split(':');
      return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
}



const points = a => a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
  }, 0);




points=g=>g.reduce((a,c)=>a+(c[0]>c[2]?3:c[0]<c[2]?0:1),0)




const points = games => games
  .map(str => str.split(':').map(Number))      // parse
  .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
  .reduce((sum, points) => sum + points, 0);   // sum points




function points(games) {
return games.map(x => x[0] - x[2])
            .filter(x => x >= 0)
            .reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
}




const points = games =>
  games.reduce((pre, [a, _, b]) => pre + (a > b) * 3 + +(a === b), 0);




function points(games) {
//keep track of running total 
let score = (accumulator, currentValue) => accumulator + currentValue;;  
const total = [];
//record points per game
for (i = 0; i < 10 ; i++) {
    let gameScore = games[i];;
    let x = gameScore.charAt(0);
    let y = gameScore.charAt(2);
    if (x > y) {
    total.push(3);
    } else if (x < y) {
    total.push(0);
    } else if (x = y) {
    total.push(1);
    }
} 
return total.reduce(score);
}




function points(a) {
    return a.map(x => x.split(":").map(y => +y)).reduce((x, [y, z]) => x + (y > z ? 3 : y < z ? 0 : 1), 0);
}