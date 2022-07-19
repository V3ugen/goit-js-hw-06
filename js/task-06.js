/* Задание 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания. */

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