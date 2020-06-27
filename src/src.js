// Напиши генератор случайных числел, который принимает
// мин значение, макс значение, количество рандомных чисел
// числа генерируются целыми в промежутке от мин до макс
// возвращаемый массив числе иметь длину количество рандомных чисел, числа в массиве не должны повторяться
// нельзя использовать перебирающие функции — for, map и тд 
// используй рекурсию


let result = [];
let uniqResult = [];

let disabledButton = document.getElementById('disButton');
disabledButton.setAttribute('disabled', 'disabled');

document.getElementById('mainDiv').oninput = function () {
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    let leng = document.querySelector('#length').value;

    if (min == '' || max == '' || leng == '' || ((max - min) + 1) < leng || leng <= 0) {
        // если хоть одно true, то идет следующее ->
        console.log('допишите данные или исправьте значения');
        disabledButton.setAttribute('disabled', 'disabled');
        document.getElementById('disButton').classList.add('red');
    } else {
        //если все false, то идет следующее ->
        console.log('все ок');
        disabledButton.removeAttribute('disabled');
        document.getElementById('disButton').classList.remove('red');
    }
};


document.querySelector('button').onclick = function () {
    let min = parseInt(document.querySelector('#min').value);
    let max = parseInt(document.querySelector('#max').value);
    let leng = parseInt(document.querySelector('#length').value);
    
    result = [];
    uniqResult = []; 
    randomInteger(min, max, leng);  
};

function randomInteger(min, max, leng) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    result.push(Math.round(rand));
    uniqResult = [...new Set(result)];

    if (uniqResult.length === leng) {
        document.querySelector('#out').innerHTML = uniqResult;
        return;
    };
    randomInteger(min, max, leng);
};