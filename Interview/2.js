// ques:-How to check if an object is an array or not? Provide some code 

var arrayList=[1,2,3,4];
// The isArray() method returns true if an object is an array, otherwise false.
var result=Array.isArray(arrayList);
if(result){
    console.log('array')
}
else{
    console.log(' not array')

}

// @@@@@@@@@@@@@@@@@@@@@@@@@ OR @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// var arrayList=[1,2,3,4];
// if(Object.prototype.toString.call(arrayList)==='[object Array]'){
//     console.log('Array');
// }
// else{
//     console.log(' Not Array');

// }