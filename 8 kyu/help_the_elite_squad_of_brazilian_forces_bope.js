// help the elite squad of brazilian forces BOPE

// the BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In the kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will recieve the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Below is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:
// ["PT92", 6] ==> (6 streets, 3 bullets each)
// ["M4A1", 6] => 1

// The return will always be an integer so as the params. 




// P: Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive number?




// R: Return an integer where it will show how many magazines that every soldier should carry




// E: 1. If we were given magNumber["PT92", 6], should return 2
// E: 2. If we were given magNumber["M4A1", 8], should return 1
// E: 3. If we were given magNumber["M16A2", 19], should return 2
// E: 4. If we were given magNumber["PSG1", 31], should return 19
// E: 5. If we were given magNumber["PT92", 19], should return 4




function magNumber(info){
    let bullets = 3* info[1]
    let mag = 0
    if(info[0] === "PT92"){
      mag += 17
    }
    else if(info[0] === "M4A1" || info[0] === "M16A2"){
      mag += 30
    }
    else {
      mag += 5
    }
    return Math.ceil(bullets / mag)
}





magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])





function magNumber(info){
    const dict = {"PT92": 17, "M4A1": 30, "M16A2": 30, "PSG1": 5}
    return Math.ceil(info[1] * 3 / dict[info[0]])
}





function magNumber(info){
    [weapon, streets] = info
    const weapons={
      "PT92": 17,
      "M4A1" : 30,
      "M16A2" : 30,
      "PSG1":5,
    }
    if(3*streets<=weapons[weapon]) return 1
    else{
        let n=1;
        while(weapons[weapon]*n<streets*3) n++
        return n
    }
}





const magNumber = (info) => {
    const [gun, street] = info;
    let magzines = 0;
    switch(gun){
        case('PT92'):
        magzines = Math.ceil((street * 3) / 17);
        break;
        case('M4A1'):
        magzines = Math.ceil((street * 3) / 30);
        break;
        case('M16A2'):
        magzines = Math.ceil((street * 3) / 30);
        break;
        case('PSG1'):
        magzines = Math.ceil((street * 3) / 5);
        break;
    }
    return magzines;
}





function magNumber(info){
    const dict = new Map([
      ["PT92", 17],
      ["M4A1", 30],
      ["M16A2", 30],
      ["PSG1", 5]
    ]);
    return Math.ceil(info[1] * 3 / dict.get(info[0]));
}





function magNumber(info){
    const weapons = {
      PT92: 17,
      M4A1: 30,
      M16A2: 30,
      PSG1: 5
    }
    for(let i = 0; i < info.length; i++){
        return Math.ceil((info.pop() * 3) / weapons[info[i]]);
    }
}





function magNumber(info) {
    const [gun, bullet] = info;
    
    switch(gun) {
      case 'PT92':
        return Math.ceil(bullet * 3 / 17);
      case 'M4A1':
      case 'M16A2':
        return Math.ceil(bullet * 3 / 30);
      case 'PSG1':
        return Math.ceil(bullet * 3 / 5);
    }
}





const magNumber = ([weapon, streets]) => Math.ceil(streets * 3 / ({
    'PT92': 17,
    'M4A1': 30,
    'M16A2': 30,
    'PSG1': 5,
  })[weapon]);





const magNumber = info => Math.ceil(info[1]*3 /({PT92: 17, M4A1: 30, M16A2:30, PSG1:5})[info[0]])