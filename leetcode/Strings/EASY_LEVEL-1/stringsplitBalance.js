// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function (s) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
        result += 1;
      }
  }
  
  return result;
};
console.log(balancedStringSplit("RLRRLLRLRL"));
