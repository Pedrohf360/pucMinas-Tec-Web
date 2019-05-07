// Javascript document
var x;
var operators = ['+', '-', '/', '*', '%', '!==', '!=', '==', '===', '>', '<', '>=', '<='];

/*
Passo a passo para simular um load:

1 - Esconder;
2 - Clique -> loading -> 
3 - Ir servidor
4 - Tirar Loading
5 - Troca conteúdo
6 - Mostrar div
7 - Na próxima aula usar o  arquivo do professor que está no sga*
*/

window.onload = function () {
    loadOperators();
}

// Aguardando página ser carregada
$(document).ready(function () {

    loadCalcSimulation(false);
});

loadCalcSimulation = function (showLoad) {
    loadImg = document.getElementById('carregar');

    if (showLoad) {
        loadImg.hidden = false;
    } else {
        loadImg.hidden = true;
    }
}

loadOperators = function () {
    var operatorsSlt = document.getElementById('operatorsSlt');
    var option;

    operators.forEach(o => {
        option = document.createElement("option");
        option.text = o;
        option.value = o;

        operatorsSlt.append(option);
    });
}

doCalc = function () {
    loadCalcSimulation(true);

    setTimeout(() => {
        var operator = document.getElementById('operatorsSlt').value;
        var tbxA = document.getElementById('tbxA').value;
        var tbxB = document.getElementById('tbxB').value;

        document.getElementById('resultado').innerHTML = 'Resultado: ' + eval(tbxA + operator + tbxB);
        loadCalcSimulation(false);
    }, 3000);
}