const arr = [1, 2, 3, 6, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);    // Показывает длину массива
// console.log(arr);

// arr.pop(); // Удаляет элемент
// console.log(arr);

// arr.push(10); // Добавляет в конец массива число 10
// console.log(arr);

// for (let i =0; i < arr.length; i++) {   // Переборка массива
//     console.log(arr[i]);
// } 

// for (let value of arr) {    // Переборка массива
//     console.log(value);
// }

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// const str = prompt("", "");             // Из строки делает массив  
// const products = str.split(", ");
// console.log(products);

const str = prompt("", "");             // Из массива делает строку
const products = str.split(", ");
products.sort();    // Сортировка в алф. порядке 
console.log(products.join('; '));