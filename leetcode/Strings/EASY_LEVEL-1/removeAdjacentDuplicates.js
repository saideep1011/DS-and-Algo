// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters.
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.
// The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// my approach
// init an empty array with s[0]
//iterate over string from 1 to last//
//if s[i] is not euqal to empty array's last letter push it
// if its equal remove that letter from emply array

var removeDuplicates = function (s) {
  let newArray = [];
  newArray.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] != newArray[newArray.length - 1]) {
      newArray.push(s[i]);
    } else {
      newArray.pop();
    }
  }
  return newArray.join("");
};
console.log(removeDuplicates("abbaca"));
