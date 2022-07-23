/* Задание 3
Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы. */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const elements = images.map(option => {
  
  const newLi = document.createElement('li');
  const newImg = document.createElement('img');
  
  newImg.src = option.url;
  newImg.alt = option.alt;
  newImg.width = 480;

  newLi.append(newImg)
  
  return newLi;
}); 
const galeryEl = document.querySelector('.gallery');

console.log(elements);


galeryEl.append(...elements)
galeryEl.style
// galeryEl.insertAdjacentHTML("afterbegin", toString(elements))

// const listEl = document.querySelector('.gallery');

// const imagesList = images.map(image => {
//   const imageItem = document.createElement('li');
//   const imageObject = document.createElement('img');
//   imageObject.src = image.url;
//   imageObject.alt = image.alt;

//   imageItem.append(imageObject);

//   return imageItem;
// });
// console.log( ...imagesList);

// listEl.insertAdjacentHTML("afterbegin", ...imagesList)