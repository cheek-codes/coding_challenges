// FIXME: Get full name

// The code provided is supposed return a person' fullname given their first and last names.

// But it's not working properly.

// Notes:
// The first and/or last names are never null, but may be empty.

// Taks
// Fix the bug so we can all go home early.

// class Dinglemouse{

//     constructor( firstName, lastName ){
//     }
    
//     getFullName(){
//       return firstName+" "+lastName
//     }
    
// }






class Dinglemouse{

    constructor( firstName, lastName ){
      this.firstName = firstName
      this.lastName = lastName
    }
    
    getFullName(){
      if (this.firstName === ""){
        return this.lastName
      }
      else if(this.lastName == ""){
        return this.firstName
      }
      else{
        return `${this.firstName} ${this.lastName}`
      }
    }
    
}






class Dinglemouse{

    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
    
}






class Dinglemouse{
    constructor( firstName, lastName ){
      this.firstName = firstName.concat(" ");
      this.lastName = lastName;
    }
    
    getFullName(){
      return this.firstName.concat(this.lastName).trim();
    }
    
}






function Dinglemouse(r, s) {
    this.getFullName = _ => (r + ' ' + s).trim();
}






class Dinglemouse{
  
    constructor( firstName, lastName ){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName(){
      var full = this.firstName+" "+this.lastName;
      return full.trim();
    }
    
}






class Dinglemouse {

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
    
}







class Dinglemouse {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName(){
      const { firstName, lastName } = this;
      return `${firstName} ${lastName}`.trim();
    }
}