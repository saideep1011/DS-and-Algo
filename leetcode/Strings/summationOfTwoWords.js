// 1880. Check if Word Equals Summation of Two Words

// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s,
//which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

// Example 1:

// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.
// my approach
// find index of each letter in the word
// concat it and assign them
// sum of first word concat and second word concat matches concat of target word return true

var isSumEqual = function (firstWord, secondWord, targetWord) {
  let alphabetDictoinary = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let firstWordSummation = [];
  let secondWordSummation = [];
  let thirdWordSummation = [];
  for (let i = 0; i < firstWord.length; i++) {
    firstWordSummation.push(alphabetDictoinary.indexOf(firstWord[i]));
  }
  for (let j = 0; j < secondWord.length; j++) {
    secondWordSummation.push(alphabetDictoinary.indexOf(secondWord[j]));
  }
  for (let k = 0; k < targetWord.length; k++) {
    thirdWordSummation.push(alphabetDictoinary.indexOf(targetWord[k]));
  }
  if (
    parseInt(firstWordSummation.join("")) +
      parseInt(secondWordSummation.join("")) ==
    thirdWordSummation.join("")
  ) {
    return true;
  }
  {
    return false;
  }
};
console.log(isSumEqual("aaa", "a", "aab"));
