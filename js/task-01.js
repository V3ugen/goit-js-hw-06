/* Задание 1
В HTML есть список категорий ul#categories.
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */

const itemElAll = document.querySelectorAll('.item');
const categoriesEl =  document.querySelector('#categories');
const itemEl = document.querySelector('.item');

const numberOfAnimals = categoriesEl.firstElementChild.lastElementChild.children.length ;

const numberOfProducts = categoriesEl.firstElementChild.nextElementSibling.lastElementChild.children.length ;

const numberOfTechnologies = categoriesEl.lastElementChild.lastElementChild.children.length ;

const numberOfCategories = itemElAll.length ;

const firstCategory = itemEl.firstElementChild.textContent ;
const secondCategory = categoriesEl.firstElementChild.nextElementSibling.firstElementChild.textContent;
const thirdCategory = categoriesEl.lastElementChild.firstElementChild.textContent;

console.log(`Number of categories: ${numberOfCategories}
`);
console.log(' ');

console.log(`Category: ${firstCategory}`);

console.log(`Elements: ${numberOfAnimals}`);


console.log(`Category: ${secondCategory}`);
console.log(`Elements: ${numberOfProducts}`);


console.log(`Category: ${thirdCategory}`);

console.log(`Elements: ${numberOfTechnologies}`);



/* elem.parentNode - выберет родителя elem.
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа). */