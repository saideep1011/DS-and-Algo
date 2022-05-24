// 1678. Goal Parser Interpretation

// Share
// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
//  The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
//  The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

var interpret = function (command) {
  let O = "o";
  let all = "all";
  let arr = [];
  for (let i = 0; i < command.length; i++) {
    if (command[i] == "G") {
      arr[i] = "G";
    }
    if (command[i] == "(" && command[i + 1] == ")") {
      arr[i] = "o";
    }
    if (command[i] == "(" && command[i + 1] == "a") {
      arr[i] = "al";
    }
  }
  return arr.join("");
};
console.log(interpret("(al)G(al)()()G"));
