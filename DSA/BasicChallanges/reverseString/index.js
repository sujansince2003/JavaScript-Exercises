// reverse a string
const str = "hello sujan";

function revString(str) {
  return str.split("").reverse().join("");
  //   split string into array of characters.we dont have any inbuilt method to direct reverse the string but we have .reverse() to reverse the array so we convert string to array and reverse it then join array to form a new reversed string
}

let reversedstring = revString(str);
console.log(reversedstring);
