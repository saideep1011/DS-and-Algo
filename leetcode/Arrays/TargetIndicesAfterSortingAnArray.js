// 2089. Find Target Indices After Sorting Array

// Share
// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

var targetIndices = function (nums, target) {
  let newArray = nums.sort(function (a, b) {
    return a - b;
  });
  let targetIndices = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == target) {
      targetIndices.push(i);
    }
  }
  return targetIndices;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
