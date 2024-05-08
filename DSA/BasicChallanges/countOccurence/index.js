function chkOccurence(str, letter) {
  let length = str.length;
  let occurence = 0;

  for (let i = 0; i < length; i++) {
    if (str[i] === letter) occurence++;
  }
  console.log(occurence);
}

chkOccurence("hello", "l"); //2
chkOccurence("HelLo", "l"); //1
chkOccurence("heLLo", "l"); //0
