//Repeat a given string str (first argument) for num times (second argument).
//Return an empty string if num is not a positive number.
//Return an empty string if num is not a positive number.
//repeatStringNumTimes("*", 3) should return the string ***.
//lets solve using recursion

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  {
    return repeatStringNumTimes(str, num - 1) + str;
  }
}

console.log(repeatStringNumTimes("abc", 3));
