"use strict";

console.log('arr' + ' - object');
console.log(4 + '8'); // = 48
console.log(4 + +'8'); // = 12

let incr = 10,
    decr = 10;

// incr++; // = 11
// decr--; // = 9
// console.log(incr, decr);

//console.log(incr++, decr--); // Выведется 10 и 10
//console.log(++incr, --decr); // Выведется 11 и 9

console.log(5 % 2); // Выведется 1

console.log(2*4 == '8'); // true
console.log(2*4 === '8'); // false, так как строгое сравнение (сранвиваются типы данных)

let IsChecked = true,
    IsClose = true;

console.log(IsChecked && IsClose); // true
console.log(IsChecked || IsClose); // true
console.log(IsChecked || !IsClose); // true; ! - оператор отрицания

console.log(2+2*2 != '6'); // false, так как 2+2*2 == '6'
console.log(2+2*2 !== '6'); // true, так как строгое сравнение и действительно 2+2*2 не равно строке '6'