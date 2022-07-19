/* Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста. */

const textEl = document.querySelector('#text');
const inputFondSize = document.querySelector('#font-size-control');
const minSize = parseInt(inputFondSize.getAttribute('min'));
const maxSize = parseInt(inputFondSize.getAttribute('max'));

console.log(maxSize);
