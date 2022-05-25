// Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// pattern 2 pointer
// approach
// create result array with same size as input array
//  create a left pointer
// create right pointer
// create result index and set it to last index of result array because we want the result array sorted in ascending order
// so the last element of the array should be highest
// if squared value of R is >squared value of L move R to result[rindex] and decrement the right and decrement the rindex
// if squared value of L is > R move sqrared value of L to r{index} and increment  L and rindex;
// continue this process

var sortedSquares = function (nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let resultIndex = nums.length - 1;

  while (left <= right) {
    let leftval = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);
    if (leftval < rightVal) {
      result[resultIndex] = rightVal;
      right--;
    } else {
      result[resultIndex] = leftval;
      left++;
    }

    resultIndex--;
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
