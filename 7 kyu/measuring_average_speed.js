// Measuring Average Speed

// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return a new string of a speed in miles per hour




// If we were given calculateSpeed("100m", "10s"),should return "22mph"
// If we were given calculateSpeed("3km", "5min"), should return "22mph"
// If we were given calculateSpeed("35m", "293s"), should return "0mph"
// If we were given calculateSpeed("573km", "39min"), should return "548mph"






function calculateSpeed(distance, time) {
    let distanceMeters
    if (distance.endsWith("km")) {
      distanceMeters = parseFloat(distance.slice(0, -2)) * 1000
    }
    else {
      distanceMeters = parseFloat(distance.slice(0, -1))
    }
    
    let timeSeconds
    if (time.endsWith("min")) {
      timeSeconds = parseFloat(time.slice(0, -3)) * 60
    }
    else {
      timeSeconds = parseFloat(time.slice(0, -1))
    }
    
    let speedMph = distanceMeters / timeSeconds * 2.23694
    let speedMphRounded = Math.round(speedMph)
    
    return speedMphRounded + "mph"
}






function calculateSpeed(distance, time) {
    let meters = parseInt(distance, 10) * (distance.match(/km$/) ? 1000 : 1);
    let seconds = parseInt(time, 10) * (time.match(/min$/) ? 60 : 1);
    return Math.round(meters / seconds * 2.23694) + 'mph';
}






function calculateSpeed(d, t) {
    return `${Math.round(2.23694 * (parseFloat(d) * (/km/.test(d) ? 1000 : 1)) / (parseFloat(t) * (/min/.test(t) ? 60 : 1)))}mph`;
}






const RATIOS={min:60, km:1000, mph:2.23694};

const extractStr=s=>{
  let [a,b] = s.match(/\d+|\w+/g);
  return +a * (RATIOS[b]||1);
}

function calculateSpeed(...args) {
  let [d,t] = args.map(extractStr);
  return (d/t*RATIOS.mph).toFixed() + 'mph';
}






const mps_2_mph = 2.23694

const calculateSpeed = (d,t) => {
  d = /km/.test(d) ? parseInt(d)*1000 : parseInt(d)
  t = /min/.test(t) ? parseInt(t)*60 : parseInt(t)
  return `${Math.round((d/t)*mps_2_mph)}mph`
}






function calculateSpeed(distance, time) {
    d = parseInt(distance);
    if (distance.endsWith("km")) d *= 1000;
    
    t = parseInt(time);
    if (time.endsWith("min")) t *= 60;
    
    return Math.round((d / t) * 2.23694) + "mph";
}






function calculateSpeed(distance, time) {
    var [_, d, ud] = distance.match(/(\d+)(\D+)/);
    var [_, t, ut] = time.match(/(\d+)(\D+)/);
  
    if (ud === 'km')
      d *= 1000;
  
    if (ut === 'min')
      t *= 60;
  
    return Math.round(d / t * 2.23694) + 'mph';
}






calculateSpeed=(d,t)=>(((d.indexOf('km')>=0?parseInt(d.replace('km','000')):parseInt(d))/(t.indexOf('min')>=0?parseInt(t)*60:parseInt(t))*2.23694+.5)|0)+"mph"






function calculateSpeed(distance, time) {
    const distanceInMeters = distance.includes('km') ? parseInt(distance)*1000 : parseInt(distance)
    const timeInSeconds = time.includes('s') ? parseInt(time) : parseInt(time)*60
    return Math.round((distanceInMeters / timeInSeconds) * 2.23694) + 'mph'
}