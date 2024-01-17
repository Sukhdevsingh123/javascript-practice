// generate otp using Math.random() methdod
const otpGenerator=(lenght)=>{
var otp='';
for(var i=0;i<lenght;i++){
var random=Math.floor(Math.random()*10);
otp+=random;
}
return otp;
}
console.log(otpGenerator(4)); //2295

