//You may need to turn the string into an array before you can reverse it.
function reverseString(str) {
  let arr = str.split("");
  let newString = [];
  for (let i = arr.length; i >= 0; i--) {
    newString.push(arr[i]);
  }
  return newString.join("");
}

console.log(reverseString("hello"));
