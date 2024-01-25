// find the first occurance of a given sunstring in a string in js
//In JavaScript, the indexOf method is a built-in method for strings that is used to find the first occurrence of a specified substring or value. The method returns the index of the first occurrence of the specified substring or value within the string, or -1 if the substring or value is not found.
function findFirstOccurrence(mainString, substring) {
  
    var index = mainString.indexOf(substring);
  

    // Check if the substring was found
    if (index !== -1) {
        console.log(`First occurrence of "${substring}" found at index ${index}.`);
    } else {
        console.log(`"${substring}" not found in the string.`);
    }
}

// Example usage:
var mainString = "Hello, this is a sample string.";
var substringToFind = "is";

findFirstOccurrence(mainString, substringToFind);//First occurrence of "is" found at index 9.



// ???????????find the last occurance of a given sunstring in a string in js???????????????

function findLastOccurrence(mainString, substring) {
    // Use lastIndexOf to find the last occurrence of the substring
    var index = mainString.lastIndexOf(substring);

    // Check if the substring was found
    if (index !== -1) {
        console.log(`Last occurrence of "${substring}" found at index ${index}.`);
    } else {
        console.log(`"${substring}" not found in the string.`);
    }
}

// Example usage:
var mainString = "Hello, this is a sample string. This is the last occurrence.";
var substringToFind = "is";

findLastOccurrence(mainString, substringToFind);
