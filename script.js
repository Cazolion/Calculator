const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const allclear = document.getElementById("allclear");
const clearentry = document.getElementById("clearentry");

function show() {
    let turtle = document.createElement("img")
    display.appendChild(turtle);
    turtle.setAttribute("width", "100")
    turtle.setAttribute("src", './images/enguarde.png')
    turtle.setAttribute("id", "turtle");
    turtle.style.display = "inline-block";
    setTimeout(
        function hide() {
        turtle.style.display = 'none'
    }, 5000)
}

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
const numerical = document.querySelectorAll('.numerical');
const operation = document.querySelectorAll('.operation');

function getNumber(input) {
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/"|| display.textContent === "ERROR"){
        display.textContent = input;
    }
    else {
        display.textContent += input;
    }
}

function getOperator(inputOperator) {
    a = parseFloat(display.textContent);
    operator = inputOperator;
    display.textContent = operator;
    document.getElementById("dot").disabled = false;
}

numerical.forEach(numero => {
    numero.addEventListener('click', () => {
        getNumber(numero.textContent)
    })
})

operation.forEach(sign => {
    sign.addEventListener('click', () => {
        getOperator(sign.textContent)
    })
})

dot.addEventListener('click', () => {
    display.textContent += ".";
    document.getElementById("dot").disabled = true;
})

equal.addEventListener('click', () => {
    b = parseFloat(display.textContent)
    display.textContent = operate(a, operator, b);
    document.getElementById("dot").disabled = false;
})

allclear.addEventListener('click', () => {
    operator = "";
    display.textContent = "";
    document.getElementById("dot").disabled = false;
})

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
// No rounding up 


