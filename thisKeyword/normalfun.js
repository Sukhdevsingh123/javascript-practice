// =>In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).

// =>The this keyword refers to different objects depending on how it is used:

// =>The this keyword in JavaScript refers to the object that is executing the current function. 
// =>If the function is not a method of an object, then this refers to the global object.



// This function is not a method of an object, so `this` refers to the global object.
function myFunction() {
    console.log(this); // Logs the global object
  }
  
  myFunction();
  
  // This function is a method of the `person` object, so `this` refers to the `person` object.
  const person = {
    name: "John Doe",
    age: 30,
    greet() {
      console.log(this.name); // Logs the `person` object
    }
  };
  
  person.greet();


  var objects={
    name:"garima",
    great:function(){
        console.log(this)
    }
}
objects.great() //{name: 'garima', great: ƒ}