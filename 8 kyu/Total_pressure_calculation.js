// Total pressure calculation

// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure Ptotal exerted by the molecules. Formula to calculate the pressure is:

// Ptotal = ((m1/M1)+(m2/M2)RT)/V

// Input:
// Six values:
// M1, M2: molar masses of both gases in grams(g)
// m1, m2: present mass of both gases in g*mol^-1
// V: volume of the vessel in dm^3
// T: temperature in C

// Output
// Onve value: Ptotal in units of atm

// Notes
// Remember: Temperature is given in Celsius while SI unit is Kelvin(K). 0C = 273.15K
// The gas constant R = 0.082dm^3 * atm * K^-1 * mol^-1




// R: Return the total pressure that was calculated



// E: 1. If we were given solution(44, 30, 3, 2, 5, 50), should return 0.7146511212121212
// E: 2. If we were given solution(60, 20, 10, 30, 10, 100), should return 5.099716666666667




solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    // your code goes here
    let one = givenMass1/molarMass1
    let two = givenMass2/molarMass2
    let rt = 0.082*(temp + 273.15)
    return ((one + two) * rt) / volume
}




solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    // your code goes here
    return (((givenMass1/molarMass1) + (givenMass2/molarMass2)) * (0.082 * (temp +273.15))/ volume)
}




solution=(m1,m2,M1,M2,v,t)=>(M1/m1+M2/m2)*0.082*(t+273.15)/v





const solution = (M1, M2, m1, m2, V, T) => {
    const R = .082;
    const n = m1 / M1 + m2 / M2;
    return n * (T + 273.15) * R / V; 
}