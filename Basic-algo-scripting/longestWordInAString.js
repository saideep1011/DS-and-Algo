// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxlength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxlength) {
      maxlength = words[i].length;
    }
  }
  return maxlength;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
