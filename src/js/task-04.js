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



