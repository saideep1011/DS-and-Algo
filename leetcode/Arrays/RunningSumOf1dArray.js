// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Algorithm

// Define an array result.
// Initialize the first element of result with the first element of the input array.
// At index i append the sum of the element nums[i] and previous running sum result[i - 1] to the result array.
// We repeat step 3 for all indices from 1 to n-1.
var runningSum = function (nums) {
  let outputArray = [];
  let sum = 0;
  outputArray[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = outputArray[i - 1] + nums[i];
    outputArray.push(sum);
  }
  return outputArray;
};
console.log(runningSum([1, 2, 3, 4]));
