
//queS:-Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
var Str='racecar'
const palindrome=(Str)=>{
return Str===Str.split('').reverse().join('')
}
console.log(palindrome(Str));
// o/p:-true