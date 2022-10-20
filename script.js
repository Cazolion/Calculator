const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const allclear = document.getElementById("allclear");
const clearentry = document.getElementById("clearentry");

function show() {
    let turtle = document.createElement("img")
    display.appendChild(turtle);
    turtle.setAttribute("width", "100")
    turtle.setAttribute("src", './images/cooldude.png')
    turtle.setAttribute("id", "turtle");
    turtle.style.display = "inline-block";
    setTimeout(
        function hide() {
        turtle.style.display = 'none';
    }, 10000)
};

function naughty() {
    let naughty = document.createElement("img")
    display.textContent = "oh heck!";
    display.appendChild(naughty);
    naughty.setAttribute("width", "100")
    naughty.setAttribute("src", './images/two.png')
    naughty.style.display = "inline-block";
    setTimeout(
        function hide() {
        naughty.style.display = 'none';
        display.textContent = "0";
    }, 5000)
};

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
    a = Number(a);
    b = Number (b);
    if (operator === "+") {
        return +add(a, b).toFixed(8)
    }
    else if (operator === "-") {
        return +subtract(a, b).toFixed(8)
    }
    else if (operator === "*") {
        return +multiply(a, b).toFixed(8)
    }
    else if (operator === "/") {
        return +divide(a, b).toFixed(8)
    }
    else {
        return "ERROR"
    }
};

const display = document.querySelector('.display');
const numerical = document.querySelectorAll('.numerical');
const operation = document.querySelectorAll('.operation');

function getNumber(input) {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/"|| display.textContent === "ERROR" || display.textContent === "NaN"){
        display.textContent = input;
    }
    else {
        display.textContent += input;
    }
};

function getOperator(inputOperator) {
    if(display.textContent === "ERROR") {
        a = 0;
    }
    else {
        a = parseFloat(display.textContent);
    }
    operator = inputOperator;
    display.textContent = operator;
    document.getElementById("dot").disabled = false;
};

numerical.forEach(numero => {
    numero.addEventListener('click', () => {
        getNumber(numero.textContent);
    })
});

operation.forEach(sign => {
    sign.addEventListener('click', () => {
        getOperator(sign.textContent);
    })
});

dot.addEventListener('click', () => {
    display.textContent += ".";
    document.getElementById("dot").disabled = true;
});

equal.addEventListener('click', () => {
    if(display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" ) {
        display.textContent = "0";
    }
    else if(operator === "/" && display.textContent === "0") {
        naughty();
    }
    else {
        b = parseFloat(display.textContent)
        display.textContent = operate(a, operator, b);
        document.getElementById("dot").disabled = false;
    }
});

allclear.addEventListener('click', () => {
    operator = "";
    display.textContent = "0";
    document.getElementById("dot").disabled = false;
});

clearentry.addEventListener('click', () => {
    display.textContent = "0";
    document.getElementById("dot").disabled = false;
});

let a = 0;
let b = 0;
let operator = "+";


// Bugs to fix
// NaN 
// Keyboard feature
// Chaining operators doesn't work
