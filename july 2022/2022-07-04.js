// Reverse list order

// In this kata you will create a function that takes in a list and returns a list with the reverse order

// Examples (Input -> Output)
// [1, 2, 3, 4]  -> [4, 3, 2, 1]
// [9, 2, 0, 7]  -> [7, 0, 2, 9]



// P: Will we be given empty strings? Will we be given strings/ Will we be given special characters? Will we be given floats? will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a new array where the given array has been reversed in order.



// E: 1. If we are given [1, 2, 3, 4], should return [4, 3, 2, 1]
// E: 2. If we are given [9, 2, 0, 7], should return [7, 0, 2, 9]
// E: 3. If we are given [-9, -22, 0, 7], should return [7, 0, -2, -9]
// E: 4. If we are given [1, -2, 3, -4], should return [-4, 3, -2, 1]



function reverseList(list){
    return (list.reverse())
}



function reverseList(list){
    return list.reverse()
}



function reverseList(list) {
    return list.slice().reverse();
}



function reverseList(list) {
    var array = [];
    for (var i = list.length-1; i >= 0; i --){
      array.push(list[i]);
    }
    return array;
}