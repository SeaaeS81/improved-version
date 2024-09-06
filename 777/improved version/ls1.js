

// var input_test = document.getElementById('input_test');  // поле
//         var section1 = document.getElementById('section1'); // секция 1
//         var section2 = document.getElementById('section2'); // секция 2
//         var section3 = document.getElementById('section3'); // секция 3

//         var s_letters = "abcdefghijklmnopqrstuvwxyz";
//         var b_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         var digits = "0123456789";
//         var specials = "!@#$%^&*()_+";

//         input_test.addEventListener('keyup', function(evt) {
//             var input_test_val = input_test.value; // значение из поля

//             var is_s = false; 
//             var is_b = false;
//             var is_d = false;
//             var is_sp = false;

//             for (var i = 0; i < input_test_val.length; i++) {
//                 if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
//                     is_s = true;
//                 }
//                 else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
//                     is_b = true;
//                 }
//                 else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
//                     is_d = true;
//                 }
//                 else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
//                     is_sp = true;
//                 }
//             }

//             var rating = 0; // на сколько сложный пароль

//             if (is_s) rating++;
//             if (is_b) rating++;
//             if (is_d) rating++;
//             if (is_sp) rating++;

//             if (input_test_val.length === 0) {
//                 section1.style.backgroundColor = 'grey';
//                 section2.style.backgroundColor = 'grey';
//                 section3.style.backgroundColor = 'grey';
//             }
//             else if (input_test_val.length < 8) {
//                 section1.style.backgroundColor = 'red';
//                 section2.style.backgroundColor = 'red';
//                 section3.style.backgroundColor = 'red';
//             }
//             else if (rating === 1) {
//                 section1.style.backgroundColor = 'red';
//                 section2.style.backgroundColor = 'grey';
//                 section3.style.backgroundColor = 'grey';
//             }
//             else if (rating === 2) {
//                 section1.style.backgroundColor = 'yellow';
//                 section2.style.backgroundColor = 'yellow';
//                 section3.style.backgroundColor = 'grey';
//             }
//             else if (rating === 3) {
//                 section1.style.backgroundColor = 'yellow';
//                 section2.style.backgroundColor = 'yellow';
//                 section3.style.backgroundColor = 'yellow';
//             }
//             else if (rating === 4) {
//                 section1.style.backgroundColor = 'green';
//                 section2.style.backgroundColor = 'green';
//                 section3.style.backgroundColor = 'green';
//             }
//         });

//1)використання var, 
//2)коментарі краще залишати англійською, 
//3)назви змінних мають бути більш descriptive, 
//4)в js більш розповсюджено використання camelCase - ніж snakeCase (але і так також можна)


const inputTest = document.getElementById('inputTest');  // field
const section1 = document.getElementById('section1'); // section 1
const section2 = document.getElementById('section2'); // section 2
const section3 = document.getElementById('section3'); // section 3

const sLetters = "abcdefghijklmnopqrstuvwxyz";
const bLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const specials = "!@#$%^&*()_+";

inputTest.addEventListener('keyup', function(evt) {
    let inputTestVal = inputTest.value; // value from fields

    let hasLowercase = false; 
    let hasUppercase = false;
    let hasDigit = false;
    let hasSpecialChar = false;

    for (let i = 0; i < inputTestVal.length; i++) {
        if (!hasLowercase && sLetters.indexOf(inputTestVal[i]) != -1) {
            hasLowercase = true;
        }
        else if (!hasUppercase && bLetters.indexOf(inputTestVal[i]) != -1) {
            hasUppercase = true;
        }
        else if (!hasDigit && digits.indexOf(inputTestVal[i]) != -1) {
            hasDigit = true;
        }
        else if (!hasSpecialChar && specials.indexOf(inputTestVal[i]) != -1) {
            hasSpecialChar = true;
        }
    }

    let rating = 0; // How complex is the password?

    if (hasLowercase) rating++;
    if (hasUppercase) rating++;
    if (hasDigit) rating++;
    if (hasSpecialChar) rating++;

    if (inputTestVal.length === 0) {
        section1.style.backgroundColor = 'grey';
        section2.style.backgroundColor = 'grey';
        section3.style.backgroundColor = 'grey';
    }
    else if (inputTestVal.length < 8) {
        section1.style.backgroundColor = 'red';
        section2.style.backgroundColor = 'red';
        section3.style.backgroundColor = 'red';
    }
    else if (rating === 1) {
        section1.style.backgroundColor = 'red';
        section2.style.backgroundColor = 'grey';
        section3.style.backgroundColor = 'grey';
    }
    else if (rating === 2) {
        section1.style.backgroundColor = 'yellow';
        section2.style.backgroundColor = 'yellow';
        section3.style.backgroundColor = 'grey';
    }
    else if (rating === 3) {
        section1.style.backgroundColor = 'yellow';
        section2.style.backgroundColor = 'yellow';
        section3.style.backgroundColor = 'yellow';
    }
    else if (rating === 4) {
        section1.style.backgroundColor = 'green';
        section2.style.backgroundColor = 'green';
        section3.style.backgroundColor = 'green';
    }
});
