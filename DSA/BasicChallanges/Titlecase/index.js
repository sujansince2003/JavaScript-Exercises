// Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.
str = "sujan is great programmer";
function titleCase(str) {
  const arrWords = str.toLowerCase().split(" ");
  //

  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
  }
  console.log(arrWords.join(" "));
}
titleCase(str);
