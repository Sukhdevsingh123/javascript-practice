// ques:-Linear Search
const arr = [1, 7, 5, 3, 8, 9, 2];
const linear = (arr, key) => {
    for (var elm of arr) {
        if (arr[elm] === key) {
            return elm;
        }
        return -1;
    }
}
const index = linear(arr, 17);
if (index == -1) {
    console.log("key is not found")
}
else {
    console.log("key is found at index:", index)
}