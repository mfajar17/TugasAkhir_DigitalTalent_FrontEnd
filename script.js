const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);    
    });
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    };
};

const percentages = document.querySelectorAll(".percentage");

percentages.forEach((percentage) => {
    percentage.addEventListener("click", (event) =>{
        if (currentNumber === '0'){
            
        }else{
            currentNumber = currentNumber/100;
            updateScreen(currentNumber);
        };
    });
});

const minuss = document.querySelectorAll(".minus");

minuss.forEach((minus) => {
    minus.addEventListener("click", (event) =>{
        if (currentNumber === '0'){
            
        }else{
            currentNumber = -(currentNumber);
            updateScreen(currentNumber);
        };
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    });
});

const akars = document.querySelectorAll(".akar");

akars.forEach((akar) => {
    akar.addEventListener("click", (event) => {
        if (currentNumber === '0'){
            
        }else{
            currentNumber = Math.sqrt(currentNumber);
            updateScreen(currentNumber);
        };
    });
})

const pangkats = document.querySelectorAll(".pangkat");

pangkats.forEach((pangkat) => {
    pangkat.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
})

const inputOperator = (operator) => {
    if (calculationOperator===''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () =>{
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber/currentNumber;
            break;
        case "pangkat":
            result = Math.pow(prevNumber,currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator ='';
};

const clearBtn = document.querySelector('.all-clear');

const clearAll = () =>{
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});