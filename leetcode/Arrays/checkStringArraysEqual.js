// 1662. Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

var arrayStringsAreEqual = function (word1, word2) {
  let string1;
  let string2;

  for (let i = 0; i < word1.length; i++) {
    string1 += word1[i];
  }
  for (let j = 0; j < word2.length; j++) {
    string2 += word2[j];
  }
  return string1 === string2;
};
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
