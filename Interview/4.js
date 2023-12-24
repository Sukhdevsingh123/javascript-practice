// question:-check a number is decimal or integer 
//   if a number is divided by one is equal to zero then the No. is interger otherwise decimal


// ........................method 1.............
var num=10.1;
if(num%1===0){
    console.log('integer')
}
else{
    console.log('decimal')
}

// o/p:- decimal

//  .......................method 2......................
const isNum=(num)=>{
return num%1===0;
}
console.log(isNum(12)) //true
console.log(isNum(12.4)) //flase
