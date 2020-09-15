const str = 'test';
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);
console.log(str[2]); // Выведет букву 's'

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'some fruit';
console.log(fruit.indexOf('fruit')); // Выведет 5, так как слово "fruit" начинается с 5 символа

const logg = 'Hello, world!';
console.log(logg.slice(7, 12)); // Вырежется слово world
console.log(logg.substring(7, 12)); // Вырежется слово world
console.log(logg.substr(6, 5)); // Вырежется слово world

const num = 12.2;
console.log(Math.round(num)); // Округляет

const test ='12.2px';
console.log(parseInt(test)); // Выведет 12
console.log(parseFloat(test)); // Выведет 12.2