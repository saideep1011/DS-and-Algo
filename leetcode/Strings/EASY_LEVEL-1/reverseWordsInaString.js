// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function (s) {
  //   let str = "Let's";
  //   return str.split("").reverse().join("");
  let OutputString = [];
  let GivenString = s.split(" ");
  for (let i = 0; i < GivenString.length; i++) {
    OutputString.push(GivenString[i].split("").reverse().join(""));
  }
  return OutputString.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"));
