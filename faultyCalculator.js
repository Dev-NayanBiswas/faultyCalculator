let hintContainer = document.getElementById("hint");
let randomPercentage = Math.random();
console.log(randomPercentage);

let firstNumber = parseFloat(prompt("Enter your First number"));
let operation = prompt("Enter the Operation");
let secondNumber = parseFloat(prompt("Enter your second number"));

let faultyOperation = {
  "+": "-",
  "*": "+",
  "-": "%",
  "**": "/",
  "/": "**",
  "%": "*",
};
let operators = ["+", "-", "/", "*", "%", "**"];

if (randomPercentage > 0.1) {
  if (
    !isNaN(firstNumber) &&
    !isNaN(secondNumber) &&
    operators.includes(operation)
  ) {
    console.log(firstNumber);
    alert(
      `The result is ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`,
    );
  } else {
    alert("Your Input is not correct.");
    alert(
      `First-Input: ${firstNumber}, Operation: ${operation}, Second-Input: ${secondNumber}`,
    );
    hintContainer.innerHTML = 
            `<small id="hint" style="color: red; font-style: italic; font-weight: lighter; text-align: center;">
        <span style="text-align: center; font-size: large; color: green;">~ Hints ~</span><br>First and Second input should be numbers.<br>
        Operations should be : +, -, *, /, %, ** only.
    </small><br>`;
  }
} else {
  operation = faultyOperation[operation];
  if (
    !isNaN(firstNumber) &&
    !isNaN(secondNumber) &&
    operators.includes(operation)
  ) {
    alert(
      `The result is ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`,
    );
  } else {
    alert("Your Input is not correct.");
    alert(
      `First-Input: ${firstNumber}, Operation: ${operation}, Second-Input: ${secondNumber}`,
    );
    hintContainer.innerHTML = `
            <small id="hint" style="color: red; font-style: italic; font-weight: lighter; text-align: center;">
        <span style="text-align: center; font-size: large; color: green;">~ Hints ~</span><br>First and Second input should be numbers.<br>
        Operations should be : +, -, *, /, %, ** only.
    </small><br>`;
  }
}
