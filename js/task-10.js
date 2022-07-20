function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
var render = document.querySelector('[data-create]');
var destroy = document.querySelector('[data-destroy]');
var boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  var amount = + document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  var basicSize = 30;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    var size = basicSize + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color:  ${getRandomHexColor()} `;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
 /* Ответ найден на сайте https://htmlforum.io/topic/60197-kak-napisat-skript-sozdaniya-i-ochistki-kollekcii-elementov/ */