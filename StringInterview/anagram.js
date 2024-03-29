// check whether the given string is anagram or not 
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Sort the characters in both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  const string1 = "listen";
  const string2 = "silent";
  
  if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams.`);
  }
  