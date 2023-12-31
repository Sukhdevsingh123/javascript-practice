// Ques:-Find vowels in the given String 
var str="javscript strings are immutable that are not changed";
var vowels=['a','e','i','o','u'];
// console.log(vowels);
var arrayVowels=[]; 
// o/p:- [
//     'e', 'i', 'u', 'a',
//     'e', 'a', 'a', 'e',
//     'o', 'a', 'e'
//   ]
for(var char of str){
    if(vowels.includes(char.toLowerCase())){
        arrayVowels.push(char.toLowerCase())
    }
}

// count the how many times "a" comes 
var count=0;
arrayVowels.filter((char)=>{
    if(char==='a'){
    count++
    }
    return count;
})
console.log(count)// a is comes 6 times