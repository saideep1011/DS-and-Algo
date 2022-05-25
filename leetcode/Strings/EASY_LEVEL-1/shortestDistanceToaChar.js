// 821. Shortest Distance to a Character

// Share
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i]
// is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// my approach
// use two pointer technique
// for i=0 , run a inner for loop from i=i+1 to end of the string
// if you find a given charecter //
// subtract its index from i and round it of and push to new array

var ShortesttoChar = function (s, c) {
  let newArray = [];
  //s.substring(i + 1);
  //s.substring(i + 1).indexOf(c)

  for (let i = 0; i < s.length; i++) {
    newArray.push(Math.abs(i - s.substring(i + 1).indexOf(c)));
  }
  return newArray;
};
console.log(ShortesttoChar("loveleetcode", "e"));
