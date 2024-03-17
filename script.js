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
  if (b == 0) {
    return "Idiot!";
  }
  return a / b;
};


let calc = {
  leftOperand: '0',
  operator: '',
  rightOperand: '',
  operate() {
    let result = operate(+this.leftOperand, this.operator, +this.rightOperand);
    if (result.length > 9) {
      this.leftOperand = result.substring(0, 10);
      window.alert("Result has been truncated!")
    } else {
      this.leftOperand = result;
    }
    this.operator = '';
    this.rightOperand = '';
  }
};

const display = document.querySelector(".text");

const updateDisplay = function() {
  display.textContent = calc.leftOperand + calc.operator + calc.rightOperand;
};

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
      return divide(leftNum, rightNum).toFixed(3);
      break;
  }
};

const numpad = document.querySelectorAll(".numpad");
numpad.forEach(item => {
  item.addEventListener('click', e => {
    const num = item.textContent;
    if (display.textContent.length > 9) {
      return;
    }
    // leftOperand case
    if (calc.operator === '') {
      // Replacing default value case
      if (calc.leftOperand === '0') {
        calc.leftOperand = num
      // Normal left operand case
      } else {
        calc.leftOperand = calc.leftOperand + num;
      }
      // Normal right operand case
    } else {
      calc.rightOperand = calc.rightOperand + num;
    }
    updateDisplay();
  })
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', e => {
  // Still on left operand
  if (calc.operator === '') {
    if (!calc.leftOperand.includes('.')) {
      calc.leftOperand = calc.leftOperand + ".";
    }
  } else {
    if (!calc.rightOperand.includes('.')) {
      calc.rightOperand = calc.rightOperand + ".";
    }
  }
  updateDisplay();
});

const functions = document.querySelectorAll(".functions");
functions.forEach(item => {
  item.addEventListener('click', e => {
    // Already used an operator case
    if (calc.rightOperand != '') {
      calc.operate();
      updateDisplay();
    }
  // No operator
    if (calc.operator === '') {
      calc.operator = item.textContent;
    } 
    updateDisplay();
  })
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', e => {
  calc.leftOperand = '0';
  calc.operator = '';
  calc.rightOperand = '';
  updateDisplay();
});

const del = document.querySelector("#delete");
del.addEventListener('click', e => {
  if (calc.rightOperand != '') {
    calc.rightOperand = calc.rightOperand.substring(0, calc.rightOperand.length - 1);
  } else if (calc.operator != '') {
    calc.operator = '';
  } else if (calc.leftOperand.length > 1) {
    calc.leftOperand = calc.leftOperand.substring(0, calc.leftOperand.length - 1);
  } else {
    calc.leftOperand = '0';
  }
  updateDisplay();
});

const eq = document.querySelector("#enter");
eq.addEventListener('click', e => {
  if (calc.rightOperand != '') {
    calc.operate();
    updateDisplay();
  }
})