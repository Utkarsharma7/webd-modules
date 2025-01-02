const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "." && currentInput.includes(".")) return;
    currentInput += value;
    display.textContent = currentInput;
  });
});

document.querySelectorAll(".operation").forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput === "") return;
    operator = button.getAttribute("data-value");
    previousInput = currentInput;
    currentInput = "";
  });
});

equals.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "") return;

  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current !== 0 ? prev / current : "Error";
      break;
    default:
      return;
  }

  display.textContent = result;
  currentInput = result.toString();
  previousInput = "";
  operator = "";
});

clear.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.textContent = "0";
});
