
var inp = document.getElementById("input")

var disp=""

function getValue(button) {
    var buttonValue = button.innerHTML;
    // if (buttonValue !== ".")
    inp.value += buttonValue;
    eachClear = true;
    operator = true;
  }

  function clearInput() {
    inp.value=""
    eachClear = true;
    operator = true;
  }

  function clearEachInput() {
    if (eachClear === true) {
    var inputValue = inp.value.slice(0,-1);
      inp.value = inputValue; 
      operator = true; } else {
      inp.value
      operator = true;
    }
  }

  function resultValue() {
    if (eachClear === true) {
    inp.value = eval(inp.value);
    eachClear = false
    operator = true;
    }
  }

  function checkOperator(button) {
    if (operator === true) {
    var buttonValue = button.innerHTML; 
    inp.value += buttonValue;
    operator = false; 
    }
     else {

      var inputValue = inp.value.slice(0,-1);
      inp.value = inputValue;
      var buttonValue = button.innerHTML; 
      inp.value += buttonValue;
      operator = false; 

    }

  }


  
