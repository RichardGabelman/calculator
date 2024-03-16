const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

let leftNumber;
let operator;
let rightNumber;

const operate = function(leftNum, operator, rightNum) {
  switch(operator) {
    case "+":
      return add(leftNum, rightNum);
      break;
    case "-":
      return subtract(leftNum, rightNum);
      break;
    case "X":
      return multiply(leftNum, rightNum);
      break;
    case "÷":
      return divide(leftNum, rightNum);
      break;
  }
};
