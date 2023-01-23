// return the day

// Comple the functino which returns the weeekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"






// Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return "Sunday", if we were given 1
// Return "Monday", if we were given 2
// Return "Tuesday", if we were given 3
// Return "Wednesday", if we were given 4
// Return "Thursday", if we were given 5
// Return "Friday", if we were given 6
// Return "Saturday", if we were given 7
// Return "Wrong, please enter a number between 1 and 7", if we were given anything else




// 1. If we were given whatday(1), should return "Sunday"
// 2. If we were given whatday(2), should return "Monday"
// 3. If we were given whatday(3), should return "Tuesday"
// 4. If we were given whatday(4), should return "Wednesday"
// 5. If we were given whatday(5), should return "Thursday"
// 6. If we were given whatday(6), should return "Friday"
// 7. If we were given whatday(7), should return "Saturday"
// 8. If we were given whatday(10), should return "Wrong, please enter a number between 1 and 7"






function whatday(num) { 
    switch(num){
      case 1: return "Sunday"
      case 2: return "Monday"
      case 3: return "Tuesday"
      case 4: return "Wednesday"
      case 5: return "Thursday"
      case 6: return "Friday"
      case 7: return "Saturday"
      default: return "Wrong, please enter a number between 1 and 7"}
}






function whatday(num) { 
    if (num == 1){
      return "Sunday"
    }
    else if (num == 2){
      return "Monday"
    }
    else if (num == 3){
      return "Tuesday"
    }
    else if (num == 4){
      return "Wednesday"
    }
    else if (num == 5){
      return "Thursday"
    }
    else if (num == 6){
      return "Friday"
    }
    else if (num == 7){
      return "Saturday"
    }
    else{
      return "Wrong, please enter a number between 1 and 7"
    }
}






function whatday(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}






function whatday(num) { 
    let days = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday'
    }
    return days[ num ] || 'Wrong, please enter a number between 1 and 7';
}






whatday=n=>[,'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][n]||'Wrong, please enter a number between 1 and 7'






function whatday(num) { 
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num-1]||'Wrong, please enter a number between 1 and 7'
}