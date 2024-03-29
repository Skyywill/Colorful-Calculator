
// passing the object of the number as input, all the calculation from the user input

function getNumber(num) {
  const input_var = document.getElementById('input');
  trigger.call();
  switch(num) {

    case 1:
      input_var.value += '1';
      break;

    case 2:
      input_var.value += '2';
      break;

    case 3:
      input_var.value += '3';
      break;

    case 4:
      input_var.value += '4';
      break;

    case 5:
      input_var.value += '5';
      break;

    case 6:
      input_var.value += '6';
      break;

    case 7:
      input_var.value += '7';
      break;

    case 8:
      input_var.value += '8';
      break;

    case 9:
      input_var.value += '9';
      break;

    case 0:
      input_var.value += '0';
      break;

    case '.':
      input_var.value += '.';
      break;

  }
}

//clear screen function

function clearScreen() {
  document.getElementById('input').value = "";
}

// getting the operand as a function

function getOperand(operand) {
  const input_var = document.getElementById('input');
  trigger.call();
  switch(operand) {

    case '+':
      input_var.value += '+';
      break;

    case '-':
      input_var.value += '-';
      break;

    case 'x':
      input_var.value += '*';
      break;

    case '/':
      input_var.value += '/';
      break;

    case '%':
      input_var.value += '%';
      break;

  }

}

function compute() {

  const input_var = document.getElementById('input');
  let ans = eval(input_var.value);
  document.getElementById('input').value = ans.toFixed(2);

}

function trigger() {

  let input_var = document.getElementById('input');
  if (input_var.value.length === 15) {
    document.getElementById("calculationContainer").classList.add('apply-shake');
    setTimeout( function() {alert('Sorry, No more space for new input, ask William to make changes'); } , 500)

  } else {

    document.getElementById("calculationContainer").classList.remove('apply-shake');
  }
}

function backgroundColor(element, color) {
  document.getElementById("calculationContainer").style.background = color;
}
