const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// 1-ый способ изменения стиля
box.style.backgroundColor = 'blue';
box.style.width = '400px';

btns[0].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'orange';

// 2-ой способ 
box.style.cssText = 'background-color: blue; width: 400px';

// Для того чтобы изменять сразу несколько элементов (1-ый способ)
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// 2-ой способ
hearts.forEach(item => {
item.style.backgroundColor = 'blue';
});

// Добавление новых элементов на страницу
const div = document.createElement('div');
div.classList.add('black');
document.body.append(div); // Добавляет в тег 'body' новый элемент 'div'

// Можно также добавить новый элемент в класс 'wrapper'
// wrapper.append(div);

// wrapper.prepand(div); // Добавляет в начало класса элемент div

hearts[0].before(div); // Добавляет перед 1-ой сердечкой элемент 'div'
hearts[1].after(div); // Добавляет перед 1-ой сердечкой элемент 'div'

circles[0].remove(); // Удаляет элемент

hearts[0].replaceWith(circles[0]); // Заменяет первое сердечко первым кружочком

// Старые методы
document.body.appendChild(div); // append
wrapper.insertBefore(div, hearts[0]); // before
wrapper.removeChild(circles[0]); // remove
wrapper.replaceChild(circles[0], hearts[0]); // replaceWidth

div.innerHTML = '<h1>Hello, world</h1>'; // В эл. 'div' добавляется заголовок
div.textContent = 'Hello,world'; // Добавляется просто текст

div.insertAdjacentHTML('afterbegin', '<h1>Hello<h1>');