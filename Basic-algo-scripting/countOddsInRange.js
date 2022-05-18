//Count Odd Numbers in an Interval Range
//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

var countOdds = function (low, high) {
  let a = [];
  for (let i = low; i <= high; i++) {
    if (i % 2 == 1) {
      a.push(i);
    }
  }
  return a.length;
};
console.log(countOdds(5, 10));
