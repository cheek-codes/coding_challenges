// check your arguments

// Bob has written a function to detect the type of an object. It recieves any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?





function objectType(obj) {
    return Object.prototype.toString.call(arguments.length == 0 ? null : obj);
}




const objectType = (...args) => Object.prototype.toString.call(...args,null) ;




function objectType() {
    const obj = arguments.length === 0 ? null : arguments[0];
    return Object.prototype.toString.call(obj);
}