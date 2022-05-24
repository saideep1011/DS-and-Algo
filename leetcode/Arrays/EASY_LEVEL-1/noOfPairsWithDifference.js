//2006. Count Number of Pairs With Absolute Difference K
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let negativeNumber = nums[i] - nums[j];
      if (negativeNumber < 0) {
        negativeNumber = negativeNumber * -1;
      }
      if (negativeNumber == k) {
        count += 1;
      }
    }
  }
  return count;
};
console.log(countKDifference([3, 2, 1, 5, 4], 2));
