// Merge Sorted Array

// Solution
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//algo
// The simplest implementation would be to make a copy of the values in nums1, called nums1Copy,
// and then use two read pointers and one write pointer to read values from nums1Copy and nums2 and write them into nums1.

// Initialize nums1Copy to be a new array containing the first m values of nums1.
// Initialize read pointer p1 to the beginning of nums1Copy.
// Initialize read pointer p2 to the beginning of nums2.
// Initialize write pointer p to the beginning of nums1.
// While p is still within nums1:
// If nums1Copy[p1] exists and is less than or equal to nums2[p2]:
// Write nums1Copy[p1] into nums1[p], and increment p1 by 1.
// Else
// Write nums2[p2] into nums1[p], and increment p2 by 1.
// Increment p by 1.
var merge = function (nums1, m, nums2, n) {
  let nums1Copy = [];

  for (let i = 0; i < m; i++) {
    nums1Copy.push(nums1[i]);
  }
  let p1 = 0; // pointer ofr nums1compy
  //pointer of nums2
  let p2 = 0;

  for (let p = 0; p < m + n; p++) {
    if (nums1Copy[p1] <= nums2[p2]) {
      nums1[p] = nums1Copy[p1];
      p1++;
    } else {
      nums1[p] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
