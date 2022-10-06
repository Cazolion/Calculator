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
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/"|| display.textContent === "ERROR"){
        display.textContent = "1"
    }
    else {
        display.textContent += "1";
    }
})

const two = document.getElementById("two");
two.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "2"
    }
    else {
        display.textContent += "2";
    }
})

const three = document.getElementById("three");
three.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "3"
    }
    else {
        display.textContent += "3";
    }
})

const four = document.getElementById("four");
four.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "4"
    }
    else {
        display.textContent += "4";
    }
})

const five = document.getElementById("five");
five.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "5"
    }
    else {
        display.textContent += "5";
    }
})

const six = document.getElementById("six");
six.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "6"
    }
    else {
        display.textContent += "6";
    }
})

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "7"
    }
    else {
        display.textContent += "7";
    }
})

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "8"
    }
    else {
        display.textContent += "8";
    }
})

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "9"
    }
    else {
        display.textContent += "9";
    }
})

const zero = document.getElementById("zero");
zero.addEventListener('click', () => {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" || display.textContent === "ERROR"){
        display.textContent = "0"
    }
    else {
        display.textContent += "0";
    }
})

const dot = document.getElementById("dot");
dot.addEventListener('click', () => {
    display.textContent += ".";
    document.getElementById("dot").disabled = true;
})

const plus = document.getElementById("plus");
plus.addEventListener('click', () => {
    a = parseFloat(display.textContent);
    operator = "+";
    display.textContent = "+";
    document.getElementById("dot").disabled = false;
})

const minus = document.getElementById("minus");
minus.addEventListener('click', () => {
    a = parseFloat(display.textContent);
    operator = "-";
    display.textContent = "-";
    document.getElementById("dot").disabled = false;
})

const multiplying = document.getElementById("multiply");
multiplying.addEventListener('click', () => {
    a = parseFloat(display.textContent);
    operator = "*";
    display.textContent = "*";
    document.getElementById("dot").disabled = false;
})

const dividing = document.getElementById("divide");
dividing.addEventListener('click', () => {
    a = parseFloat(display.textContent);
    operator = "/";
    display.textContent = "/";
    document.getElementById("dot").disabled = false;
})

const equal = document.getElementById("equal");
equal.addEventListener('click', () => {
    b = parseFloat(display.textContent)
    display.textContent = operate(a, operator, b);
    document.getElementById("dot").disabled = false;
})

const allclear = document.getElementById("allclear");
allclear.addEventListener('click', () => {
    a = 0;
    b = 0;
    operator = "";
    display.textContent = "";
    document.getElementById("dot").disabled = false;
})

const clearentry = document.getElementById("clearentry");
clearentry.addEventListener('click', () => {
    display.textContent = "";
    document.getElementById("dot").disabled = false;
})

let a = 0;
let b = 0;
let operator = "";


// Bugs to fix
// Clicking an operator first breaks calculator
// NaN 
// Keyboard feature
// Chaining operators doesn't work

function doAnimation() {
    display.className = "turtle";
}

