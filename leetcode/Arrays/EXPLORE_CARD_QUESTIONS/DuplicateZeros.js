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
  let possibleDups = 0;
  let arrayLength = arr.length - 1;
  for (let left = 0; left <= arrayLength - possibleDups; left++) {
    if (arr[left] == 0) {
      if (left == arrayLength - possibleDups) {
        arr[length] = 0;
        arrayLength--;
        break;
      }
      possibleDups++;
    }
  }
  let last = arrayLength - possibleDups;
  for (let i = last; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i + possibleDups] = 0;
      possibleDups--;
      arr[i + possibleDups] = 0;
    } else {
      arr[i + possibleDups] = arr[i];
    }
  }
  return arr
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
