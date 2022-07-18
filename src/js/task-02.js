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
console.log(...elements );
ingredientsEl.append(...elements)
