// Bumps in the Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers?




// Return "Woohoo!" if the given parameter has 15 or less "n" in the string
// Return "Car Dead" if the given parameter has more than 15 "n" in the string




// If we were given bump("n"), should return "Woohoo!"
// If we were given bump("__nn_nnnn__n_n___n____nn__nnn"), should return "Woohoo!"
// If we were given bump("nnn_n__n_n___nnnnn___n__nnn__"), should return "Woohoo!"
// If we were given bump("_nnnnnnn_n__n______nn__nn_nnn"), should return "Car Dead"
// If we were given bump("______n___n_"), should return "Woohoo!"
// If we were given bump("nnnnnnnnnnnnnnnnnnnnn"), should return "Car Dead"






function bump(x){
    let bump = 0
    for(let i = 0; i < x.length; i ++){
      if (x[i] === "n"){
        bump++
      }
    }
    if (bump <= 15){
      return "Woohoo!"
    }
    else{
      return "Car Dead"
    }
}






const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"






const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';






const bump = x => {
    let string = "";
    for (let count = 0; count < x.length; count++) {
      if (x[count] == 'n') {
        string += x[count];
      }
    }
    if (string.length > 15) {
      return 'Car Dead';
    } else {
      return 'Woohoo!'
    }
};






const bump = (road, bumps = 0, limit = 15) => {
	for(let i = 0; i < road.length; i++) {
		if(road[i] === 'n') {
			bumps++;
			if(bumps > limit) return 'Car Dead';
		}
	}
	return 'Woohoo!';
}