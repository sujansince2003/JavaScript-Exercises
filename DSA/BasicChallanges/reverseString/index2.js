// reverse the string

let str = "hello sujan";
let reversedStr = "";

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("madamss"));
