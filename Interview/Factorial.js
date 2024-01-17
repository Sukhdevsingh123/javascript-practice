// Write a JavaScript program to calculate the factorial of a given number. 

const factorial=(num)=>{
if(num==0 || num==1){
    return 1;
}
else{
    return num*factorial(num-1);
}
}
console.log(factorial(10)); //3628800