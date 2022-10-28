//Constantes
const numberButton = document.getElementsByName('data-number');
const opeButton = document.getElementsByName('data-op');
const igualButton = document.getElementsByName('data-igual')[0];
const deleteButton = document.getElementsByName('data-delete')[0];

let result = document.getElementById('result');

let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

numberButton.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

opeButton.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperacion(button.innerText);
    })
});

igualButton.addEventListener('click', function(){
    calcular();
    updateDisplay();
})

deleteButton.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function selectOperacion(op){
    if (operacionActual === '') return;
    if (operacionAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;                
    }

    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

function addNumber(num){
    operacionActual = operacionActual.toString() + num.toString();
    updateDisplay();
}

function updateDisplay(){
    result.value = operacionActual;
}

function clear(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}