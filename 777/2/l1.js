
let a = 1;
let b = 'ddd'
let c = true 
let d = null
let i = undefined
let s = Symbol(2)
let v = BigInt(44444)
//let o = {a: 1,b: 'ddd',c: true, ob:{num: 23, r:{h:'helo'}}}

//Array
//let arr = [true,false,1,'hello world']

//console.log(+false,true + 'd','its'+ undefindet)

//let a1 = a + b + c;
//console.log(a1);

//console.log('dd'+ 0)
//console.log(1 +0);
//console.log(true + o);

//console.log(number(b))
//Здесь вы пытаетесь вызвать функцию number с аргументом b.
//Однако, в JavaScript правильная функция для преобразования в число - это Number (с заглавной буквы).
//Если number не определена, это вызовет ошибку.

//let dd = Number(true)
//Вы создаете переменную dd и присваиваете ей значение, преобразованное из true в число.
//В JavaScript true преобразуется в 1. Поэтому dd будет равно

//console.log(dd);

//Выводите значение переменной dd в консоль. Это будет 1.

//let bb = String(c)

//Вы создаете переменную bb и присваиваете ей значение,
// преобразованное из переменной c в строку. 
// Если c не определена, bb будет равно "undefined".

//console.log(bb);
//Выводите значение переменной bb в консоль. Это будет "undefined", если c не определена.

//let cc = Boolean(null);
//Вы создаете переменную cc и присваиваете ей значение, преобразованное из null в булево значение.
 //В JavaScript null преобразуется в false. Поэтому cc будет равно false.
//console.log(cc);

//Выводите значение переменной cc в консоль. Это будет false.

// console.log(

// typeof(v)

// );
// console.log(typeof(d));

// console.log(typeof(i));

// console.log(arr)
// console.log(o);

// console.log(typeof([]));

// console.log(o.b);
// console.log(o.ob.num);
// console.log(o.ob.r.h)

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[3]);

// let o = {a: 1,b: 'ddd',c: true, ob:{num: 23, r:{h:'helo'}}}

// // array

// let arr = [true,false, 1,'hello world']

// // o.ob.nul = 100

// // console.log(o);

// // arr[2] = 'its index2'

// // console.log(arr);

// //console.log(arr[10]);

// arr[6] = 12
// arr[7] = 'ffff'
// console.log(arr);
// console.log(arr[4]);

let user ={
    name: 'DDD',
    age: 44,
    wife: {
              name:'DDDd',
              age: 33,
              location: {
                county:'ua',
                city: 'Kiiv'

             }

    },
    location: {
        contry: 'ua',
        city: 'lviv',
        lan: 444333,
        lon: 345354354
    }
}
let arr = [
    [],// = 0
    [ // = 1
        2, // = 0

        [// = 1

            'dfsdf',// = 0

            [],// = 1 

            [ // = 2
                true // = 0
            ] 
        ]
    ]
];
    

console.log(arr[1][0]);

console.log(arr[1][1][2][0]);





