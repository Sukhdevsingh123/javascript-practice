// Q:-reverse a string without using built in reverse method ()

/*............by join method ()......... ....................
function reverseString(str) {
   var split = str.split('');
   var reverseArray = [];
   for (var i = split.length - 1; i >= 0; i--) {
       reverseArray.push(split[i]);
   }
   var reverseStr = reverseArray.join('');
   return reverseStr;
}
var result = reverseString("sukhdev")
console.log(result);
*/


/*..............................second method ................................... 
function reverseString(str) {
    var reverseArray = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reverseArray += str[i]
    }
    return reverseArray
}
var result = reverseString("sukhdev")
console.log(result);
*/


/*............................by using reduce method()...................................................

function reverseString(str) {
    return str.split('').reduce((reverse,char)=>
char+reverse,''
    )
}
var result = reverseString("sukhdev")
console.log(result);
*/

// ....................................solve recursively...........................
function reverseString(str) {
   if(str===''){
    return str;
   }
   return reverseString(str.substr(1))+str[0];
   //first call:-str.substr('ukhdev')+str(s);
   //second call:-str.substr("khdev")+str(u)
  //  ...so on
}
var result = reverseString("sukhdev")
console.log(result);