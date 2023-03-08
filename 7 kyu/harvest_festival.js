// harvest festival

// You have cultivated a plant, and after months of hard work, the time has come to reap the flowers of your hard work. When it was growing, you added water and fertilizer, and kept a constant temperature. It's time check how much your plant has grown.

// A plant is represented horizontally, from the base to the left, to the end to the right:

// ---@---@---@
// The stem is represented by hyphens -, and the flowers are represented by symbols. A plant always starts with the stem, and always ends with flowers.

// Four parameters will be given. The four parameters are:

// seed (string) - determines the type of flowers generated by the plant.
// water (integer) - each unit of water extends the portion of stem between the flowers. It also gives how many times the stems + flower clusters should be repeated
// fert (integer) - each unit of fertilizer increases the amount of flowers, grouped in clusters
// temp (integer) - if the temperature given is in the range of 20°C and 30°C, the plant grows normally, otherwise, all the flowers die except for one flower at the end of the stem.
// Given the above parameters, your task is to return a string representing the plant.

// Examples
// plant("@", 3, 3, 25) => "---@@@---@@@---@@@"
// # Water gives the length of the stem portions between flowers
// # Water also gives the total number of segments(number of times flowers + stems should be repeated)
// # Fertilizer gives the length of the flower clusters.
// # Temperature is in the range of 20°C and 30°C

// plant("$", 4, 2, 30) => "----$$----$$----$$----$$"

// plant("&", 1, 5, 20) => "-&&&&&"

// plant("^", 3, 3, 35) => "---------^"
// # The temperature is not in the correct range, so all flowers die, except the last one at the end.
// # The stem is not affected by the temperature
// Notes
// Edge conditions will not be tested, meaning parameters of water or fertilizer or temperature being zero. This will not be tested. The parameters will always be valid (no zero).
// The temperature bounds are inclusive (20 and 30 will be included as 21, 22, 23, 24...)
// Happy Coding!




// Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? will we be given posititve numbers?




// Return a new string where the given "seed" is the flower, the "water" will be the number of stem, the "fert" will be the number of flower, and the number of times the stems and flowers are repeated by the "water" only and only if the given "temp" is greater than or equal to 20 degrees C, and less than or equal to 30 degrees C

// Return only a single flower on the end of the stem from the given parameter of "seed" and the number of stem is not affected by the temperature that is not within the range given above




// 1. If we were given plant("@", 3, 3, 25), should return "---@@@---@@@---@@@"
// 2. If we were given plant("$", 4, 2, 30), should return "----$$----$$----$$----$$"
// 3. If we were given plant("&", 1, 5, 20), should return  "-&&&&&"
// 4. If we were given plant("^", 3, 3, 35), should return "---------^"






function plant(seed, water, fert, temp){

    if (temp >=20 && temp <=30){
      let w = "-"
      let s = w.repeat(water)
      let f = seed.repeat(fert)
      let fc = s+f
      return fc.repeat(water)
    }
    else if (temp <20 || temp >30){
      let w = "-"
      let s = w.repeat(water*water)
      return s+seed
    }
}






function plant(seed, water, fert, temp){
    let w = "-"
    let s = w.repeat(water)
    let f = seed.repeat(fert)
    let fc = s+f
    if (temp >=20 && temp <=30){
      return fc.repeat(water)
    }
    else if (temp <20 || temp >30){
      let s = w.repeat(water*water)
      return s+seed
    }
}






function plant(seed, water, fert, temp){
    return 20 <= temp && temp <= 30 ? ("-".repeat(water) + seed.repeat(fert)).repeat(water) : "-".repeat(water * water) + seed
}






function plant(seed, water, fert, temp){
    let stem = '-'.repeat(water);
    let flower = seed.repeat(fert);
    if (temp < 20 || temp > 30) return stem.repeat(water) + seed;
    return (stem + flower).repeat(water);
}






const plant = (seed, water, fert, temp) => 
      temp < 20 || temp > 30 ? '-'.repeat(water * water) + seed : 
      Array(water + 1).join( '-'.repeat(water) + seed.repeat(fert))






function plant(seed, water, fert, temp){
return temp < 20 || temp > 30 
? `${"-".repeat(water ** 2)}${seed}`
: `${"-".repeat(water)}${seed.repeat(fert)}`.repeat(water);
}






function plant(seed, water, fert, temp) {
    if (temp <= 30 && temp >= 20) {
      return ('-'.repeat(water) + `${seed}`.repeat(fert)).repeat(water)
    } else {
      return '-'.repeat(water * water) + seed
    }
}






function plant(seed, water, fert, temp){
    const tempGood = temp >= 20 && temp <= 30;
    const flower = tempGood ? seed : '';
    
    return ('-'.repeat(water) + flower.repeat(fert)).repeat(water) + (tempGood?'':seed);
}