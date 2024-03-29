/* Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue. */

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

console.log(decrementEl);
console.log(incrementEl);
console.log(valueEl.textContent);

const counterValueInc = () => {
  valueEl.textContent = counterValue += 1;
};
const counterValueDec = () => {
  valueEl.textContent = counterValue -= 1;
} ;
decrementEl.addEventListener("click",counterValueDec )
incrementEl.addEventListener("click",counterValueInc )



