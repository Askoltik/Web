// Получить модальный
var modal = document.getElementById("myModal");
// Получить кнопку, которая открывает и закрывает модальное окно
var btn = document.getElementById("myBtn");
var btncls = document.getElementById("closemodal");
// Получить элемент <span>, который закрывает модальное
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрывает модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
// Когда пользователь нажимает на кнопку отправки формы, закрывает модальное окно
btncls.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закрывает модальное окно
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
