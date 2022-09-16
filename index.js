const multiply = document.querySelector('#multipy');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const result = document.querySelector('p');
const numbers = document.querySelectorAll('div[data-type="number"]');
const operators = document.querySelectorAll('div[data-type="operator"]');
const clear = document.querySelector('#ac');
const backspace = document.querySelector('#c');

result.textContent = '0';

const displayNumber = (e) => {
  if (result.textContent == '0') {
    if (e.target.id === '.') {
      result.textContent = 0 + e.target.id;
    } else {
      result.textContent = e.target.id;
    }
  } else {
    result.textContent = result.textContent + e.target.id;
  }
};
const clearCalc = (e) => {
  result.textContent = 0;
};
const backspaceCalc = (e) => {
  if (result.textContent == '0') {
    return;
  } else {
    const arr = result.textContent.split('');
    arr.pop();
    result.textContent = arr.join('');
    if (arr.length < 1) {
      result.textContent = 0;
    }
  }
};
const displayOperator = (e) => {
  const operators = ['+', 'x', '-', '÷'];
  const regex = /x|÷/g;
  for (let i = 0; i < operators.length; i++) {
    if (result.textContent.split('').find(num => num == operators[i])) {
      const arr = result.textContent.split('');
      arr.pop();
      result.textContent = arr.join('');
    }
  }
  if (result.textContent.split('')(regex) == false && result.textContent.match(regex) == true) {
    return;
  }
  result.textContent = result.textContent + e.target.id;
};

numbers.forEach(button => button.addEventListener('click', displayNumber));
operators.forEach(operator => operator.addEventListener('click', displayOperator));
clear.addEventListener('click', clearCalc);
backspace.addEventListener('click', backspaceCalc);



const operate = (operator, num1, num2) => {
  if(operator === add) {
    return num1 + num2;
  } else if (operator === subtract) {
    return num1 - num2;
  } else if (operator === divide) {
    return num1 / num2;
  } else if (operator === multiply) {
    return num1 * num2;
  }
};