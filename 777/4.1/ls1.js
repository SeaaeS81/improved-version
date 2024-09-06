
// * Розділяйте кожний пункт домашнього в коді коментарями.

// * Кожне завдання повинно бути виконане на 5 циклах: for, for of, for in, while, do while

// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

// console.log('------------for-----------');

// let arr = [20,21,22,23,24,25,26,27,28,29,30,31,32];// масив


// for ( let i = 0; i < arr.length; i ++) {    // for класическая итерация 
//     if (arr[i]% 2 === 0) {
//         console.log(arr[i]);

//     }
   
//  };
// console.log('--for- of--------');

// for (let el of arr) {   
//     if(el % 2 === 0) {
//         console.log(el);

//     }                 // for of цикл  только для итерации масивов          
    
//   };
//   console.log('--for-in--------');

//   for (let el in arr) {   
//     if(el % 2 === 0) {                      // for in цикл   для масивов по индексу и обьектов по ключу
//     console.log(arr[el]);
// }
//   }
//   console.log('--while--------');

//   let i = 0;                                    // while цикл

//  while (i < arr.length) { 

//     if(arr[i] % 2 === 0) {

//         console.log(arr[i]);

//     }
  
//    i++;
//  };
//  console.log('--do--while--------');

//  let ind = 0;                             // do while цикл послеумовный цикл

//  do {  
    
//         if(arr[i] % 2 === 0) {

//             console.log(arr[ind]);

//         }
     
//   ind++; 

//  } while (ind < arr.length);



// 2. Створіть масив зі списком:
//    вашого улюбленого фрукту,
//    вашого улюбленого кольору,
//    ім'я,
//    рандомного числа,
//    вашого віку.

let ar = ["apfel", "blua", "Yevhen", 777, 43];

for (let i = 0; i < ar.length; i++) {                   // for тип данных
    console.log(ar[i],typeof ar[i]);
}
console.log('------------------------')
//    Виведіть цей проітерований масив на консоль і визначте його тип даних.на 5 циклах: for, for of, for in, while, do while

for (let i of ar) {
    console.log(i,typeof i);                         //// for of тип данных
}
console.log('------------------------')

for (let index in ar) {                               // for in тип данных
    console.log(ar[index], typeof [index]);
}
console.log('------------------------')

let is = 0;
while (is < ar.length) {
    console.log(ar[is], typeof ar[is]);           // while тип данных
    is++;
}
console.log('------------------------')

im = 0;
do {
    console.log(ar[im], typeof ar[im]);          //do while тип данных
    im++;
} while (im < ar.length);



// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

// 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.