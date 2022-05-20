// 832. Flipping an Image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// my approach create an empty array
// reverse first array item and push to the new array (flipping)
// from flipped Image array for each subarray replace 1 to 0 and to 1
// the push that sub array to new invertedArray

// let array = [1, 1, 0];
// let newA = [];
// code for inverting an array
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == 0) {
//     newA.push(1);
//   } else if (array[i] == 1) {
//     newA.push(0);
//   }
// }
// console.log(newA);

var flipAndInvertImage = function (image) {
  let flippedImage = [];
  for (let i = 0; i < image.length; i++) {
    flippedImage.push(image[i].reverse());
  }

  for (let j = 0; j < flippedImage.length; j++) {
    for (let k = 0; k < flippedImage[j].length; k++) {
      if (flippedImage[j][k] == 0) {
        flippedImage[j][k] = 1;
      } else if (flippedImage[j][k] == 1) {
        flippedImage[j][k] = 0;
      }
    }
  }
  return flippedImage;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
