//  example of callback 

function multiply(sum){
    console.log( 'mul',sum*2);
}
function Divide(sum){
    console.log(Math.floor(sum/2));
}
function operationOn(num1,num2,operation){
    var sum=num1+num2;
    operation (sum); 
}
operationOn(10,20,multiply);//60
operationOn(10,20,Divide);//15
