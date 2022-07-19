/* Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous". */

const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener("input", (event) => {
  event.currentTarget.value === "" ? outputNameEl.textContent = "Anonymous":
  outputNameEl.textContent = event.currentTarget.value;
})