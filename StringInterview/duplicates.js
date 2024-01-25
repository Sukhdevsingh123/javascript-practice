var arr=[1,2,3,4,1,2,2,5,3];
var filter=arr.filter((value,index,self)=>{
    return self.indexOf(value)===index;
    
});
console.log(filter)
//  2nd method 
var arr=[1,2,3,4,1,2,2,5,3];
var uniqueArray=[];
for (var i=0;i<arr.length;i++){
    if(uniqueArray.indexOf(arr[i])===-1){
        uniqueArray.push(arr[i]);
    }
    
}
console.log(uniqueArray)

// 3rd method 
var arr=[1,2,2,1,3,4,1];
var charMap={};
var unique="";
for(var i=0;i<arr.length;i++){
    var currChar=arr[i];
    if(!charMap[currChar]){
        unique+=currChar;
    }
    charMap[currChar]=true;
}
console.log(unique);



var arr=[1,2,3,5];
var n=arr.length+1;

