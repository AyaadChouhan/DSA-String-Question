// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

function nameString(str) {
  const word = "edabit";
  //   return str.concat(word);
  return str + word;
}
console.log(nameString("javaScript"));
console.log(nameString("Mubashir"));
