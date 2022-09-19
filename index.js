const multiply = document.querySelector('#multipy');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const result = document.querySelector('p');
const numbers = document.querySelectorAll('div[data-type="number"]');
const operators = document.querySelectorAll('div[data-type="operator"]');
const equals = document.querySelector('div[data-type="equals"]');
const dot = document.querySelector('div[data-type="dot"]');
const clear = document.querySelector('#ac');
const backspace = document.querySelector('#c');
const percent = document.querySelector('div[data-type="percent"]');

result.textContent = '0';

const displayNumber = (e) => {
  if (result.textContent == '0') {
      result.textContent = e.target.id;
    }
  else if (result.textContent.split(' ')[2] == '0') {
    const arr = result.textContent.split('');
    arr.pop();
    result.textContent = arr.join('') + e.target.id;
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
    if (arr[arr.length - 1] == ' ') {
      arr.pop();
      arr.pop();
      arr.pop();
      result.textContent = arr.join('');
    if (arr.length < 1) {
      result.textContent = 0;
    }
    } else if (arr.length == 2 && arr[0] == '-') {
      arr.pop();
      arr.pop();
      result.textContent = arr.join('');
    if (arr.length < 1) {
      result.textContent = 0;
    } 
    } else {
    arr.pop();
    result.textContent = arr.join('');
    if (arr.length < 1) {
      result.textContent = 0;
    }
    }
  }
};

const displayOperator = (e) => {
  currentOperator = result.textContent.split('');
  if (result.textContent.includes('+')) {
    if (currentOperator[currentOperator.length - 2] == '+') {
      currentOperator.pop();
      currentOperator.pop();
      currentOperator.pop();
      result.textContent = currentOperator.join('') + ' ' + e.target.id + ' ';
    } else {
      return;
    }
  } else if (result.textContent.includes('-')) {
    if (currentOperator[currentOperator.length - 2] == '-') {
      currentOperator.pop();
    currentOperator.pop();
    currentOperator.pop();
    result.textContent = currentOperator.join('') + ' ' + e.target.id + ' ';
    } else {
      return;
    }
  } else if (result.textContent.includes('x')) {
    if (currentOperator[currentOperator.length - 2] == 'x') {
      currentOperator.pop();
    currentOperator.pop();
    currentOperator.pop();
    result.textContent = currentOperator.join('') + ' ' + e.target.id + ' ';
    } else {
      return;
    }
  }  else if (result.textContent.includes('÷')) {
    if (currentOperator[currentOperator.length - 2] == '÷') {
      currentOperator.pop();
    currentOperator.pop();
    currentOperator.pop();
    result.textContent = currentOperator.join('') + ' ' + e.target.id + ' ';
    } else {
      return;
    }
  } else {
  result.textContent = result.textContent + ' ' + e.target.id + ' ';
  }
};

const makeOperation = (e) => {
  if (result.textContent == '0') {
    return;
  } else {
    if (result.textContent.includes('+')) {
      const numbers = result.textContent.split(' ');
      result.textContent = parseFloat(numbers[0]) + parseFloat(numbers[2]);
    } else if (result.textContent.includes('-')) {
      const numbers = result.textContent.split(' ');
      result.textContent = parseFloat(numbers[0]) - parseFloat(numbers[2]);
    } else if (result.textContent.includes('x')) {
      const numbers = result.textContent.split(' ');
      result.textContent = parseFloat(numbers[0]) * parseFloat(numbers[2]);
    } else if (result.textContent.includes('÷')) {
      const numbers = result.textContent.split(' ');
      result.textContent = parseFloat(numbers[0]) / parseFloat(numbers[2]);
    }
  }
  if (result.textContent.includes('.')) {
    result.textContent = (Math.round(result.textContent * 100)/100);
  }
};

const displayDot = (e) => {
  if(result.textContent.includes('.')) {
    if (result.textContent.split(' ').length == 3) {
      arr = result.textContent.split(' ');
      if (arr[2].includes('.')) {
        return;
      } else {
        result.textContent = result.textContent + e.target.id;
      }
    }
    return;
  } else {
    result.textContent = result.textContent + e.target.id;
  }
};

const displayPercent = (e) => {
  if (result.textContent == '0') {
    return;
  } else if (result.textContent.includes(' ')) {
    const arr = result.textContent.split(' ');
    if (result.textContent.includes('x')) {
      const newPercent = arr[2] * 0.01;
      arr.pop();
      arr.push(newPercent);
      result.textContent = arr.join(' ');
    } else if (result.textContent.includes('÷')) {
      const newPercent = arr[2] * 0.01;
      arr.pop();
      arr.push(newPercent);
      result.textContent = arr.join(' ');
    } else {
      const newPercent = arr[0] * arr[2] * 0.01;
      arr.pop();
      arr.push(newPercent);
      result.textContent = arr.join(' ');
    }
  } else {
    result.textContent = result.textContent * 0.01;
  }
};

numbers.forEach(button => button.addEventListener('click', displayNumber));
operators.forEach(operator => operator.addEventListener('click', displayOperator));
clear.addEventListener('click', clearCalc);
backspace.addEventListener('click', backspaceCalc);
equals.addEventListener('click', makeOperation);
dot.addEventListener('click', displayDot);
percent.addEventListener('click', displayPercent);
