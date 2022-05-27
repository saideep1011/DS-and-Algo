// Maximum Sum Subarray of Size K (easy)

// Problem Statement#
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
// edge case k>n
// my approach
// siding window
// consider a window of size k
// remove first element of window and add next element for window
// contine this till k<arr.length
// let window sum= current sum of window
// max sum is highest window sum found
//
// const max_sub_array_of_size_k = function (arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;
//   let i;
//   for (i = 0; i < k; i++) {
//     windowSum += arr[i];
//     maxSum = windowSum;
//     // here we got the sum of first three elements
//   }
//   // now lets consider case where i=k or greater than k
//   for (let i = k; i < arr.length; i++) {
//     windowSum += arr[i] - arr[i - k];
//     // here we are adding next element and deleting previous element
//     maxSum = Math.max(windowSum, maxSum);
//   }
//   return maxSum;
// };
// console.log(max_sub_array_of_size_k([2, 1, 5, 1, 3, 2], 3));

// now lets write same code with different approach and better one for all cases of given subarray length k

const maxSubArrays = function (nums, k) {
  let i = 0;
  let j = 0;
  let currentSum = 0;
  let maxSum = 0;
  while (j < nums.length) {
    currentSum = currentSum + nums[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      maxSum = Math.max(currentSum, maxSum);
      currentSum -= nums[i];

      i++;
      j++;
    }
  }
  return maxSum;
};
console.log(maxSubArrays([2, 1, 5, 1, 3, 2], 3));
