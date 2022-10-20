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
    if (display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/"|| display.textContent === "ERROR" || display.textContent === "NaN" || display.textContent === "0"){
        display.textContent = input;
    }
    else {
        display.textContent += input;
    }
};

function getOperator(inputOperator) {
    document.getElementById("dot").disabled = false;
    if (display.textContent === "ERROR") {
        a = 0;
    }
    else if (operator === "" || result === true) {
        operator = inputOperator;
        a = parseFloat(display.textContent);
        display.textContent = operator;
        result = false;        
    }
    else {
        b = parseFloat(display.textContent);
        a = operate(a, operator, b);
        operator = inputOperator;
        display.textContent = operator;
    }
};

equal.addEventListener('click', () => {
    if(display.textContent === "+" || display.textContent === "-" || display.textContent === "*" || display.textContent === "/" ) {
        display.textContent = "0";
    }
    else if(operator === "/" && display.textContent === "0") {
        naughty();
        operator = "";
    }
    else {
        b = parseFloat(display.textContent)
        a = operate(a, operator, b);
        display.textContent = a;
        document.getElementById("dot").disabled = false;
        result = true;
    }
});

numerical.forEach(numero => {
    numero.addEventListener('click', () => {
        getNumber(numero.textContent);
        enableOperator();
    })
});


operation.forEach(sign => {
    sign.addEventListener('click', () => {
        result = true;
        getOperator(sign.textContent);
        disableOperator();
    })
});

dot.addEventListener('click', () => {
    display.textContent += ".";
    document.getElementById("dot").disabled = true;
});


allclear.addEventListener('click', () => {
    a = 0;
    b = 0;
    operator = "";
    result = false;
    display.textContent = "0";
    enableOperator();
    document.getElementById("dot").disabled = false;
});

clearentry.addEventListener('click', () => {
    display.textContent = "0";
    enableOperator();
    document.getElementById("dot").disabled = false;
});

let a = 0;
let b = 0;
let operator = "";
let typoperator = false;
let result = false;

function disableOperator() {
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
}

function enableOperator() {
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("multiply").disabled = false;
    document.getElementById("divide").disabled = false;
}

// Bugs to fix
// Keyboard feature
