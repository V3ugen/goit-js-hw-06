const valInputEl = document.querySelector('#validation-input');

const length = valInputEl.getAttribute('data-length');


function onInputBlur(event) {
  
  valInputEl.classList.add("invalid");
  if (event.target.value.length === parseInt(length)) {

      valInputEl.classList.remove("invalid");
      valInputEl.classList.add("valid");
  }
  
}
valInputEl.addEventListener("blur", onInputBlur);