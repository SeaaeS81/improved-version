

var input_test = document.getElementById('input_test');  // поле
        var section1 = document.getElementById('section1'); // секция 1
        var section2 = document.getElementById('section2'); // секция 2
        var section3 = document.getElementById('section3'); // секция 3

        var s_letters = "abcdefghijklmnopqrstuvwxyz";
        var b_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var digits = "0123456789";
        var specials = "!@#$%^&*()_+";

        input_test.addEventListener('keyup', function(evt) {
            var input_test_val = input_test.value; // значение из поля

            var is_s = false; 
            var is_b = false;
            var is_d = false;
            var is_sp = false;

            for (var i = 0; i < input_test_val.length; i++) {
                if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
                    is_s = true;
                }
                else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
                    is_b = true;
                }
                else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
                    is_d = true;
                }
                else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
                    is_sp = true;
                }
            }

            var rating = 0; // на сколько сложный пароль

            if (is_s) rating++;
            if (is_b) rating++;
            if (is_d) rating++;
            if (is_sp) rating++;

            if (input_test_val.length === 0) {
                section1.style.backgroundColor = 'grey';
                section2.style.backgroundColor = 'grey';
                section3.style.backgroundColor = 'grey';
            }
            else if (input_test_val.length < 8) {
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