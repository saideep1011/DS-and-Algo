// 1684. Count the Number of Consistent Strings

// Share
// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// my apporach
// iterate to each word
// then iterate on each letter of the word
// if you find a letter which is not allowed in second iteration dont all else add
// loop through each word in array
//loop through each letter in each word
//if letter is not in allowed, set to false
//if looped through and didn't find single false then add to count

var countConsistentStrings = function (allowed, words) {
  
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let isallowed = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        console.log(words[i][j]);
        isallowed = false;
      }
    }
    if (isallowed) {
      count += 1;
    }
  }
  return count;
};
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
