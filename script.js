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

let calc = {
  leftOperand: '0',
  operator: '',
  operatorIndex: 0,
  rightOperand: '',
};

const display = document.querySelector(".text");
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

const numpad = document.querySelectorAll(".numpad");
numpad.forEach(item => {
  item.addEventListener('click', e => {
    const num = item.textContent;
    if (display.textContent === '0') {
      display.textContent = num;
    } else if (display.textContent.length < 9) {
      display.textContent = display.textContent + num;
    }

    if (calc.operator === '') {
      calc.leftOperand = display.textContent;
    } else {
      calc.rightOperand = display.textContent.substring(calc.operatorIndex);
    }
  })
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', e => {
  // Still on left operand
  if (calc.operator === '') {
    if (!calc.leftOperand.includes('.')) {
      display.textContent = display.textContent + ".";
      calc.leftOperand = display.textContent;
    }
  } else {
    if (!calc.rightOperand.includes('.')) {
      display.textContent = display.textContent + ".";
      calc.rightOperand = display.textContent;
    }
  }
});

const functions = document.querySelectorAll(".functions");
functions.forEach(item => {
  item.addEventListener('click', e => {
  // No operator has been used yet
    if (calc.operator === '') {
      calc.operator = item.textContent;
      calc.operatorIndex = display.textContent.length;
      display.textContent = display.textContent + item.textContent;
    } else if (!calc.rightOperand === '') {
    // calculate the current operands and operator
    }
  })
});