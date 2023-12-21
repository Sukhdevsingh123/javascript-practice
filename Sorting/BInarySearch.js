const arr = [1, 2, 3, 4, 5, 6, 7];
// var key=2;
function Binary(arr, key) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor(start + end) / 2
        if (arr[mid] == key) {
            return mid;
        }
        if (key < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

var index = Binary(arr, 7);
console.log(index);