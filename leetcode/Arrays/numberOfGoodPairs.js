//1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// count how many times a number appears
//if a number appears n times the n*(n-1)//2 good pairs can be made

//my approach
// right now complexity of my solutuion is o(n^2)
//can be done with O(n) when used hash table
//let count =0; here count increases whenever it finds a good pair
//run a nested for loop from both the sides
//if num[i]==num[j] and i<j
//increment count
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j >= 0; j--) {
      if (nums[i] == nums[j] && i < j) {
        count += 1;
      }
    }
  }
  return count;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
