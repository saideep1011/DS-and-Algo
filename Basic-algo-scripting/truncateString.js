//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....

//apporach
//if str.length>n return str[n]+...
//get str[n] which is first n elements of a string using substring method

// const a = "saideep";
// let b = a.substring(0, 6) + "...";
// console.log(b);

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  } else if (str.length <= num) {
    return str;
  }
}

// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
