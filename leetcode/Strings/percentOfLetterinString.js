// 2278. Percentage of Letter in String

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Example 1:

// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
// count how many times the ltter given appears in a string
// do percentage of it

var percentageLetter = function (s, letter) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) {
      count++;
    }
  }
  return Math.floor((count / s.length) * 100);
};
console.log(percentageLetter("foobar", "o"));
