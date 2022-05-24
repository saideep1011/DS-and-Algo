// 1935. Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken,
//  return the number of words in text you can fully type using this keyboard.

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

// my approach
// count the number of words in given string and assign a variable to it
// iterate on each word and find if the letter includes in each brokensentence
// if found delete total count by 1
var canBeTypedWords = function (text, brokenLetters) {
  let givenString = text.split(" ");
  console.log(givenString);
  let totalWordCount = givenString.length;
  let count = 0;
  for (let i = 0; i < givenString.length; i++) {
    for (let j = 0; j < givenString[i].length; j++) {
      if (brokenLetters.includes(givenString[i][j])) {
        count++;
        break;
      }
    }
  }
  return totalWordCount - count;
};

console.log(canBeTypedWords("leet code", "lt"));
