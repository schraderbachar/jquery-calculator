/*
 * Implement all your JavaScript in this file!
 */
//$(document).ready();

let num1 = ''; let num2 = ''; let operator = ''; let total = '';

$(document).ready(function () {
    $('button').on('click', function (e) {
        console.log('e', e.target.innerHTML);
    });
});
$(document).ready(function () {
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNum(btn);
        } else {
            handleOp(btn);
        }
    });
});
//if num1 is empty its the number- if not the num is num two
function handleNum(num) {

    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }

    displayButton(num);

}
function handleOp(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }


}
function displayButton(btn) {
    $('#display').val(btn);
}

function handleTotal() {
    switch (operator) {
        //short hand for convertin a string into number is +num1 + +num2 

        case '+':
            total = +num1 + +num2;
            displayButton(total);
            updateVariables();
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            updateVariables();
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            updateVariables();
            break;
        case '*':
            total = +num1 * +num2;
            displayButton(total);
            updateVariables();
            break;
    }
    if (operator === 'C') {
        clear();
    }
    console.log(total);

}
function updateVariables() {
    num1 = total;
    num2 = '';
}
function clear() {

    /*on the click of the clear button clear the display */
    displayButton(' ');
    total = 0;
};


