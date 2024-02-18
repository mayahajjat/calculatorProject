function set(op) {

    document.getElementById("display").value += op;

}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));

}

function acosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));

}
{
    // Function to perform inverse operation
function inverseOperation(operation) {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);

    // Perform inverse operation based on the provided operation
    switch(operation) {
        case 'sin':
            display.value = Math.asin(currentValue);
            break;
        case 'cos':
            display.value = Math.acos(currentValue);
            break;
        case 'tan':
            display.value = Math.atan(currentValue);
            break;
        default:
            // Handle other operations if needed
            break;
    }
}

}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}

function CE() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
    // }
    //alert(length);
}
// Function to calculate exponentiation
function Exp() {
    var display = document.getElementById("display");
    var currentValue = parseFloat(display.value);
    var result = Math.exp(currentValue);
    display.value = result;
}

// Function to calculate x raised to the power of y

var currentOperation = ''; // Global variable to store the current operation
var firstOperand = ''; // Global variable to store the first operand
var secondOperand = ''; // Global variable to store the second operand

// Function to store the operation
function storeOperation(operation) {
    currentOperation = operation;
    firstOperand = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = '';
}

// Function to calculate result based on the stored operation
function answer() {
    var result;
    secondOperand = parseFloat(document.getElementById('display').value);

    switch (currentOperation) {
        case '^':
            result = Math.pow(firstOperand, secondOperand);
            break;
        // Add more cases for other operations if needed

        default:
            return;
    }

    document.getElementById('display').value = result;
}




