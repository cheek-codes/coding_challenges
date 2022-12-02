// Get Planet Name By ID

// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):
// 3 --> "Earth"



/*
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}
*/



function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
}



function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
}



function getPlanetName(id){
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
    }
    return name
}



function getPlanetName(id){  
    switch(id){
      case 1:
        return "Mercury";
      case 2:
        return "Venus";
      case 3:
        return "Earth";
      case 4:
        return "Mars";
      case 5:
        return "Jupiter";
      case 6:
        return "Saturn";
      case 7:
        return "Uranus";
      case 8:
        return "Neptune";
      default:
        return "invalid planet id in function getPlanetName()";
    }
}



function getPlanetName(i){
    return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
}



const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];




function getPlanetName(id){
    var name;
   if(id === 1) name = 'Mercury';
   if(id === 2) name = 'Venus';
   if(id === 3) name = 'Earth';
   if(id === 4) name = 'Mars';
   if(id === 5) name = 'Jupiter';
   if(id === 6) name = 'Saturn';
   if(id === 7) name = 'Uranus';
   if(id === 8) name = 'Neptune';
    return name;
  }
  