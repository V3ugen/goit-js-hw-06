/* Задание 9
Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
Для генерации случайного цвета используй функцию getRandomHexColor. */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = bodyEl.style.backgroundColor;
}
changeColorBtnEl.addEventListener("click", changeColor)


// const btnEl = document.querySelector("button");
// const spanContentEl = document.querySelector("span");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function changeBodyBgrColor(event) {
//   const getRandomColorValue = getRandomHexColor();
//   document.body.style.backgroundColor = getRandomColorValue;
//   spanContentEl.textContent = getRandomColorValue;
// }

// btnEl.addEventListener("click", changeBodyBgrColor);