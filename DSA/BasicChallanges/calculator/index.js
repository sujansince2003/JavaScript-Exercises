// calculator

function calc(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  else if (operator === "-") return num1 - num2;
  else if (operator === "*") return num1 * num2;
  else if (operator === "/") return num1 / num2;
  else return "invalid operator";
}

console.log(calc(3, 4, "+"));
console.log(calc(3, 4, "-"));
console.log(calc(3, 4, "*"));
console.log(calc(3, 4, "/"));
