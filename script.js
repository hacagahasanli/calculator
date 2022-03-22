const sin = () => {
    document.calculator.result.value=Math.sin(document.calculator.result.value);
}

const cos = () => {
    document.calculator.result.value=Math.cos(document.calculator.result.value);
}

const tan = () => {
    document.calculator.result.value=Math.tan(document.calculator.result.value);
}

const BACKSPC = () => {
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0, a.length-1)
}

const square = () => {
    document.calculator.result.value = Math.pow(document.calculator.result.value,2);
}

const qubbed = () => {
    document.calculator.result.value = Math.pow(document.calculator.result.value,3);
}

const sqrt2 = () => {
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/2);
}

const sqrt3 = () => {
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/3);
}

const number = (value) => {
    document.calculator.result.value += value;
}

function remv(){
    document.calculator.result.value = " ";
}

const equal = () => {
    document.calculator.result.value = eval(document.calculator.result.value);
}

