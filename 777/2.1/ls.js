// 1. Перевести тип і в консоль вивести результат через typeof:

// - стрічку в булевий Boolean
let strBool = Boolean("strichka");
console.log(strBool);// true
console.log(typeof strBool); // boolean

// - число в булевий Boolean
let numTBool = Boolean(123);
console.log(numTBool);
console.log(typeof numTBool);

// - стрічку в число
let strABoll = Number("123");
console.log(strABoll);
console.log(typeof strABoll);

// - нул в булевий Boolean
let nullTBool = Boolean(null);
console.log(nullTBool);
console.log(typeof nullTBool);

// - андефайнед в булевий
let undefindetTbool = Boolean(null);
console.log(undefindetTbool);
console.log(typeof undefindetTbool);

// 2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
// 2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

let user = {
            name:"Sea",//1
            age:30,
            contact: {
                      email: "sea@gmail.com", //2
                      phone:"123-456-789",
                                address: {
                                      city:"kiev", //3
                                      street:"zubareva",
                                      zip:"01001"
                                        }
                   },
     preferences: {
          langauge:"ukr",
             theme: "blak",
             Notifications: {
                       email:true,
                         sms:false,
                        push: true
                    

   } 
                 },
                 activity: {
                    lastlogin: "2024-08-19",
                    posts: 15,
                    comments: 42
                 }

         };
console.log(user.contact.email);          
console.log(user.contact.address.city);
console.log(user.preferences.Notifications.email);          

// 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль

let list = [
    [1,2,3],//1
    [4,[5,6,7],8],//2
    [9,10,[11,12,13]]//3

];
console.log(list[1][1]);// [5, 6, 7]
console.log(list[1][1][0]); // 5
console.log(list[2][2][1]); // 12

// 4. Через prompt взяти вік та виконати наступні умови в if else:
// - Якщо вік більше 1 і менше 12 вивести: you are child
// - Якщо вік більше 12 і менше 18 вивести: you are teenager
// - Якщо вік більше 18 і менше 60 вивести: you are adult person
// - Якщо вік більше 60 вивести: you are so old
// let age = prompt("взяти вік");
// age = Number(age);

// if (age > 1 && age < 12) {
//     console.log("you are child");
// } else if (age > 12 && age < 18) {
//     console.log("you are teenager");
// } else if (age > 18 && age < 60) {
//     console.log("you are adult person");
// } else if (age >= 60) {
//     console.log("you are so old");
// } else {
//     console.log("finish");
// }

// 5. Через prompt взяти імя та виконати наступні умови в switch case:
// - Якщо ім'я є 'Admin' вивести: I have full access
// - Якщо ім'я є 'Student' вивести: Im student
// - Якщо ім'я є 'Teacher' вивести: Im teacher
// - Якщо ім'я є 'Young' вивести: I young and ready to party
// - Всі інші імена вивести: You entered own name

let name = prompt("взяти імя");

switch (name) {
    case 'Admin':
        console.log("I have full access");
        break;
    case 'Student':
        console.log("Im student");
         break;
    case 'Teacher':
        console.log("Im teacher");
        break;
    case 'Young':
        console.log("I young and ready to party");
        break;  
        default:
            console.log("You entered own name");                  
}


