const multiply = document.querySelector('#multipy');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const result = document.querySelector('p');
const buttons = document.querySelectorAll('div[data-type="number"]');
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
}
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
}


buttons.forEach(button => button.addEventListener('click', displayNumber));
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