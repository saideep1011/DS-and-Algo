//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.

//my approach
//use javascript substring method
// we can use like  If you omit the endIndex, the substring() returns the substring to the end of the string.
// if target length is 7 get last 7 char from substring ND compare char
//if true return true
// let str = "saideep";
// let sub = str.substring(str.length - 4);
// console.log(sub);
function confirmEnding(str, target) {
  if (str.substring(str.length - target.length) === target) {
    return true;
  }
  return false;
}

console.log(
  confirmEnding(
    "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
    "mountain"
  )
);
