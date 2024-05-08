// plaindrome
let str = "sujan";
let str1 = "madam";

function chkpalindrome(str) {
  let formattedstring = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  formattedstring.split("").reverse().join("");
  return formattedstring === str;
}

console.log(chkpalindrome(str), chkpalindrome(str1));
