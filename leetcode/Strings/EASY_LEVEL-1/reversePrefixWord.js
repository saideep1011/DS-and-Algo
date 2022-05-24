// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence
//  of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive).
// The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// my approach
// split and iterate on each letter of the word
// find  the first occurence of the given ch
// create a sbstring from to found index of the letter .
//reverse the string and then join

var reversePrefix = function (word, ch) {
  let index;

  if (word.includes(ch)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == ch) {
        index = i;
        break;
      }
    }
    let reverseString = word
      .substring(0, index + 1)
      .split("")
      .reverse()
      .join("");
    let remainigString = word.substring(index + 1);
    return reverseString + remainigString;
  } else {
    return word;
  }
};
console.log(reversePrefix("abcd", "q"));
