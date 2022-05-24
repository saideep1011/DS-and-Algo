// 1704. Determine if String Halves Are Alike

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// approach//
//1. break the string in 2 eal parts
//2. let a be the first half, let b be the second half
//init count =0 to and b
//init volwes array
//if a[i] includes vowels count++
// if a has n vowels and also b has same n number of vowels
// return true
//

var halvesAreAlike = function (s) {
  let A = s.substring(0, s.length / 2).split("");
  let B = s.substring(s.length / 2).split("");
  let countA = 0;
  let countB = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < A.length; i++) {
    if (vowels.includes(A[i])) {
      countA += 1;
    }
  }
  for (let j = 0; j < B.length; j++) {
    if (vowels.includes(B[j])) {
      countB += 1;
    }
  }
  if (countA === countB) {
    return true;
  }
  {
    return false;
  }
};
console.log(halvesAreAlike("Ksaideep"));
