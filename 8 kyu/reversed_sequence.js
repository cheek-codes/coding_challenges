// reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example:
// n=5 --> [5,4,3,2,1]




// Will we be given a string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




// Return an array of numbers starting from the given number to 1




// 1. If we were given reverseSeq(5), should return [5, 4, 3, 2, 1]
// 2. If we were given reverseSeq(10), should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]





const reverseSeq = n => {
    let answer = [];          //intialize an array
    
    for (let i=n; i>0; i--){  //loop down from n to 1
      answer.push(i);         //push each i to the answer array
    }
    
    return answer;            //return answer;
};







const reverseSeq = n => {
    let num =[]
    for (let i = 1; i <=n; i ++){
      num.push(i)
    }
    return num.reverse()
}






const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
};






const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};






const reverseSeq = length => Array.from({length}, () => length--)







const reverseSeq = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
};