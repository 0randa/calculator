const display_num = document.querySelector('.calculator-screen p')
let operator_in_use = false;
let number_array = []
let operator_var = '';

function reset() {
    display_num.textContent = "0"
}

function change_sign() {
    let currNum = display_num.textContent;
    if (currNum[0] === '-') {
        currNum = currNum.slice(1);
    } else {
        currNum = '-' + currNum;
    }

    display_num.textContent = currNum

}

function display_number(num) {
    let currNum;
    if (operator_in_use) {
        currNum = "";
        operator_in_use = false;
    } else {
        currNum = display_num.textContent;
    }


    if (currNum === "0") {
        currNum = num;
    } else {
        currNum += num;
    }

    display_num.textContent = currNum
}

function use_operator(operator) {
    // get currNum
    let currNum = display_num.textContent;
    // convert this into an integer

    const currNumInt = parseInt(currNum);

    number_array.push(currNumInt);

    operator_in_use = true;

    operator_var = operator;
}

function get_result() {
    let currNum = display_num.textContent;
    // convert this into an integer

    const currNumInt = parseInt(currNum);

    number_array.push(currNumInt);

    let result;

    switch(operator_var) {
        case "add":
            result = number_array[0] + number_array[1];
            break;
        case "subtract":
            result = number_array[0] - number_array[1];
            break;
        case "multiply":
            result = number_array[0] * number_array[1];
            break;
        case "divide":
            result = number_array[0] / number_array[1];
            break;
    }

    number_array = [];
    operator_in_use = false;
    display_num.textContent = JSON.stringify(result)
}