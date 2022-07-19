/* Задание 2
В HTML есть пустой список ul#ingredients.
В JavaScript есть массив строк.
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

// ingredients.forEach(function callback(element) {
//   const newLi = document.createElement('li');
//   newLi.textContent = element;
//   ingredientsEl.append(newLi)
// })

const elements = ingredients.map(option => {
  const newLi = document.createElement('li');
  newLi.textContent = option;
  return newLi;
}) ;

ingredientsEl.append(...elements)
