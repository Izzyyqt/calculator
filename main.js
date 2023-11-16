let currentInput = "";
let currentOperator = "";

function appendNum(num){
    currentInput += num;
    document.querySelector(".cal-display").value = currentInput;
}
function clearInput() {
    currentInput = '';
    currentOperator= '';
    document.querySelector(".cal-display").value = ' ';
}
function delInput() {
    currentInput = currentInput.slice(0, -1);
    document.querySelector(".cal-display").value = currentInput;
}
function add() {
    currentOperator = "+";
    currentInput += currentOperator;
    document.querySelector(".cal-display").value = currentInput;
}
function minus() {
    currentOperator = "-";
    currentInput += currentOperator;
    document.querySelector(".cal-display").value = currentInput;
}
function multiply() {
    currentOperator = "*";
    currentInput += currentOperator;
    document.querySelector(".cal-display").value = currentInput;
}
function divide() {
    currentOperator = "/";
    currentInput += currentOperator;
    document.querySelector(".cal-display").value = currentInput;
}
function dot() {
    currentOperator = ".";
    currentInput += currentOperator;
    document.querySelector(".cal-display").value = currentInput;
}
function calculate() {
    const result = eval(currentInput);
    console.log(result);
    document.querySelector(".cal-display").value = result;
    currentInput.toString();
    currentOperator = '';
}