// 1984. Minimum Difference Between Highest and Lowest of K Scores

// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student.
// You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the
// lowest of the k scores is minimized.

// Return the minimum possible difference.
// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

var minimumDIfference = function (nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  });

  let i = 0;
  let j = 0;
  let res = Math.max(...nums);
  n = nums.length;
  while (j < n) {
    if (j - i + 1 < k) j++;
    else if (j - i + 1 == k) {
      res = Math.min(res, nums[j] - nums[i]);
      i++;
      j++;
    }
  }
  return res;
};
console.log(minimumDIfference([9, 4, 1, 7], 2));
