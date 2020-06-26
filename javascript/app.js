function getNumber(num) {
    var result = document.getElementById("result");
    if (result.value == "0") {
        result.value = "";
    }
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function oppositeSign() {
    var result = document.getElementById("result");
    result.value = result.value * -1;
}

function reciprocal() {
    var result = document.getElementById("result");
    result.value = 1 / result.value;
}

function square() {
    var result = document.getElementById("result");
    result.value = result.value * result.value;
}

function squareRoot() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}

function backspace() {
    var result = document.getElementById("result");
    result.value = result.value.substr(0, result.value.length - 1);
}