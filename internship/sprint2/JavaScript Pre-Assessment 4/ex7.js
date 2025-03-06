function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
