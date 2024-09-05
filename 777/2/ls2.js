

// // let isTeach = confirm('Are you techer or student?');

// // console.log(isTeach);

// let a = 0;

// if(1) {

//     document.write('<h1> You have lesson </h1>')

// } else {

//     document.write('Relax')

// }
//let isTeach = confirm('Are you techer or student?');
///let age = prompt('Enter your age');

//console.log(isTeach, age);

// if ((isTeach)  || (age >= 18 && age <= 60)) {
//     document.write('<h1> You have lesson </h1>')
// } else {
//     document.write('Relax')
// }

// let a = 10 > 9
// let b = 9 < 10 
// let c = 9 <= 10
// let d = 10 >= 10

// let e = 10 === 10
// let f = 10 == 10

// let h = 10 != 9
// let g = 10 !== 9

// let a = 17 % 5
// let b = 17 / 5
// let c = 2**2

// console.log(a);
// console,log(b);
// console.log(c);


// let isTeach = comfirm('Are you techer');
// let isStydent = confirm('Are you student?');

 let age = promt('Enter your age');

// if(isTeach) {

//     dokument.write('Go to teach students')

// } else if (isStudent) {

//     document.write('Go to learn lesson')

// } else if (age <= 18) {

//     document.write('You are too young')

// } else {

//     document.write('Smth went wrong!')
//}

switch (Number(age))  {
    case 10: document.write('You teenage')
        break;
    case 16: document.write('You gue')
        break;
    case 25: document.write('adult person')
        break;
    case 80: document.write('old person')
        break;
        default: document.write('You entered your age')
}