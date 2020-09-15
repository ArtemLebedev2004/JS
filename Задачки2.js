// 1, 2
"use strict";

const strings = ['Silence is golden', 'Вторник', 'Июнь', 'Артём'];

strings.forEach((item, i) => {
   if (i == 0) {
       console.log(item);
   } else if (i == 1) {
       console.log(`Сегодня ${item}`);
   } else if (i == 2) {
       console.log(`Сейчас ${item}`);
   } else {
       console.log(`Меня зовут ${item}`);
   }
});

// 3
// let c = '0',
//     b = 0;

// for (let i = 0; i < 5; i++) {
//     if (i == 0) {
//         console.log(c);    
//     } else {
//         console.log(c += b);
//     }
// }

// 4
for (let i = 0; i < 5; i++) {
    console.log('А А А А А А А А');
}

// 5
console.log('*      *      *');
console.log(' *    * *    * ');
console.log('  *  *   *  *');
console.log('   *       *');

// 6
console.log(1 + 2 - 4);

// 7 
console.log(1/2 + 1/4);

// 8
let a = 2,
    b = 3;
console.log( (a + 4 * b) * (a - 3 * b) + a^2);

// 9

let x = -2;
console.log(x^5);

