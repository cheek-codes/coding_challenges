// getNames()

// The following code is not given the expected results. Can you debug whta the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//     {name: 'Joe', age: 20},
//     {name: 'Bill', age: 30},
//     {name: 'Kate', age: 23}
//   ]
  
//   getNames(data) // should return ['Joe', 'Bill', 'Kate']

// function getNames(data){
//     return data.map(function(item){item.name});
// }






function getNames(data){
    return data.map((item)=>item.name);
}






function getNames(data){
    return data.map(function(item){return item.name});
}






function getNames(data){
    var array = [];
    for(var key in data) {
      array.push(data[key].name);
    }
    return array;
}