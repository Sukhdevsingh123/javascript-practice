// The arrow functions, 
// on the other hand, do not have their own this but instead inherit it from the parent scope.
// define an arrow function that prints the value of this keyword
const myFunc = () => {
    console.log(this)
  }
  
  // call the function
  myFunc() //Window {0: Window, 1: Window, 2: Window, 3: Window, 4: Window, 5: Window, 6: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//   The output will be the same this time as we are simply getting the window object. Let us now understand why we got the window object as the output for the above code involving the use of the this keyword in an arrow function.
// If you try to do the operation with a normal function, you will still get a window or global object. Same outcome, but not for the same reason. As opposed to arrow functions, the normal functions have their scope bound 
// by default to the global one. The arrow functions, on the other hand, do not have their own this but instead inherit it from the parent scope.