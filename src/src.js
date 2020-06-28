let result = [];
let uniqResult = [];

let disabledButton = document.getElementById('disButton');
disabledButton.setAttribute('disabled', 'disabled');

document.getElementById('mainDiv').oninput = function () {
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    let leng = document.querySelector('#length').value;

    if (min == '' || max == '' || leng == '') {
        // если хоть одно true, то идет следующее ->
        let message = ('Заполните все поля');
        document.querySelector('#message').innerHTML = message;
        disabledButton.setAttribute('disabled', 'disabled');
        document.getElementById('disButton').classList.add('red');
    } else if ( ((max - min) + 1) < leng || leng <= 0) {
        // если хоть одно true, то идет следующее ->
        let message = ('Неверные значения');
        document.querySelector('#message').innerHTML = message;
        disabledButton.setAttribute('disabled', 'disabled');
        document.getElementById('disButton').classList.add('red');
    } else {
        //если все false, то идет следующее ->
        document.querySelector('#message').innerHTML = "";
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
