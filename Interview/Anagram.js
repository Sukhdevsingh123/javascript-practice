var str1="javascript";
var str2="javascript";
 const anagram=(str1,str2)=>{
    //sort method sort string a to z
return str1.split('').sort().join('')===str2.split('').sort().join('');
 }
console.log(anagram(str1,str2));