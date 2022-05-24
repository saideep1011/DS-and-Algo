// 2108. Find First Palindromic String in the Array

// Share
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

var firstPalindrome = function (words) {
  let firstPallindromeWord;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      firstPallindromeWord = words[i];
      break;
    } else {
      firstPallindromeWord = "";
    }
  }
  return firstPallindromeWord;
};

console.log(firstPalindrome(["def", "ghi"]));
