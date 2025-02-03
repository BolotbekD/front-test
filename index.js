let openModal = document.querySelector(".floors");
let closeModal = document.querySelector(".btn-close");
let myModal = document.querySelector(".simpleModal");
let formFooter = document.querySelector(".formFooter");
let form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault(); // Останавливаем стандартную отправку формы

    let username = document.querySelector("#username").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let phonePattern = /^\+996\d{9}$/; // Проверка формата номера

    if (username === "" || phone === "") {
      alert("Заполните все поля!");
      return; // Остановить выполнение, если поля пустые
    }

    if (!phonePattern.test(phone)) {
      alert("Введите корректный номер в формате +996XXXXXXXXX");
      return;
    }

    alert("Наш оператор свяжеться с Вами в ближйщее время");

    form.reset();
  });
}

if (formFooter) {
  formFooter.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let username = document.querySelector("#footer-username").value.trim();
    let phone = document.querySelector("#footer-phone").value.trim();
    let phonePattern = /^\+996\d{9}$/;

    if (username === "" || phone === "") {
      alert("Заполните все поля!");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Введите корректный номер в формате +996XXXXXXXXX");
      return;
    }

    alert("Наш оператор свяжеться с Вами в ближйщее время");

    formFooter.reset();
  });
}

if (openModal && myModal) {
  openModal.addEventListener("click", () => {
    myModal.style.display = "block";
  });
}

if (closeModal && myModal) {
  closeModal.addEventListener("click", () => {
    myModal.style.display = "none";
  });
}

document.addEventListener("click", (event) => {
  if (myModal && myModal.style.display === "block") {
    if (!myModal.contains(event.target) && !openModal.contains(event.target)) {
      myModal.style.display = "none";
    }
  }
});
