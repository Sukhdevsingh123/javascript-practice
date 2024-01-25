// ...........find missing no from 1 to N numbers in an Array?...........
var arr = [1, 2, 3, 5];
var n = arr.length + 1;
const funMissing = (arr, n) => {
    var Totalsum = 0; //15
    for (var i = 0; i <= n; i++) {
        Totalsum += i;
    }
    var actualSum = arr.reduce((acc, value) => acc + value, 0); //11
    var missingElm = Totalsum - actualSum; //15-11
    return missingElm;
}
console.log(funMissing(arr, n));//4

