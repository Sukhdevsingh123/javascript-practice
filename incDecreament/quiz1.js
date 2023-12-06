//    ...................question ................... 
var i = 11;
i = i++ + ++i;
console.log(x);//24         
//  Initially, i=11,
//  i = i++ + ++i
//  i = (i is used before increment) + (i is used after increment)
//  i = 11(i=12) + 13(i=13)
//  i = 11 + 13 = 24

//    ...................question ................... 
var a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;  //11+22+11+22+13+24=103
console.log("a=" + a); //13
console.log("b=" + b); //24
console.log("c=" + c); //103

// Given, a=11, b=22
// c = a + b + a++ + b++ + ++a + ++b
// c = 11 + 22 + (a is used before increment) + (b is used before increment) + (a is used after increment) + (b is used after increment)
// c = 11 + 22 + 11(a=12, b=22) + 22(a=12, b=23) + 13(a=13, b=23) + 24(a=13, b=24)
// c = 11 + 22 + 11 + 22 + 13 + 24 = 103 and a=13, b=24


//    ...................question ................... 

var i = 0;
i = i++ - --i + ++i - i--; //0-1+1-1
console.log('i', i); //0

// initially, i=0
// i = i++ – –i + ++i – i–
// i = (i is used before increment) – (i is used after decrement) + (i is used after increment) – (i is used before decrement)
// i = 0(i=1) – 0(i=0) + 1(i=1) – 1(i=0)
// i = 0 – 0 + 1 – 1 = 0

//    ...................question ................... 
let bln = true; //1
bln++; //1+1=2
console.log('b', bln) //2
//  b is initially set to true.
// The ++ operator is applied to b. Since true is equivalent to 1, the value of b becomes 2 after the increment operation.
// The console.log statement prints the value of b, which is now 2.


//    ...................question ................... 
        //    var l = 11;  
        // var j = --(i++);
        // console.log('l',l)
        // console.log('m',m)
        // SyntaxError: Invalid left-hand side expression in prefix operation

//    ...................question ................... 
          var z= 11++;
        // console.log('z',z);
        // Invalid left-hand side expression in postfix operation









//    ...................question 1................... 
var x = 1;
console.log(x); //1
x++;
console.log(x); //2
++x;
console.log(x); //3

//    ...................question 2................... 
var x = 1;
console.log(x);  //1
++x;
console.log(x);  //2

//    ...................question 3................... 

var x = 1;
console.log(++x); //2
console.log(x);   //2

//    ...................question 4................... 
var x = 1;
x = x + 1;
console.log(x); //2
//    ...................question 4................... 
var x = 1;
x -= 1;
console.log(x); //0


