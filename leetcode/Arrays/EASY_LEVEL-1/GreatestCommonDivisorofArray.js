// 1979. Find Greatest Common Divisor of Array

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

var findGCD = function (nums) {
  let newArray = nums.sort(function (a, b) {
    return a - b;
  });
  let smallestNumber = newArray.shift();
  let largestNumber = newArray.pop();

  function gcd(a, b) {
    if (a == 0) return b;
    return gcd(b % a, a);
  }
  return gcd(smallestNumber, largestNumber);
};
console.log(findGCD([2, 5, 6, 9, 10]));
