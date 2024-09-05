// *Розділяйте кожний пункт домашнього в коді коментарями.

// 1. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

// for (let i = 2; i <= 20; i++) {
//     console.log(i)
// }

// // 2. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
// //    Виведіть цей масив на консоль і визначте його тип даних.

// let sport = [

//     'pfel',
//     'green',
//     43,
// ];
// console.log(typeof(sport));

// 3. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.

// let age = prompt('Enter your age');

// if (age >= 15 && age <= 25) {
//     document.write('<h1> You have lesson </h1>')
   
// } else {
//     document.write('Relax')
// } 

// let number1 = prompt('enter the first number')
// let number2 = prompt('enter the second number')

// if (number1 > number2) {
//     document.write('<h1>The larger number is: ' + number1 + '</h1>');
// } else if (number1 < number2) {
//     document.write('<h1>The larger number is: ' + number2 + '</h1>');

// } else {
//     document.write('<h1>Both numbers are equal</h1>');
// }

// 4. Напишіть цикл for який виводить всі непарні числа від 1 до 15.

// for (let i = 1; i <= 15; i++) {
//         if(i % 2 !== 0) { // if (i % 2 !== 0): Условие, которое проверяет, является ли i нечетным числом
//    console.log(i)
//         }
//          }

// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

// let sport = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

// for (let i of sport) {
//         if (typeof i === 'number'&& i % 2 === 0){
//                 console.log(i);
//         }
        
// }


// 6. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

// let sport = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

// for (let i of sport) {
//         if (typeof i === 'number'&& i % 2 !== 0) {
//                 console.log(i);
//         }
        
// }

// 7. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

// let array = [1, 2, 4, 2, 3, 55, 66, 777, 12];
// let sum = 0;

// for (let item of array) { //На первой итерации item равно 1, и sum становится 1.
//         sum += item;      //На второй итерации item равно 2, и sum становится 3 (1 + 2)
// }
// console.log(sum);

// 8. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

// let array = [1, 2, 4, 2, 3, 5, 6, 7, 1];

// let prod = 1;

// for (let item of array) {
//         prod *= item;
// }
// console.log(prod);


// 9. Дано 2 prompt, Один дізнається ім'я, а інший число.
//    - Якщо імя Admin а число більше 100 вивести: good job
//    - Якщо імя System а число рівне 10 вивести: admin job
//    - Якщо імя World а число більше 200 вивести: good world
//    - Якщо імя Smth а число менше 0 вивести: minus num

   let name = prompt('what name')
   let number = prompt('what number')

   number = Number(number);//// Перетворюємо введене число на тип Number

   if (name === "Admin" && number > 100) {
        console.log("good job");
   } else if (name === "system" && number === 10) {
        console.log("admin job");
   } else if (name ==="World" && number > 200) {
        console.log("good world");
   }else if (name === "Smth" && number < 0) {
        console.log("minus num")
   } else {
        console.log("game over");
   }



