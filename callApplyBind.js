/*The call(), apply(), and bind() methods in JavaScript are all used to change the context of a function. 
The context of a function is the object that is bound to the this keyword within the function.
The call() and apply() methods both allow you to call a function with a specific context. 
The call() method takes the arguments to the function as individual parameters, while 
the apply() method takes an array of arguments.
The bind() method creates a new function with a specific context. The new function can then be called with any arguments.*/

// call example
const person={
    fullname:function(age){
         return this.firstName +" "+this.lastName+" "+(age ?',Age' + age :'') ; 
         
    }
}
const person1={
    firstName:"Sukhdev",
    lastName:'Singh'

}
const person2={
    firstName:"vishal",
    lastName:'choudhary'

}
console.log(person.fullname.call(person1)); //Sukhdev Singh
console.log(person.fullname.call(person2,'30')); //vishal choudhary,Age30


// APPLY():-the apply() method takes an array of arguments.
const personal={
    fullname:function(age,city){
         return this.firstName +" "+this.lastName+" "+(age ?',Age' + age :'')+" "+city ; 
         
    }
}
const data1={
    firstName:"Sukhdev",
    lastName:'Singh'

}
const data2={
    firstName:"vishal",
    lastName:'choudhary'

}
console.log(personal.fullname.apply(data1)); //Sukhdev Singh
console.log(personal.fullname.apply(data2,['30','mathura'])); //vishal choudhary,Age30 mathura

// ...............greet.....................greet.........greet..............................greet...............greet.........greet..........
//Bind
const greet = function(greeting) {
    return `${greeting}, ${this.name}`;
  }
  
  const per = {
    name: "Sukhdev"
  }
  
  // Using bind to create a new function with a specific context
  const greetJohn = greet.bind(per, "Hello");
  console.log(greetJohn()); // Output: Hello, John
  