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

const categoriesEl =  document.querySelector('#categories');
const itemElAll = document.querySelectorAll('.item');
const itemEl = document.querySelector('.item');

// const numberOfAnimals = categoriesEl.firstElementChild.lastElementChild.children.length ;

// const numberOfProducts = categoriesEl.firstElementChild.nextElementSibling.lastElementChild.children.length ;

// const numberOfTechnologies = categoriesEl.lastElementChild.lastElementChild.children.length ;

// const numberOfCategories = itemElAll.length ;

// const firstCategory = itemEl.firstElementChild.textContent ;
// const secondCategory = categoriesEl.firstElementChild.nextElementSibling.firstElementChild.textContent;
// const thirdCategory = categoriesEl.lastElementChild.firstElementChild.textContent;

// console.log(`Number of categories: ${numberOfCategories}
// `);
// console.log(' ');

// console.log(`Category: ${firstCategory}`);

// console.log(`Elements: ${numberOfAnimals}`);


// console.log(`Category: ${secondCategory}`);
// console.log(`Elements: ${numberOfProducts}`);


// console.log(`Category: ${thirdCategory}`);

// console.log(`Elements: ${numberOfTechnologies}`);

// itemEl.forEach(function (number) {
//   console.log(number);
// });
console.log(`Number of categories: ${itemElAll.length}`);

itemElAll.forEach(listItemEl => {

  const itemCategoryListEl = listItemEl.firstElementChild.textContent;
  console.log(`Category: ${itemCategoryListEl}`);

  const itemElementListEl = listItemEl.lastElementChild ;
  const itemSubElementListEl = itemElementListEl.querySelectorAll('li');

  console.log(`Elements: ${itemSubElementListEl.length}`);
})
/* все равно ответ был спижен(( */