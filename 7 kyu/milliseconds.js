// Milliseconds

// In this kata you'll be given a value expressed in milliseconds. Your job is to convert this value to a nicely readable format like this "hh:mm:ss".

// Some basic rules:

// Your answer should be returned as a string
// Don't use any leading zeros before your string, e.g.
// "1:00:00" // is correct;

// "1:00" // is correct;

// "01:00" // is not correct;
// Always show the number of minutes and seconds, but don't show the hours if less than one hour
// "0:59:00" // is not correct;

// "59:00" // is correct;
// Always round down to the nearest whole second
// If the value is less than 1 hour, don't show the hours at all
// The highest possible value will be 86,400,000 milliseconds, i.e. 24 hours





// Will we be given strings? Will we be given empty strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return a new string where the given millisecond is converted to hours, minutes, and seconds in this format: hh:mm:ss




// If we were given 1 millisecond, should return "0:00"
// If we were given 3000 milliseconds, should return "0:03"
// If we were given 180000 milliseconds, should return "3:00"
// If we were given 3600000 milliseconds, should return "1:00:00"
// If we were given 3780000 milliseconds, should return "1:03:00"
// If we were given 3783000 milliseconds, should return "1:03:03"





function toString(time) {
    return new Date(time).toString().match(/\d\d:\d\d:\d\d/g)[0].replace(/^((00:0?)|0)/,"")
}






function toString(time) {
    let t = Math.floor(time / 1000);
    const second = t % 60;
    t = (t - second) / 60;
    const minute = t % 60;
    const hour = (t - minute) / 60;
    const result = hour ? `${hour}:${minute}:${second}` : `${minute}:${second}`;
    return result.replace(/:(\d)\b/g, ':0$1');
}






const toString = (time) => {
    const seconds = time / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    let parts
    if (hours >= 1) {
      parts = [
        Math.floor(hours),
        ("0" + Math.floor(minutes % 60)).slice(-2),
        ("0" + Math.floor(seconds % 60)).slice(-2)
      ]
    } else {
      parts = [
        Math.floor(minutes % 60),
        ("0" + Math.floor(seconds % 60)).slice(-2)
      ]
    }
  
    return parts.join(":")
}






toString = t => {
    let s = t / 1000;
    let m = s > 60 ? Math.floor(s / 60) : 0;
    s = Math.floor(s % 60);
    let h = m > 60 ? Math.floor(m / 60) : 0;
    m = Math.floor(m % 60);
    return `${h > 0 ? h + ':' : ''}${h > 0 && m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
}






function toString(time){
    const h = Math.floor(time / 3600000);
    time -= h * 3600000;
    const m = Math.floor(time / 60000);
    time -= m * 60000;
    const s = Math.floor(time / 1000);
    let result = "";
    if (h) result += h + ":";
    if (result) result += ("0" + m).slice(-2) + ":";
    else result += m + ":";
    return result + ("0" + s).slice(-2);
}






function toString(time) {
    const sec = (time / 1000) % 60 | 0;
    const min = ((time / (1000 * 60)) % 60) | 0;
    const hrs   = ((time / (1000 * 60 * 60)) % 24) | 0;
    if (!hrs) return `${min}:${sec > 9 ? sec : "0" + sec}`;
    return `${hrs}:${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}`
}






function toString(time) {
    var result;
    var seconds = Math.floor(time / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (hours === 0) {
      minutes = minutes.toString();
      seconds = seconds.toString();
      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }
      result = minutes + ":" + seconds;
    }
    else {
      hours = hours.toString();
      minutes = minutes.toString();
      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }
      seconds = seconds.toString();
      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }
      result = hours + ":" + minutes + ":" + seconds;
    }
    return result;
}