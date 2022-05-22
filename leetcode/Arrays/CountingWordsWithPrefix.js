// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

var prefixCount = function (words, pref) {
  let prefixlength = pref.length;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, prefixlength) == pref) {
      count += 1;
    }
  }
  return count
};

console.log(prefixCount(["leetcode","win","loops","success"], "at"));
