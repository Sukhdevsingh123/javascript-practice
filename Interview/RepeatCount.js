//Ques:- how many times a character is repeat in this string 

var str="javscript strings are immutable that are not changed";
const obj={}
for(var result of str){
        // Check if the character is already a key in the object
    if(obj[result]){
        // If it is, increment the count
        obj[result]++;
    }
    else{
         // If it's not, initialize the count to 1
        obj[result]=1;
    }
}
//Filter out characters with count less than equal 2 (non-duplicates)
let duplicate=Object.keys(obj).filter((char)=>{
    return obj[char]<=2;
})
console.log(duplicate);

o/p:-
(12) ['j', 'v', 'c', 'p', 'g', 'm', 'u', 'b', 'l', 'h', 'o', 'd']

