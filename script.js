function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b)
    }
    else if (operator === "-") {
        return subtract(a, b)
    }
    else if (operator === "*") {
        return multiply(a, b)
    }
    else if (operator === "/") {
        return divide(a, b)
    }
    else {
        return "ERROR"
    }
};

const display = document.querySelector('.display');


const one = document.getElementById("one");
one.addEventListener('click', () => {
    display.textContent += "1";
})

const two = document.getElementById("two");
two.addEventListener('click', () => {
    display.textContent += "2";
})

const three = document.getElementById("three");
three.addEventListener('click', () => {
    display.textContent += "3";
})

const four = document.getElementById("four");
four.addEventListener('click', () => {
    display.textContent += "4";
})

const five = document.getElementById("five");
five.addEventListener('click', () => {
    display.textContent += "5";
})

const six = document.getElementById("six");
six.addEventListener('click', () => {
    display.textContent += "6";
})

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
    display.textContent += "7";
})

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
    display.textContent += "8";
})

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
    display.textContent += "9";
})

const zero = document.getElementById("zero");
zero.addEventListener('click', () => {
    display.textContent += "0";
})

// DECIMAL DOT NEEDS TO ONLY BE ALLOWED ONCE BETWEEN OPERATORS
// const dot = document.getElementById("dot");
// dot.addEventListener('click', () => {
//     display.textContent += ".";
// })

const plus = document.getElementById("plus");
plus.addEventListener('click', () => {
    display.textContent += "+";
})

const minus = document.getElementById("minus");
minus.addEventListener('click', () => {
    display.textContent += "-";
})

const multiplying = document.getElementById("multiply");
multiplying.addEventListener('click', () => {
    display.textContent += "*";
})

const dividing = document.getElementById("divide");
dividing.addEventListener('click', () => {
    display.textContent += "/";
})

const clear = document.getElementById("clear");
clear.addEventListener('click', () => {
    display.textContent = "";
})
