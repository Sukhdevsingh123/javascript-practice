// question:-make duplicate of an array

function duplicate(arr){
    return arr.concat(arr)
}
console.log(duplicate([1,2,3,4,5]));
// duplicate([1,2,3,4,5]) //[1,2,3,4,5,1,2,3,4,5]