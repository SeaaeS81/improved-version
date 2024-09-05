//  let isTeach = confirm('Are you thecher or student?');

//  console.log(isTeach);

// //  if (isTeach) {
// //     dokument.writer('<h1> You have lesson</h1>')
// //  } else {
// //     dokument.write('<h2> Relax </h2>')
// //  }

// isTeach ? document.write('<h1> You have lesson</h1>') : document.write('<h2> Relax </h2>') // тернарный оператор



// ----ЦИКЛЫ for------------------------------------------------

// for (let i = 0; i < 5; i ++ ) {
//     document.write('<h2> Relax </h2>');
// }

// for (let i = 0; i < 300; i++ ) {
//     console.log(i)
// }

// факториал

// let a = 1;

// for (let i = 10; i > 0; i--) {
//     a*= i
// }
// console.log(a);

// let a = 10;

// for (a; a > -10; a--) {
//     console.log(a);
// }
//------------------------------------------------------------------
// Циклы for in: for of

// let studensts = [
//     'aaa',
//     'sss',
//     'ddd',
//     'fff',
//     'ggg',
//     'hhh',
//     'jjj',
//     'kkk',
//     'lll',
//      'zzz',
// ];
// //document.write('<h3>hello  '  + studensts[0] + '</h3>')

// console.log(studensts.length);

// for ( let i = 0; i < studensts.length; i++) {
//     console.log('<h3>hello  '  + studensts[i] + '</h3>');
//     document.write('<h3>hello  '  + studensts[i] + '</h3>')
// }




// for (let i = 100; i >= 1; i--) {
//     //console.log(i)
//     document.write('<h3>' + i + '</h3>');
// }


                                                                      //Код запрашивает у пользователя число с помощью
let message = prompt('Enter you numcer (i will make factjrial n!) ');

 let num = Number(message);   //Введенное значение преобразуется в число и сохраняется в переменной num.                                                                

if (num) {     //Если num является числом (не нулем и не NaN), выполняется следующий блок кода.
    let endNum = 1                                                                 

    if (num < 0) { //Если число отрицательное, результат (endNum) становится отрицательным.                                                   
        num = 0 - num;                                                        
            
        }
                                    
        for (num; num >0; num--) { //Если число отрицательное, результат (endNum) становится отрицательным.
            endNum *= num;
        }
        document.write('<h4>' + endNum + '<h4/>')
  
}else if (num ===0) {  //Если введено 0, выводится сообщение “You entered 0”.
    document.write('You entered 0');
} else {
    document.write('You entered symbol! No number!')
}