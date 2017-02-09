var firstNumber = "0",
    secondNumber = "0",
    operator = undefined,
    flag = true;

$(function () {
    $(".digit").click(function () {
      var currentShow = $(".input-field").val();

        if ((currentShow == "0" && $(this).text()!=".") || !flag) {
            currentShow = $(this).text();
            if (currentShow == ".") {
                currentShow = '0.';
            }
            change_flag(true);
        }

        else {
            currentShow+=$(this).text();
        }

        var isFloat = currentShow.split('.').length;

        if (isFloat == 3) {
          currentShow = parseFloat(currentShow);
        }
        else if (isFloat == 1){
          currentShow = parseInt(currentShow);
        }

        $(".input-field").val(currentShow);
    });

    $('.operator').click(function () {
        var currentOperator = $(this).text();
        switch (currentOperator) {
            case 'AC': clear_all();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                set_operation(currentOperator);
                change_flag(false);
                break;
            case '=': equal_operator();
                break;
        }
    })
});

function change_flag (val) {
    flag = val;
    return flag;
}

function clear_all () {
    $(".input-field").val("0");
    operator = undefined;
    firstNumber = '0';
    secondNumber = '0';
    change_flag(true);
}

function set_operation (operationValue) {
    if (operator !== undefined) {
        equal_operator();
    }
    operator = operationValue;
    firstNumber = $(".input-field").val();
}

function equal_operator () {
    secondNumber = $(".input-field").val();

    switch (operator) {
        case '+': $(".input-field").val(Number(firstNumber) + Number(secondNumber));
            break;
        case '-': $(".input-field").val(Number(firstNumber) - Number(secondNumber));
            break;
        case '*': $(".input-field").val(Number(firstNumber) * Number(secondNumber));
            break;
        case '/': $(".input-field").val(Number(firstNumber) / Number(secondNumber));
            break;
    }

    operator = undefined;
    firstNumber = '0';
    secondNumber = '0';
    change_flag(false);
}