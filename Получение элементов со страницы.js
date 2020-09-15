const box = document.getElementById('box');
console.log(box); // Откроется только в браузере

const btns = document.getElementsByTagName('button'); // Поиск элементов по определённому тегу. Выводится в формате псевдомассива.
console.log(btns);

const btns2 = document.getElementsByTagName('button')[1]; // Поиск элементов по определённому тегу и по определённому индексу этого тега (в данном случае '1') в псевдомассиве.  
console.log(btns2);

// Сокращённый вид 
const btns3 = document.getElementsByTagName('button');
console.log(btns3[1]);

//Без индекса нельзя поменять стиль элемента

// Получение элементов по классу
const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // Поиск по классу (Все классы)
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const hearts2 = document.querySelector('.heart'); // Поиск по классу (Только первый элемент, который совпадает по классу).