function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');

const colorEl = document.querySelector('.color');

const bodyEl = document.querySelector('body');


function changeColor() {

  bodyEl.style.backgroundColor = getRandomHexColor()
  
  colorEl.textContent = bodyEl.style.backgroundColor;
}
changeColorBtnEl.addEventListener("click",changeColor)