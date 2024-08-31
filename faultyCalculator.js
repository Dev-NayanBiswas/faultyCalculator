let randomPercentage = Math.random();
console.log(randomPercentage);
let firstNumber = prompt("Enter your First number");
let operation = prompt("Enter the Operation");
let secondNumber = prompt("Enter your second number");
let faultyOperation = {
    "+" : "-",
    "*" : "+",
    "-" : "%",
    "**" : "/",
    "/": "**",
    "%":"*"
}
let operators = ["+","-","/","*","%","**"];


if(randomPercentage > 0.1){
    if(!isNaN(firstNumber) && !isNaN(secondNumber) && operators.includes(operation)){
        console.log(firstNumber);
        alert(`the result is ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`)
    }else{
        alert("Your Input is not a Correct")
        alert(`First-Input: ${firstNumber}, Second-Input: ${operation}, Third-Input: ${secondNumber}, (number-operation-number) try this format`)
    }
}
else{
    operation = faultyOperation[operation];
    if(!isNaN(firstNumber) && !isNaN(secondNumber)&& operators.includes(operation)){
        alert(`the result is ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`)
    }else{
        alert("Your Input is not a Correct")
        alert(`First-Input: ${firstNumber}, Second-Input: ${operation}, Third-Input: ${secondNumber}, (number-operation-number) try this format`)
    }
}

