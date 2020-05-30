//alert('Ты здесь?');

//const result = confirm('Ты здесь?');

// const answer = prompt('Тебе есть восемнадцать?', 'Да'); //Результат от пользователя - строка (string)
// const answer2 = +prompt('Тебе есть восемнадцать?', 'Да'); //Результат от пользователя - Число

const answer = [];

answer[0] = prompt('Как тебя зовут?', '');
answer[1] = prompt('Как твоя фамилия?', '');
answer[3] = +prompt('Сколько тебе лет?', '');

console.log(answer); // ответы пользователя выводятся в консоль
console.log(typeof(answer)); // выводит тип данных массива "answer"