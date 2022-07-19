/* Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста. */

const textEl = document.querySelector('#text');
const inputFondSize = document.querySelector('#font-size-control');


inputFondSize.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

/* ОТВЕТ НАЙДЕН НА САЙТЕ https://ru.stackoverflow.com/questions/1027201/*/