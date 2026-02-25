const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    if (number === '.' && resultDisplay.value.includes('.')) {
        return;
    }
    resultDisplay.value += number;
}

function appendOperator(operator) {
    const value = resultDisplay.value;
    if (value && !isNaN(value[value.length - 1])) {
        resultDisplay.value += operator;
    }
}

function clearDisplay() {
    resultDisplay.value = '';
}

function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = resultDisplay.value;
        if (expression) {
            const result = Function('"use strict"; return (' + expression + ')')();
            resultDisplay.value = result;
        }
    } catch (error) {
        resultDisplay.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}