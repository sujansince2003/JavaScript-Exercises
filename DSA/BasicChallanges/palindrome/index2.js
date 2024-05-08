function isPalindrome(str) {
  let formattedStr = removeNonalphanumeric(str.toLowerCase());
  const reveredstring = reverseString(formattedStr);
  return reveredstring === str;
}

function removeNonalphanumeric(str) {
  let formattedstr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedstr += char;
    }
  }
  return formattedstr;
}

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || //  from standard char set for numbers
    (code >= 97 && code <= 122) //standard char set for lowercase letters
  );
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(isPalindrome("madamss"));
