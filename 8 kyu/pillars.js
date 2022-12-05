// Pillars

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// 1. number of pillare(>=1)
// 2. distance between pillars (10 - 30 meters)
// 3. with of the pillar (10 - 5- centimeters)

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar)




// P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given arrays? Will we be given an empty array? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// R: Return the distance between the first and the last pillar in centimeters without the width of the first and last pillar




// E: 1. If we were given pillars(numPills, dist, width) = pillars(1, 10, 10), should return 0
// E: 2. If we were given pillars(numPills, dist, width) = pillars(2, 20, 25), should return 2000
// E: 2. If we were given pillars(numPills, dist, width) = pillars(11, 15, 30), should return 15270




function pillars(numPill, dist, width) {
    // your code here
    if (numPill >1){
      return (numPill - 2) * width + (numPill-1) * dist * 100
    }
    else{
      return 0
    }
}




const pillars = (numPill, dist, width) => (numPill > 1) ? (numPill - 2) * width + (numPill-1) * dist * 100 : 0




function pillars(num_pill, dist, width) {
    if (num_pill < 2) return 0;
    const widthAllPillars = (num_pill - 2) * width;
    const distAll = (num_pill - 1) * (dist * 100);
    
    return distAll + widthAllPillars;
}




function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}




const pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w; 




function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
}




const pillars = (num_pill, dist, width) =>
  Math.max((dist * 100 + width) * --num_pill - width, 0);