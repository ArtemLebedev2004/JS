"use strict";

// Функции вида: Function declaration (создаётся до начала выполнения скрипта, можно вызвать перед объявлением)

function showFirstMessage() {
    console.log('Hello, world!');
}

showFirstMessage(); // Вызываю функцию


function showMessage(text) {
    console.log(text);
}

showMessage('Hello, world!'); // Вызываю функцию с аргументом "text"

// Переменные, созданные внутри функции, не будут работать за её пределами. Такие переменные называются "локальными". 
//Но переменные, созданные вне функции ("глобальные" переменнные), могут изменяться внутри функции.


function showNum() {
    let num =30;
}
showNum();
console.log(num); // Выведет undefined


let num2 = 40;
function showNum2() {
    num2 = 10;
}
showNum2(); // Если мы не вызывем, то console.log(num2) выведет число 40
console.log(num2); // Выведет 10


let num3 = 7;
function showNum3() {
    let num3 = 4;
}
showNum3();
console.log(num3); // Выведет 7


let num4 = 7;
function showNum3() {
    let num4 = 4;
    console.log(num4); // Выведет 4
}
showNum3();
console.log(num3); // Выведет 7


let num5 = 7;
function showNum3() {
    let num4 = 4;
    console.log(num4); // Выведет 4
}
showNum3();
console.log(num3); // Выведет 7


// return

function calc(a, b) {
    return (a+b); // Возвращает значение наружу
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 7));


function ret() {
    let num6 = 4;
    return num6;
}

const anotherNum6 = ret();
console.log(anotherNum6);


// Function expression (создаётся только тогда, когда до неё доходит поток кода, можно вызвать только после объявления)

const logger = function() {
    console.log('Hello, world!');
};
logger();

// Стрелочные функции

const calc2 = (a, b) => {a + b};