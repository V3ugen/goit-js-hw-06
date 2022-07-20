/* Задание 8
Напиши скрипт управления формой логина.
1 Обработка отправки формы form.login-form должна быть по событию submit.
2 При отправке формы страница не должна перезагружаться.
3 Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
4 Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
5 Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */
const logFormEl = document.querySelector('.login-form');
logFormEl.addEventListener('submit',onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    alert("Введите Email или Password")
  } else {
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //   console.log(`${name}: ${value}`);
    //   const user = {name,value}
    //   console.log(user);
    // })
    const user = {
      email,
      password
    } ;
    console.log(user);
    logFormEl.reset()
  }
}

