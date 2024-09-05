
// let a = 0;

// while (a < 4) { // for (let i = 0; i < ob.length; i++)

//    console.log(a);
//    //a = a +1 

//    a += 1;
// }
// console.log('--------------------');

// for(let a = 0; a < 4; a+=1) { //for of, for in
//    console.log(a);
// }

// console.log('---------------------');  // итерация

// let b = 0  // послеумовный цикл

// do {   //do   делаем потом while проверяем

//   console.log(b);

//   b += 1;

// } while (b < 4)

//-------------------------------------------------------------------------

// let students = [   //масив
//    'aaa',
//    'sss',
//    'ddd',
//    'fff',
//    'ggg',
//    'Yevhen',
//    'jjj',
//    'kkk',
//    'lll',
//     'zzz',
// ];

// let ind = 0;  
  
//   while (ind < students.length) {
//    if (ind == 2) {
//       ind++
//       continue;
//    }
//    document.write(students[ind] + '<br');
//    ind++;
//   }

// for (let i = 0; i < students.length; i++) {
//    if (i == 2) {
//       continue;
//    }
//    document.write(students[i] + '<br');
// }
// console.log(students);

//--------------------------------------------------------

// let students = [   //масив
//    'aaa',
//    'sss',
//    'ddd',
//    'fff',
//    'ggg',
//    'Yevhen',
//    'jjj',
//    'kkk',
//    'lll',
//     'zzz',
// ];

// let ind = 0;  

// let  i = 0;

// while (i < students.length) {

//    if (students[i] === 'Yevhen') {

//       console.log('Евгена нашли и взяли на работу  програмиистом на индекске    ' + i );
//       break;
//    }

//    document.write(students[i] + '<br>')

//    i++

// }

let arr = [  //масив
   1,
   2,
   5,
   6,
   66,
   34,
   43,
   23,
   55454,
   777,
   90,
   9
];

for ( let i = 0; i < arr.length; i++) {    // for класическая итерация 
       console.log(arr[i]);
    };
 console.log('------------------------------');   


 for (let el of arr) {                     // for of цикл  только для итерации масивов          
   console.log(el);
 };

 console.log('------------------------------'); 

 for (let el in arr) {                        // for in цикл   для масивов по индексу и обьектов по ключу
        console.log(arr[el]);
 };

 console.log('------------------------------'); 

 let i = 0;                                    // while цикл

 while (i < arr.length) { 

   console.log(arr[i]);

   i++;
 };

 console.log('---------------------');

 let ind = 0;                             // do while цикл послеумовный цикл

 do {   

 console.log(arr[ind]);
  ind++;
   

 } while (ind < arr.length);