"use strict";

//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// const sl = document.getElementById('super_link');
// console.log(sl);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const cl = document.querySelectorAll('a.card-link');

// cl.forEach(link => {
//   link.textContent = 'ссылка';
// });


//Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const cl_3 = document.querySelectorAll('.card-body .card-link');

// // console.log(`Dffff ${cl_3}`);
// console.log(cl_3);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const el = document.querySelector('[data-number="50"]');
// if (el) {
//   console.log(el);
// } else {
//   console.log('Элемент с атрибутом data-number="50" не найден.');
// }

//5. Выведите содержимое тега title в консоль.
// const titleContent = document.title;
// console.log(titleContent);
// const ttl = document.querySelector('title');
// console.log(ttl.innerHTML);


//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// const cardTitleEl = document.querySelector('.card-title');
// const parentEl = cardTitleEl.parentNode;
// console.log(parentEl);


//7.Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// Делаем элемент <p>
// const paragraphEl = document.createElement('p');
// paragraphEl.innerHTML = 'Привет';

// // Находим элемент с классом "card"
// const cardEl = document.querySelector('.card');

// // Добавляем созданный <p> в начало элемента с классом "card"
// cardEl.insertBefore(paragraphEl, cardEl.firstChild);


// //8. Удалите тег h6 на странице.
// const h6 = document.querySelector('h6');
// h6.remove();