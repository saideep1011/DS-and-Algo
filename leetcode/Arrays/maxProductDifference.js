//1913. Maximum Product Difference Between Two Pairs
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// // Return the maximum such product difference.
// Example 1:

// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

// find 2 largest numbers in an array which are not equal
// find 2 smallest numbers in an array which are not equal

var maxProductDifference = function (nums) {
  let newArray = nums.sort(function (a, b) {
    return a - b;
  });
  let R1;
  let R2;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] <= newArray[i + 1]) {
      R1 = newArray[i] * newArray[i + 1];
    }
  }
  for (let j = newArray.length; j > 0; j--) {
    if (newArray[j] >= newArray[j - 1]) {
      R2 = newArray[j] * newArray[j - 1];
    }
  }
  return Math.abs(R2 - R1);
};
console.log(maxProductDifference([10, 10, 10, 10]));
