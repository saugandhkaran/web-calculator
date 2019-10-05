let result = 0;
let input = '';
let display = '';
const keypad = [
  {
    label: 'AC',
    value: 'reset'
  },
  {
    label: '+/-',
    value: 'reverse'
  },
  {
    label: '%',
    value: '%'
  },
  {
    label: '&#xF7',
    value: '/'
  },
  {
    label: '7',
    value: '7'
  },
  {
    label: '8',
    value: '8'
  },
  {
    label: '9',
    value: '9'
  },
  {
    label: 'x',
    value: '*'
  },
  {
    label: '4',
    value: '4'
  },
  {
    label: '5',
    value: '5'
  },
  {
    label: '6',
    value: '6'
  },
  {
    label: '-',
    value: '-'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '1',
    value: '1'
  },
  {
    label: '+',
    value: '+'
  },
  {
    label: '.',
    value: '.'
  },
  {
    label: '0',
    value: '0'
  },
  {
    label: '00',
    value: '00'
  },
  {
    label: '=',
    value: '='
  }
];

function createCalculatorButtons() {
  let keypadSection = document.createElement('div');
  keypadSection.id = 'calculator-keys';
  keypad.forEach((element) => {
    let newDiv = document.createElement('div');
    newDiv.className = 'key-item';
    newDiv.innerHTML = element.label;
    newDiv.addEventListener('click', function () {
      nextStep(element);
    })
    keypadSection.appendChild(newDiv);
  });
  document.body.append(keypadSection);
}

createCalculatorButtons();

function nextStep(item) {
  if (item.value === 'reset') {
    result = 0;
    input = 0;
    showValue(result);
    showValue(input);
  }
  else if (item.value === 'reverse') {
    console.log(item.value);
  }
  else if (item.value === '=') {
    result = evaluate(input)
    operator = '';
    showValue(result);
  }
  else if (item.value === '+' || item.value === '-' || item.value === '*' || item.value === '/') {
    result = eval(input);
    input = result;
    showValue(result);
    input = input + item.value;
  }
  else {
    input = input + item.value;
    showValue(input);
  }
}

function evaluate(input) {
  return eval(input);
}

function showValue(value) {
  document.getElementById('result').innerHTML = value;
}
