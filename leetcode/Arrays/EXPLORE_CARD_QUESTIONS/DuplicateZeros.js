// Duplicate Zeros

// Solution
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

var duplicateZeros = function (arr) {
  let possibleDuplicates = 0;
  let length_ = arr.length - 1;
  // Find the number of zeros to be duplicated
  // Stopping when left points beyond the last element in the original array
  // which would be part of the modified array

  for (let left = 0; left <= length_ - possibleDuplicates; left++) {
    // Count the zeros
    if (arr[left] == 0) {
      // Edge case: This zero can't be duplicated. We have no more space,
      // as left is pointing to the last element which could be included
      if (left == length_ - possibleDuplicates) {
        arr[length_] = 0;
        length_--;
        break;
      }
      possibleDuplicates++;
    }
  }
  // Start backwards from the last element which would be part of new array.
  let last = length_ - possibleDuplicates;

  // Copy zero twice, and non zero once.
  for (let i = last; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i + possibleDuplicates] = 0;
      possibleDuplicates--;
      arr[i + possibleDuplicates] = 0;
    } else {
      arr[i + possibleDuplicates] = arr[i];
    }
  }
  return arr;
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
