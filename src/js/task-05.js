const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener("input", (event) => {
  event.currentTarget.value === "" ? outputNameEl.textContent = "Anonymous":
  outputNameEl.textContent = event.currentTarget.value;
})