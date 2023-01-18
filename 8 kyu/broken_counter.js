// broken counter

// Our counter prototype is broken. Can you spot, what's wrong here?

// function Counter() {
//     this.value = 0;
//   }
  
//   Counter.prototype.increase() {
//     this.value++;
//   };
  
//   Counter.prototype.getValue() {
//     return this.value;
//   };
  
//   Counter.prototype.reset() {
//     this.value = 0;
//   };






function Counter() {
    this.value = 0;
  }
  
  Counter.prototype.increase= function(){
    this.value++;
  };
  
  Counter.prototype.getValue= function(){
    return this.value;
  };
  
  Counter.prototype.reset= function(){
    this.value = 0;
  };







  class Counter {
	constructor() {
  	this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}






function Counter() {
    this.value = 0;
  }
  
  Counter.prototype = {
    increase : function(){this.value++;},
    getValue : function(){ return this.value;},
    reset : function(){this.value = 0;}
  };






class Counter {
    constructor() { this.reset();      }
    increase()    { this.value++;      }
    getValue()    { return this.value; }
    reset()       { this.value = 0;    }
}






function Counter() {
    this.value = 0;
    this.increase = () => this.value++;
    this.getValue = () => this.value;
    this.reset = () => this.value = 0;
};






this.value=0;function Counter(){};Counter.prototype.increase=()=>this.value++;Counter.prototype.getValue=()=>this.value;Counter.prototype.reset=()=>this.value=0//Only true madlads program in one line