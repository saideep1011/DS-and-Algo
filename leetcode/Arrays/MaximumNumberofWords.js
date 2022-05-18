//2114. Maximum Number of Words Found in Sentences
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

//my approcah
//initialise the first elemnt sentence to a variable x
//from next iteration starting from 1 start comparing each element word length to x
// replace X with that iterative word length if its greater than current x
var mostWordsFound = (sentences) => {
  let X = sentences[0].split(" ").length;
  for (let i = 1; i < sentences.length; i++) {
    if (X < sentences[i].split(" ").length) {
      X = sentences[i].split(" ").length;
    }
  }
  return X;
};
console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
