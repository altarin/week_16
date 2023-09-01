let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
}

function checkAll(){
errors = [];
let inputs = document.querySelectorAll('input');
    for (let input of inputs){
        checkValidity(input);
    }
    document.getElementById('errorMessage').innerHTML = errors.join('. <br>');
}
